"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroups {
  [key: string]: SkillItem[];
}

function SkillIcon({ name }: { name: string }) {
  const lowercase = name.toLowerCase();
  
  if (lowercase.includes("openstack")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f01f4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (lowercase.includes("kubernetes")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#326ce5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="12" y1="12" x2="22" y2="8.5" />
        <line x1="12" y1="12" x2="2" y2="8.5" />
        <line x1="12" y1="12" x2="22" y2="15.5" />
        <line x1="12" y1="12" x2="2" y2="15.5" />
      </svg>
    );
  }
  if (lowercase.includes("openshift")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ee0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5" />
        <polyline points="12 6 17 9 17 15 12 18 7 15 7 9 12 6" />
      </svg>
    );
  }
  if (lowercase.includes("aws") || lowercase.includes("amazon")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M12 22V12" />
        <path d="M22 7v10l-10 5" />
        <path d="M2 7v10l10 5" />
      </svg>
    );
  }
  if (lowercase.includes("gcp") || lowercase.includes("google")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 18V6" />
        <path d="M6 12h12" />
      </svg>
    );
  }
  if (lowercase.includes("docker") || lowercase.includes("podman") || lowercase.includes("container")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2496ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="10" x2="6" y2="17" />
        <line x1="12" y1="10" x2="12" y2="17" />
        <line x1="18" y1="10" x2="18" y2="17" />
      </svg>
    );
  }
  if (lowercase.includes("nginx")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009639" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h6v6H4z" />
        <path d="M14 14h6v6h-6z" />
        <path d="M10 7h4v10h-4" />
      </svg>
    );
  }
  if (lowercase.includes("rhel") || lowercase.includes("red hat")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ee0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    );
  }
  if (lowercase.includes("ubuntu") || lowercase.includes("centos")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dd4814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    );
  }
  if (lowercase.includes("prometheus")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e6522c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }
  if (lowercase.includes("grafana")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f9a03f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    );
  }
  if (lowercase.includes("elastic")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00bfb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  }
  if (lowercase.includes("security") || lowercase.includes("penetration")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (lowercase.includes("automation")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }
  if (lowercase.includes("network") || lowercase.includes("networking") || lowercase.includes("ict")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ab47bc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M12 8v8M5 16v-4h14v4" />
      </svg>
    );
  }
  if (lowercase.includes("bash") || lowercase.includes("shell")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }
  if (lowercase.includes("troubleshooting") || lowercase.includes("diagnostics") || lowercase.includes("cluster")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  
  // Fallback: checkmark SVG
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkillTab, setActiveSkillTab] = useState("cloud");

  // Header state for scrolling effects
  const [scrolled, setScrolled] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // References for navigation tracking
  const sectionsRef = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Synchronize theme with attribute and state
  useEffect(() => {
    try {
      const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light";
      if (currentTheme) {
        setTheme(currentTheme);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  // Scroll event tracker
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

  // IntersectionObserver for tracking active section
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

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: keyof typeof sectionsRef) => {
    setMobileMenuOpen(false);
    sectionsRef[sectionId].current?.scrollIntoView({ behavior: "smooth" });
  };

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

  const skillData: SkillGroups = {
    cloud: [
      { name: "OpenStack Administration", level: 95 },
      { name: "Kubernetes (K8s) Orchestration", level: 92 },
      { name: "Red Hat OpenShift", level: 90 },
      { name: "Amazon Web Services (AWS)", level: 85 },
      { name: "Google Cloud Platform (GCP)", level: 80 },
      { name: "Docker & Podman Containers", level: 92 },
      { name: "Nginx & Reverse Proxies", level: 88 }
    ],
    linux: [
      { name: "Red Hat Enterprise Linux (RHEL)", level: 95 },
      { name: "CentOS & Ubuntu Server", level: 90 },
      { name: "Linux System Administration", level: 95 },
      { name: "Prometheus Monitoring", level: 85 },
      { name: "Grafana & Loki Observability", level: 82 },
      { name: "Elastic Stack (Elasticsearch, Kibana)", level: 85 }
    ],
    security: [
      { name: "Network Security & Hardening", level: 85 },
      { name: "Penetration Testing (Cybersecurity)", level: 80 },
      { name: "Industrial Electrical Automation", level: 75 },
      { name: "Enterprise ICT Networking", level: 88 },
      { name: "Shell Scripting (Bash)", level: 85 },
      { name: "Cluster Troubleshooting", level: 92 }
    ]
  };

  return (
    <div className={styles.page}>
      {/* Sticky Header Nav */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo} onClick={() => handleNavClick("home")}>
            &lt;IS/&gt; <span className={styles.logoDot}></span>
          </div>

          {/* Desktop Navigation */}
          <nav>
            <ul className={styles.navLinks}>
              {(Object.keys(sectionsRef) as Array<keyof typeof sectionsRef>).map((key) => (
                <li
                  key={key}
                  className={`${styles.navItem} ${activeSection === key ? styles.navItemActive : ""}`}
                >
                  <a href={`#${key}`} onClick={(e) => { e.preventDefault(); handleNavClick(key); }}>
                    {key === "certifications" ? "Certs" : key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            {/* Theme Toggle Button */}
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

            {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerActive : ""}`}>
        <ul className={styles.navLinks} style={{ display: "flex" }}>
          {(Object.keys(sectionsRef) as Array<keyof typeof sectionsRef>).map((key) => (
            <li
              key={key}
              className={`${styles.navItem} ${activeSection === key ? styles.navItemActive : ""}`}
            >
              <a href={`#${key}`} onClick={(e) => { e.preventDefault(); handleNavClick(key); }}>
                {key === "certifications" ? "Certs" : key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section id="home" ref={sectionsRef.home} className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroLeft}>
              <div className={styles.profileAvatarContainer}>
                <Image
                  src="/profile.jpg"
                  alt="Imran Setiadi"
                  width={160}
                  height={160}
                  priority
                  className={styles.profileAvatar}
                />
              </div>
              <span className={styles.welcomeTag}>Hello, World_</span>
              <h1 className={styles.heroTitle}>
                Imran Setiadi
              </h1>
              <p className={styles.welcomeTag} style={{ color: "var(--color-primary)", borderColor: "var(--color-primary-glow)", background: "var(--color-primary-glow)" }}>
                Cloud Engineer
              </p>
              <p className={styles.heroDesc}>
                Building & maintaining resilient cloud infrastructure with a focus on stability, security, and high performance.
              </p>
              <div className={styles.heroBtns}>
                <button className="btn btn-primary" onClick={() => handleNavClick("contact")}>
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <button className="btn btn-secondary" onClick={() => handleNavClick("experience")}>
                  View Experience
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Me Section */}
        <section id="about" ref={sectionsRef.about} className={`${styles.section} ${styles.aboutSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Discover</span>
              <h2 className={styles.title}>About Me</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <p>
                  Experienced Cloud Engineer with deep expertise in managing and optimizing enterprise-grade cloud infrastructure. Currently focused on managing cloud infrastructure at a provider company, ensuring all services run with high stability, security, and peak performance.
                </p>
                <p>
                  Proven track record in improving cluster performance, executing zero-downtime cluster upgrades, and implementing best practices for system security and reliability. Extensive hands-on experience with container orchestration technologies, multi-cloud platforms, and Linux system administration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Experience Section */}
        <section id="experience" ref={sectionsRef.experience} className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>History</span>
              <h2 className={styles.title}>Work Experience</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.timeline}>
              {/* Job 1 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ borderColor: "var(--color-secondary)", boxShadow: "0 0 10px var(--color-secondary)" }}></div>
                <div className={`${styles.timelineContent} glass-panel glass-panel-hover`}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <span className={styles.timelineRole}>Cloud & DevOps Engineer</span>
                      <span className={styles.timelineCompany}>@ PT. Inovasi Informatika Indonesia (i3)</span>
                    </div>
                    <span className={styles.timelineDuration}>3 Years 10 Months</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <p>Managed enterprise-scale cloud infrastructure, performed cluster performance improvements, cluster upgrades, and ensured stability and security of all cloud services.</p>
                    <div className={styles.projectTags} style={{ marginTop: "12px" }}>
                      <span className={styles.projectTag}>OpenStack</span>
                      <span className={styles.projectTag}>OpenShift</span>
                      <span className={styles.projectTag}>Linux</span>
                      <span className={styles.projectTag}>Container</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`${styles.timelineContent} glass-panel glass-panel-hover`}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <span className={styles.timelineRole}>Cyber Security Trainee</span>
                      <span className={styles.timelineCompany}>@ Digitalent Talent Scholarship</span>
                    </div>
                    <span className={styles.timelineDuration}>1 Month</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <p>Intensive cybersecurity training covering penetration testing techniques, network security, and infrastructure security best practices.</p>
                    <div className={styles.projectTags} style={{ marginTop: "12px" }}>
                      <span className={styles.projectTag}>Cyber Security</span>
                      <span className={styles.projectTag}>Network Security</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`${styles.timelineContent} glass-panel glass-panel-hover`}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <span className={styles.timelineRole}>Electrical Automation Engineer</span>
                      <span className={styles.timelineCompany}>@ PT. Logamindo Pratama</span>
                    </div>
                    <span className={styles.timelineDuration}>3 Months</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <p>Handled electrical automation systems and maintained industrial automation devices.</p>
                    <div className={styles.projectTags} style={{ marginTop: "12px" }}>
                      <span className={styles.projectTag}>Automation</span>
                      <span className={styles.projectTag}>Electrical</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 4 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`${styles.timelineContent} glass-panel glass-panel-hover`}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <span className={styles.timelineRole}>ICT Staff (Intern)</span>
                      <span className={styles.timelineCompany}>@ AirAsia</span>
                    </div>
                    <span className={styles.timelineDuration}>3 Months</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <p>Supported ICT operations including network management and enterprise IT systems.</p>
                    <div className={styles.projectTags} style={{ marginTop: "12px" }}>
                      <span className={styles.projectTag}>ICT</span>
                      <span className={styles.projectTag}>Networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills Section */}
        <section id="skills" ref={sectionsRef.skills} className={`${styles.section} ${styles.skillsSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>Technical Skills</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            {/* Tab controls */}
            <div className={styles.skillsTabs}>
              <button
                className={`${styles.skillsTab} ${activeSkillTab === "cloud" ? styles.skillsTabActive : ""}`}
                onClick={() => setActiveSkillTab("cloud")}
              >
                Cloud & Orchestration
              </button>
              <button
                className={`${styles.skillsTab} ${activeSkillTab === "linux" ? styles.skillsTabActive : ""}`}
                onClick={() => setActiveSkillTab("linux")}
              >
                Linux & Observability
              </button>
              <button
                className={`${styles.skillsTab} ${activeSkillTab === "security" ? styles.skillsTabActive : ""}`}
                onClick={() => setActiveSkillTab("security")}
              >
                Security & Automation
              </button>
            </div>

            {/* Skill Lists */}
            <div className={styles.skillsGrid}>
              {skillData[activeSkillTab].map((skill, index) => (
                <div key={index} className={`${styles.skillCard} glass-panel`} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <SkillIcon name={skill.name} />
                  </div>
                  <span className={styles.skillName} style={{ fontSize: "16px", fontWeight: "600" }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Education Section */}
        <section id="education" ref={sectionsRef.education} className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Academics</span>
              <h2 className={styles.title}>Education</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.educationCardWrapper}>
              <div className={`${styles.educationCard} glass-panel`}>
                <div className={styles.educationIcon}>
                  🎓
                </div>
                <div className={styles.educationContent}>
                  <h3 className={styles.educationTitle}>Bachelor of Informatics Engineering (S1)</h3>
                  <h4 className={styles.educationSubtitle}>University of Lampung</h4>
                  <p className={styles.educationDesc}>
                    Informatics Engineering program with a focus on system development and computer networking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Certifications Section */}
        <section id="certifications" ref={sectionsRef.certifications} className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Credentials</span>
              <h2 className={styles.title}>Certifications</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.projectsGrid}>
              {/* Cert 1 */}
              <div className={`${styles.projectCard} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <img
                    src="/rhcsa-ex200.png"
                    alt="Red Hat Certified System Administrator"
                    className={styles.projectBadgeImg}
                  />
                  <div className={styles.projectOverlay}>
                    <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-thin">
                      Verify on Credly
                    </a>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: "700" }}>RED HAT</span>
                  <h3 className={styles.projectTitle}>Red Hat Certified System Administrator</h3>
                  <span className={styles.projectTag} style={{ alignSelf: "flex-start", marginTop: "4px" }}>EX200</span>
                  <p className={styles.projectDesc} style={{ marginTop: "12px" }}>
                    Official certification validating core system administration skills across Red Hat Enterprise Linux environments.
                  </p>
                </div>
              </div>

              {/* Cert 2 */}
              <div className={`${styles.projectCard} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <img
                    src="/rhcsa-openshift.png"
                    alt="Red Hat Certified System Administrator in OpenShift"
                    className={styles.projectBadgeImg}
                  />
                  <div className={styles.projectOverlay}>
                    <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-thin">
                      Verify on Credly
                    </a>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: "700" }}>RED HAT</span>
                  <h3 className={styles.projectTitle}>RHCSA in OpenShift</h3>
                  <span className={styles.projectTag} style={{ alignSelf: "flex-start", marginTop: "4px" }}>EX280</span>
                  <p className={styles.projectDesc} style={{ marginTop: "12px" }}>
                    Specialist certification confirming skills in configuring, managing, and troubleshooting Red Hat OpenShift container clusters.
                  </p>
                </div>
              </div>

              {/* Cert 3 */}
              <div className={`${styles.projectCard} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <img
                    src="/comptia-linux.png"
                    alt="CompTIA Linux+"
                    className={styles.projectBadgeImg}
                  />
                  <div className={styles.projectOverlay}>
                    <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-thin">
                      Verify on Credly
                    </a>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: "700" }}>COMPTIA</span>
                  <h3 className={styles.projectTitle}>CompTIA Linux+ ce</h3>
                  <span className={styles.projectTag} style={{ alignSelf: "flex-start", marginTop: "4px" }}>XK0-005</span>
                  <p className={styles.projectDesc} style={{ marginTop: "12px" }}>
                    Standard Linux credential verifying administrative competencies across multiple distributions and automated setups.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View All Certifications on Credly
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" ref={sectionsRef.contact} className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Get in Touch</span>
              <h2 className={styles.title}>Contact Me</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h3>Let&apos;s build something resilient!</h3>
                <p>
                  Reach out to discuss cluster deployments, cloud optimization, system migration contracts, or general inquiries. I&apos;m responsive across my social channels.
                </p>

                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className={styles.contactMethodText}>
                    <h4>Email</h4>
                    <p><a href="mailto:imransetiadi22@gmail.com">imransetiadi22@gmail.com</a></p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className={styles.contactMethodText}>
                    <h4>Phone</h4>
                    <p><a href="tel:+6282110286777">+62 821 1028 6777</a></p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={styles.contactMethodText}>
                    <h4>Location</h4>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className={styles.socials}>
                  <a href="https://github.com/imransetiadi" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/imransetiadi/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/imran_setiadi/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Form card */}
              <form className={`${styles.contactForm} glass-panel`} onSubmit={handleContactSubmit}>
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContent}`}>
          <div className={styles.logo}>
            &lt;IS/&gt; <span className={styles.logoDot}></span>
          </div>
          <p className={styles.footerText}>
            &copy; 2026 Imran Setiadi
          </p>
        </div>
      </footer>
    </div>
  );
}
