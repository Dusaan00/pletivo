"use client";
import React, { useState, useEffect } from "react";
import "../Sass/_form.scss";
import Link from "next/link";

const MAX_IMAGE_FILES = 5;
const MAX_ORIGINAL_IMAGE_SIZE = 8 * 1024 * 1024;
const MAX_EMAIL_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_IMAGE_SIZE = 15 * 1024 * 1024;
const MAX_IMAGE_EDGE = 1800;
const IMAGE_COMPRESSION_QUALITY = 0.82;
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];
const ALLOWED_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
];
const COMPRESSIBLE_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const formatMegabytes = (bytes) =>
  `${Math.round((bytes / 1024 / 1024) * 10) / 10} MB`;

const getFileExtension = (fileName = "") =>
  fileName.slice(fileName.lastIndexOf(".")).toLowerCase();

const isAllowedImageFile = (file) =>
  ALLOWED_IMAGE_TYPES.includes(file.type) ||
  ALLOWED_IMAGE_EXTENSIONS.includes(getFileExtension(file.name));

const getCompressedFileName = (fileName = "obrazek") => {
  const extensionIndex = fileName.lastIndexOf(".");
  const baseName =
    extensionIndex > 0 ? fileName.slice(0, extensionIndex) : fileName;

  return `${baseName}.jpg`;
};

const compressImageFile = (file) => {
  if (!COMPRESSIBLE_IMAGE_TYPES.includes(file.type)) {
    return Promise.resolve(file);
  }

  return new Promise((resolve) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      const largestEdge = Math.max(image.width, image.height);
      const scale = Math.min(1, MAX_IMAGE_EDGE / largestEdge);
      const width = Math.round(image.width * scale);
      const height = Math.round(image.height * scale);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl);

          if (!blob) {
            resolve(file);
            return;
          }

          const compressedFile = new File(
            [blob],
            getCompressedFileName(file.name),
            {
              type: "image/jpeg",
              lastModified: Date.now(),
            },
          );

          resolve(compressedFile.size < file.size ? compressedFile : file);
        },
        "image/jpeg",
        IMAGE_COMPRESSION_QUALITY,
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    image.src = objectUrl;
  });
};

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phoneNum: false,
    message: false,
  });

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  // NOVÝ STAV PRO DĚKOVNOU ZPRÁVU
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Stav pro zobrazení loadingu během odesílání (volitelné, ale doporučené)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingImages, setIsProcessingImages] = useState(false);

  const handleFile = async (selectedFiles) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles = [];
    const newPreviews = [];
    const warnings = [];
    let nextTotalSize = files.reduce((total, file) => total + file.size, 0);
    let remainingSlots = MAX_IMAGE_FILES - files.length;

    if (remainingSlots <= 0) {
      alert(`Můžete nahrát maximálně ${MAX_IMAGE_FILES} obrázků.`);
      return;
    }

    setIsProcessingImages(true);

    try {
      for (const selectedFile of Array.from(selectedFiles)) {
        if (remainingSlots <= 0) {
          warnings.push(`Byl dosažen limit ${MAX_IMAGE_FILES} obrázků.`);
          break;
        }

        if (!isAllowedImageFile(selectedFile)) {
          warnings.push(
            `Soubor "${selectedFile.name}" není podporovaný typ obrázku. Povolené jsou JPG, PNG, WEBP, HEIC a HEIF.`,
          );
          continue;
        }

        if (selectedFile.size > MAX_ORIGINAL_IMAGE_SIZE) {
          warnings.push(
            `Soubor "${selectedFile.name}" je příliš velký. Maximální velikost jednoho obrázku před úpravou je ${formatMegabytes(MAX_ORIGINAL_IMAGE_SIZE)}.`,
          );
          continue;
        }

        const preparedFile = await compressImageFile(selectedFile);

        if (preparedFile.size > MAX_EMAIL_IMAGE_SIZE) {
          warnings.push(
            `Soubor "${selectedFile.name}" je i po optimalizaci příliš velký. Maximální velikost jednoho odesílaného obrázku je ${formatMegabytes(MAX_EMAIL_IMAGE_SIZE)}.`,
          );
          continue;
        }

        if (nextTotalSize + preparedFile.size > MAX_TOTAL_IMAGE_SIZE) {
          warnings.push(
            `Celková velikost příloh může být maximálně ${formatMegabytes(MAX_TOTAL_IMAGE_SIZE)}.`,
          );
          continue;
        }

        newFiles.push(preparedFile);
        newPreviews.push(URL.createObjectURL(preparedFile));
        nextTotalSize += preparedFile.size;
        remainingSlots -= 1;
      }

      if (newFiles.length > 0) {
        setFiles((prev) => [...prev, ...newFiles]);
        setPreviews((prev) => [...prev, ...newPreviews]);
      }

      if (warnings.length > 0) {
        alert([...new Set(warnings)].join("\n"));
      }
    } finally {
      setIsProcessingImages(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNum("");
    setMessage("");
    setMessageLength(0);
    setFocused({
      name: false,
      email: false,
      phoneNum: false,
      message: false,
    });
    setFiles([]);
    setPreviews([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isProcessingImages) {
      return;
    }

    if (files.length > MAX_IMAGE_FILES) {
      alert(`Můžete nahrát maximálně ${MAX_IMAGE_FILES} obrázků.`);
      return;
    }

    if (
      files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL_IMAGE_SIZE
    ) {
      alert(
        `Celková velikost příloh může být maximálně ${formatMegabytes(MAX_TOTAL_IMAGE_SIZE)}.`,
      );
      return;
    }

    setIsSubmitting(true); // Zapneme loading stav

    try {
      const formData = new FormData();

      // textová pole
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phoneNum);
      formData.append("message", message);

      // soubory ze state (NE z inputu)
      files.forEach((file) => {
        formData.append("file", file);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true); // Přepneme na děkovnou zprávu
        resetForm(); // Volitelné, pokud bys chtěl umožnit odeslat další formulář
      } else {
        alert("Odeslání se nezdařilo. Zkuste to prosím znovu.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert(
        error.message || "Došlo k chybě při odesílání. Zkuste to prosím znovu.",
      );
    } finally {
      setIsSubmitting(false); // Vypneme loading stav
    }
  };

  const handleFocus = (inputName) => {
    setFocused({ ...focused, [inputName]: true });
  };

  // Pokud je formulář úspěšně odeslán, zobrazíme děkovnou zprávu
  if (isSubmitted) {
    return (
      <div className="containar">
        <div className="thank-you-wrapper">
          <svg className="success-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <h2 className="thank-you-title">Děkujeme za Vaši zprávu!</h2>
          <p className="thank-you-text">
            Formulář byl úspěšně odeslán. Na váš e-mail jsme zaslali potvrzení o
            přijetí.
          </p>
          <p className="thank-you-text">Brzy se vám ozveme s odpovědí.</p>
          <Link href="/">
            <button className="back-button">Zpět na hlavní stránku</button>
          </Link>
        </div>
      </div>
    );
  }

  // Pokud není odeslán, zobrazíme normální formulář (tento kód zůstává z 99% stejný)
  return (
    <div className="containar">
      <div className="content">
        <div className="left-side">
          {/* ... (Levá strana s kontakty zůstává beze změny) ... */}
          <div className="phone details">
            <svg className="clock ikon">
              <use href="/sprite2.svg#icon-clock"></use>
            </svg>
            <div className="topic">Provozní hodiny</div>
            <div className="text-one">Po - Pá</div>
            <div className="text-two">8:00 - 15:30</div>
          </div>

          <div className="address details">
            <svg className="add ikon">
              <use href="/sprite.svg#icon-location_on"></use>
            </svg>
            <div className="topic">Adresa</div>
            <div className="text-one">Za Tratí 255</div>
            <div className="text-two">783 73 Grygov</div>
          </div>

          <div className="phone details">
            <svg className="phony ikon">
              <use href="/sprite.svg#icon-call"></use>
            </svg>
            <div className="topic">Telefon - Kancelář</div>
            <div className="text-one">+420 608 474 760</div>
            <div className="text-two">+420 608 705 547</div>
          </div>

          <div className="email details">
            <svg className="email ikon">
              <use href="/sprite.svg#icon-email"></use>
            </svg>
            <div className="topic">Email</div>
            <div className="text-one">plotygrygov@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Zaslání poptávky</div>
          <p className="popis">
            Zde můžete zadat nezávaznou poptávku, odpovíme Vám do 24 hodin.
          </p>

          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            {/* ... (Inputy zůstávají beze změny) ... */}
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleFocus("name")}
                focused={focused.name.toString()}
                pattern="^[A-Za-zĚŠČŘŽÝÁÍÉŮÚÓěščřžýáíéůúó ]{3,30}$" // Přidána mezera do patternu, aby šlo zadat jméno i příjmení
                required
              ></input>
              <span className="achtung">
                Jméno musí být dlouhé 3-30 znaků, nesmí obsahovat speciální
                znaky
              </span>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Váš email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleFocus("email")}
                focused={focused.email.toString()}
                required
              ></input>
              <span className="achtung">Zadejte platnou emailovou adresu</span>
            </div>

            <div className="input-box">
              <input
                type="tel"
                name="phone"
                placeholder="Váš telefon"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                onBlur={() => handleFocus("phoneNum")}
                focused={focused.phoneNum.toString()}
                pattern="[+]?[0-9\s]{9,20}"
                required
              ></input>
              <span className="achtung">Zadejte platné telefonní číslo</span>
            </div>

            <div className="input-box message-box">
              <textarea
                type="text"
                name="message"
                placeholder="Vaše zpráva"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageLength(e.target.value.length);
                }}
                onBlur={() => handleFocus("message")}
                focused={focused.message.toString()}
                maxLength="2500"
                required
              ></textarea>
              {messageLength === 2500 && (
                <span className="achtung msg">
                  Zpráva může být dlouhá maximálně 2500 znaků
                </span>
              )}
            </div>

            <div
              className={`upload-box ${dragActive ? "active" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                name="file"
                accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                id="fileUpload"
                hidden
                onChange={(e) => handleFile(e.target.files)}
                multiple
              />

              {previews.length > 0 && (
                <div className="preview-wrapper">
                  {previews.map((src, index) => (
                    <div key={index} className="preview-item">
                      <img src={src} alt="Preview" />
                      <button
                        type="button"
                        className="remove-image"
                        onClick={() => {
                          URL.revokeObjectURL(previews[index]);
                          setFiles(files.filter((_, i) => i !== index));
                          setPreviews(previews.filter((_, i) => i !== index));
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="upload-controls">
                <p>
                  {previews.length > 0
                    ? "Přetáhnout další obrázky:"
                    : "Přetáhněte obrázky zde:"}
                </p>
                <span>nebo</span>
                <label htmlFor="fileUpload" className="upload-button">
                  Nahrát obrázky
                </label>
              </div>
            </div>

            <div className="form-button">
              {/* Změníme text tlačítka během odesílání */}
              <input
                type="submit"
                value={isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
                disabled={isSubmitting || isProcessingImages}
                style={{
                  opacity: isSubmitting || isProcessingImages ? 0.7 : 1,
                  cursor:
                    isSubmitting || isProcessingImages
                      ? "not-allowed"
                      : "pointer",
                }}
              />
            </div>
            <p className="privacy-text">
              Vaše údaje používáme pouze pro zpracování odpovědi na Vaši
              poptávku.
              <br />
              <Link href="/PrivacyPolicy" className="privacy-link">
                <u>Ochrana osobních údajů</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
