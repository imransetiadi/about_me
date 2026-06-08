"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const sectionKeys = ["home", "about", "experience", "skills", "education", "certifications", "contact"] as const;

const sectionLabels: Record<typeof sectionKeys[number], string> = {
  home: "Home",
  about: "About",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  certifications: "Certs",
  contact: "Contact",
};

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light";
      if (currentTheme) {
        setTimeout(() => {
          setTheme(currentTheme);
        }, 0);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionKeys.forEach((key) => {
      const el = document.getElementById(key);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: typeof sectionKeys[number]) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <button className={styles.logo} onClick={() => handleNavClick("home")} aria-label="Go to home section">
            IS<span></span>
          </button>

          <nav aria-label="Main navigation">
            <ul className={styles.navLinks}>
              {sectionKeys.map((key) => (
                <li
                  key={key}
                  className={`${styles.navItem} ${activeSection === key ? styles.navItemActive : ""}`}
                >
                  <a
                    href={`#${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(key);
                    }}
                  >
                    {sectionLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <button
              className={styles.menuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerActive : ""}`}>
        <ul className={styles.mobileNavLinks}>
          {sectionKeys.map((key) => (
            <li
              key={key}
              className={`${styles.navItem} ${activeSection === key ? styles.navItemActive : ""}`}
            >
              <a
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(key);
                }}
              >
                {sectionLabels[key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
