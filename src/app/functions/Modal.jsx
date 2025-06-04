"use client";
import "../Sass/_landingPage.scss";
import "../Sass/_intro.scss";
import "../Sass/_typy.scss";
import "../Sass/_galleryPletivo.scss";
import "../Sass/_galleryBeton.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Modal({ src, alt, className }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedImage]);

  const openModal = () => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className}
        width={350}
        height={300}
        placeholder="blur"
        onClick={openModal}
      />

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <Image
            className="modal-content"
            src={selectedImage}
            alt={alt}
            objectFit="cover"
            width={800}
            height={600}
          />
        </div>
      )}
    </>
  );
}

export default Modal;
