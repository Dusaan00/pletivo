import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const files = formData.getAll("file");

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      })),
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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
    return Response.json({ success: false }, { status: 500 });
  }
}
