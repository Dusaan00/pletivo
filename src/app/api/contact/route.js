import {
  createMailTransporter,
  getMailConfigError,
  getMailErrorMessage,
} from "../../../lib/mail";

const MAX_IMAGE_FILES = 5;
const MAX_EMAIL_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_IMAGE_SIZE = 15 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);
const ALLOWED_IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
]);

class AttachmentValidationError extends Error {}

const getFileExtension = (fileName = "") =>
  fileName.slice(fileName.lastIndexOf(".")).toLowerCase();

const sanitizeFileName = (fileName = "priloha") =>
  fileName
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120) || "priloha";

const isUploadedFile = (file) =>
  file &&
  typeof file === "object" &&
  typeof file.name === "string" &&
  typeof file.arrayBuffer === "function";

const hasAllowedImageSignature = (buffer, extension) => {
  if (buffer.length < 12) {
    return false;
  }

  const isJpeg =
    buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  const isPng =
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a;
  const isWebp =
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP";
  const isHeic =
    buffer.toString("ascii", 4, 8) === "ftyp" &&
    ["heic", "heix", "hevc", "hevx", "mif1", "msf1"].includes(
      buffer.toString("ascii", 8, 12),
    );

  if (extension === ".jpg" || extension === ".jpeg") return isJpeg;
  if (extension === ".png") return isPng;
  if (extension === ".webp") return isWebp;
  if (extension === ".heic" || extension === ".heif") return isHeic;

  return isJpeg || isPng || isWebp || isHeic;
};

const validateAndBuildAttachments = async (files) => {
  const uploadedFiles = files.filter(isUploadedFile);

  if (uploadedFiles.length > MAX_IMAGE_FILES) {
    throw new AttachmentValidationError(
      `Můžete nahrát maximálně ${MAX_IMAGE_FILES} obrázků.`,
    );
  }

  let totalSize = 0;
  const attachments = [];

  for (const file of uploadedFiles) {
    const extension = getFileExtension(file.name);
    const type = file.type || "";

    if (!ALLOWED_IMAGE_TYPES.has(type) && !ALLOWED_IMAGE_EXTENSIONS.has(extension)) {
      throw new AttachmentValidationError(
        "Povolené jsou pouze obrázky ve formátu JPG, PNG, WEBP, HEIC a HEIF.",
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (buffer.length > MAX_EMAIL_IMAGE_SIZE) {
      throw new AttachmentValidationError("Jeden obrázek může mít maximálně 5 MB.");
    }

    totalSize += buffer.length;

    if (totalSize > MAX_TOTAL_IMAGE_SIZE) {
      throw new AttachmentValidationError(
        "Celková velikost příloh může být maximálně 15 MB.",
      );
    }

    if (!hasAllowedImageSignature(buffer, extension)) {
      throw new AttachmentValidationError(
        "Některý z přiložených souborů není platný obrázek.",
      );
    }

    attachments.push({
      filename: sanitizeFileName(file.name),
      content: buffer,
      contentType: ALLOWED_IMAGE_TYPES.has(type) ? type : undefined,
    });
  }

  return attachments;
};

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const files = formData.getAll("file");

    const attachments = await validateAndBuildAttachments(files);

    const mailConfigError = getMailConfigError();

    if (mailConfigError) {
      return Response.json(
        { success: false, error: mailConfigError },
        { status: 500 },
      );
    }

    const transporter = createMailTransporter();

    await transporter.sendMail({
      from: `"Poptávka Pletivo Grygov" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Poptávka od ${name}`,
      text: `
Jméno: ${name}
Email: ${email}
Telefon: ${phone}

Zpráva:
${message}
      `,
      attachments,
    });

    await transporter.sendMail({
      from: `"Pletivo Grygov" <${process.env.EMAIL_USER}>`,
      to: email, // Odesíláme na email, který vyplnil návštěvník
      subject: "Potvrzení přijetí vaší zprávy - Pletivo Grygov",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>Dobrý den, pane/paní ${name},</h2>
          <p>děkujeme za Vaši nezávaznou poptávku na webu <strong>PletivoGrygov.cz</strong>.</p>
          <p>Tímto potvrzujeme, že jsme Vaši zprávu v pořádku obdrželi. Brzy se vám ozveme.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #666;">
            S pozdravem,<br>
            <strong>Pletivo Grygov</strong><br>
            Za Tratí 255, 783 73 Grygov<br>
            <a href="https://pletivogrygov.cz">www.pletivogrygov.cz</a>
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    const isAttachmentValidationError = error instanceof AttachmentValidationError;

    return Response.json(
      {
        success: false,
        error: getMailErrorMessage(
          error,
          "Poptávku se nepodařilo odeslat.",
        ),
      },
      { status: isAttachmentValidationError ? 400 : 500 },
    );
  }
}
