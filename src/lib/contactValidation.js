export class ContactValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ContactValidationError";
  }
}

const INVALID_PLACEHOLDER = /^(null|undefined)$/i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_PATTERN = /^[\p{L}\p{M} .'-]+$/u;
const PHONE_PATTERN = /^\+?[0-9\s().-]+$/;

const readTextField = (formData, fieldName) => {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const isMissingOrPlaceholder = (value) =>
  !value || INVALID_PLACEHOLDER.test(value);

export const validateContactFormData = (formData) => {
  const honeypot = readTextField(formData, "website");

  if (honeypot) {
    return { isSpam: true };
  }

  const name = readTextField(formData, "name");
  const email = readTextField(formData, "email").toLowerCase();
  const phone = readTextField(formData, "phone");
  const message = readTextField(formData, "message");

  if (isMissingOrPlaceholder(name)) {
    throw new ContactValidationError("Vyplňte prosím jméno.");
  }

  if (name.length < 3 || name.length > 80 || !NAME_PATTERN.test(name)) {
    throw new ContactValidationError("Zadejte prosím platné jméno.");
  }

  if (
    isMissingOrPlaceholder(email) ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email)
  ) {
    throw new ContactValidationError("Zadejte prosím platnou e-mailovou adresu.");
  }

  const phoneDigits = phone.replace(/\D/g, "");

  if (
    isMissingOrPlaceholder(phone) ||
    phone.length > 30 ||
    !PHONE_PATTERN.test(phone) ||
    phoneDigits.length < 9 ||
    phoneDigits.length > 15
  ) {
    throw new ContactValidationError("Zadejte prosím platné telefonní číslo.");
  }

  if (
    isMissingOrPlaceholder(message) ||
    message.length < 3 ||
    message.length > 2500
  ) {
    throw new ContactValidationError(
      "Zpráva musí obsahovat 3 až 2500 znaků.",
    );
  }

  return {
    isSpam: false,
    name,
    email,
    phone,
    message,
  };
};

export const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
