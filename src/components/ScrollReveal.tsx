"use client";

import { useEffect } from "react";
import styles from "../app/page.module.css";

export default function ScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px", // Trigger when the top of the element gets close to the bottom viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealActive);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements except for the dynamically-rendered skill cards,
    // which are managed locally inside the Skills component.
    const elements = document.querySelectorAll(`.${styles.reveal}:not(.${styles.skillCard}):not(.${styles.revealActive})`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
