import nodemailer from "nodemailer";

function parseBooleanEnv(value) {
  return value === "1" || value === "true";
}

export function createMailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? parseBooleanEnv(process.env.SMTP_SECURE)
      : port === 465;
  const allowSelfSigned = parseBooleanEnv(
    process.env.SMTP_ALLOW_SELF_SIGNED || "",
  );

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: allowSelfSigned
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
  });
}

export function getMailConfigError() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return "Emailové odesílání není zatím správně nastavené. Zkontrolujte EMAIL_USER a EMAIL_PASS.";
  }

  return null;
}

export function getMailErrorMessage(error, fallbackMessage) {
  if (error?.code === "ESOCKET" && /self-signed certificate/i.test(error.message)) {
    return "SMTP spojení bylo při testu zablokováno certifikátem. Pro lokální test můžete do .env.local přidat SMTP_ALLOW_SELF_SIGNED=true.";
  }

  return fallbackMessage;
}
