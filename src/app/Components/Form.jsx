"use client";
import React, { useState, useEffect } from "react";
import "../Sass/_form.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

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

  const handleFile = (selectedFiles) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles = [];
    const newPreviews = [];

    Array.from(selectedFiles).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      if (file.size > 5 * 1024 * 1024) {
        alert("Soubor je příliš velký (max 5MB).");
        return;
      }
      newFiles.push(file);
      newPreviews.push(URL.createObjectURL(file));
    });

    setFiles((prev) => [...prev, ...newFiles]);
    setPreviews((prev) => [...prev, ...newPreviews]);
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
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        alert("Formulář byl úspěšně odeslán!");
        resetForm();
      } else {
        alert("Odeslání se nezdařilo. Zkuste to prosím znovu.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Došlo k chybě při odesílání. Zkuste to prosím znovu.");
    }
  };

  const handleFocus = (inputName) => {
    setFocused({ ...focused, [inputName]: true });
  };

  return (
    <div className="containar">
      <div className="content">
        <div className="left-side">
          <div className="phone details">
            <svg className="clock ikon">
              <use href={`${basePath}/sprite2.svg#icon-clock`}></use>
            </svg>
            <div className="topic">Provozní hodiny</div>
            <div className="text-one">Po - Pá</div>
            <div className="text-two">8:00 - 15:30</div>
          </div>

          <div className="address details">
            <svg className="add ikon">
              <use href={`${basePath}/sprite.svg#icon-location_on`}></use>
            </svg>
            <div className="topic">Adresa</div>
            <div className="text-one">Za Tratí 255</div>
            <div className="text-two">783 73 Grygov</div>
          </div>

          <div className="phone details">
            <svg className="phony ikon">
              <use href="/sprite.svg#icon-call"></use>
            </svg>
            <div className="topic">Telefon</div>
            <div className="text-one">+420 608 705 547</div>
            <div className="text-two">+420 608 474 760</div>
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
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleFocus("name")}
                focused={focused.name.toString()}
                pattern="^[A-Za-zĚŠČŘŽÝÁÍÉŮÚÓěščřžýáíéůúó]{3,30}$"
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
                accept="image/*"
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
              <input type="submit" value="Odeslat poptávku"></input>
            </div>
            <p className="privacy-text">
              Vaše údaje nesdílíme s třetími stranami. Vaše údaje jsou použity
              pouze pro zpracování odpovědi na Vaši poptávku.
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
