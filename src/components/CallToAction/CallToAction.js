"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./CallToAction.module.css"; // Importera CSS-modulen

const CallToAction = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [formLoadedAt, setFormLoadedAt] = useState(Date.now());
  const [status, setStatus] = useState("");

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, formLoadedAt }),
      });

      if (response.ok) {
        setStatus("Tack! Ditt meddelande har skickats.");
        setFormData({ email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      setStatus("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Kontakta oss</h2>
      <p className={styles.sectionSubtitle}>
      Vi ser fram emot att höra av dig! Använd gärna formuläret nedan eller ring oss för ett personligt samtal.
      </p>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Din e-postadress
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>
              Ämne
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.formInput}
            ></textarea>
          </div>

          {/* Honeypot field, hidden from users */}
          <div className={styles.honeypot}>
            <label htmlFor="honeypot">Lämna detta fält tomt</label>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className={styles.formButton}>
              Skicka meddelande
            </button>
          </div>
        </form>

        {status && <p className={styles.formStatus}>{status}</p>}
      </div>

      <div className={styles.socialMediaSection}>
        <h3 className={styles.socialTitle}>Följ oss på sociala medier</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin />
          </a>
        </div>
        <p className={styles.contactInfo}>E-post: info@bonnatosen.se | Telefon: 012-345 6789</p>
      </div>
    </section>
  );
};

export default CallToAction;
