"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 4000);
  };

  return (
    <form className={`${styles.contactForm} ${styles.reveal} glass-panel`} onSubmit={handleContactSubmit}>
      {formSubmitted && (
        <div className={styles.formSuccess}>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className={styles.inputGroup}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          className={styles.inputControl}
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          className={styles.inputControl}
          value={formEmail}
          onChange={(e) => setFormEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          className={styles.inputControl}
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
          placeholder="Describe your inquiry..."
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
        Send Message
      </button>
    </form>
  );
}
