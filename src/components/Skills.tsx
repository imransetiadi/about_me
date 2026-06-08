"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

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
  if (lowercase.includes("linux")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-3 0-5 2-5 5.5 0 1.5.5 3.5 1.5 4.5C7.5 14 6.5 15.5 6.5 18c0 2.5 2.5 3.5 5.5 3.5s5.5-1 5.5-3.5c0-2.5-1-4-2-5 1-1 1.5-3 1.5-4.5C17 5 15 3 12 3z" />
        <path d="M12 11c-2.5 0-4 1.5-4 4.5 0 2.5 1.5 3.5 4 3.5s4-1 4-3.5c0-3-1.5-4.5-4-4.5z" />
        <path d="M11 9.5h2l-1 1z" fill="#f2c94c" />
        <path d="M9.5 21.5c-1 0-2 .5-2 1h3v-1z" fill="#f2c94c" />
        <path d="M14.5 21.5c1 0 2 .5 2 1h-3v-1z" fill="#f2c94c" />
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

export default function Skills() {
  const [activeSkillTab, setActiveSkillTab] = useState("cloud");

  // IntersectionObserver specifically for newly mounted skill cards inside the tab
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
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

    const cards = document.querySelectorAll(`.${styles.skillCard}.${styles.reveal}:not(.${styles.revealActive})`);
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, [activeSkillTab]);

  return (
    <div className="container">
      <div className={`${styles.sectionHeader} ${styles.reveal}`}>
        <span className={styles.eyebrow}>Skills</span>
        <h2>Technical stack I work with</h2>
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
          <div
            key={skill.name + activeSkillTab}
            className={`${styles.skillCard} ${styles.reveal} glass-panel`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className={styles.skillIcon}>
              <SkillIcon name={skill.name} />
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
