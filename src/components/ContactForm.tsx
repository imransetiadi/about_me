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
          Message drafted. Please follow up by email or WhatsApp for production inquiries.
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
          placeholder="Your name"
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
          placeholder="your@email.com"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Project or issue</label>
        <textarea
          id="message"
          rows={5}
          className={styles.inputControl}
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
          placeholder="Tell me about the platform, scope, and timeline."
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Send inquiry
      </button>
    </form>
  );
}
