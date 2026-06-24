"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "0017ec8c-9eef-4688-8672-d1ceb65f1202";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formName,
          email: formEmail,
          message: formMessage,
          subject: `New Portfolio Inquiry from ${formName}`,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormName("");
        setFormEmail("");
        setFormMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`${styles.contactForm} ${styles.reveal} glass-panel`} onSubmit={handleContactSubmit}>
      {submitStatus === "success" && (
        <div className={styles.formSuccess} style={{ background: "#d1fae5", color: "#065f46", border: "2px solid #059669", padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px" }}>
          Message sent successfully! I will get back to you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.formError} style={{ background: "#fee2e2", color: "#991b1b", border: "2px solid #dc2626", padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px" }}>
          Failed to send message. Please try again or email me directly at imransetiadi22@gmail.com.
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}>
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
