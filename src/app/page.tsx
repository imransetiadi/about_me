import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import Skills from "../components/Skills";
import styles from "./page.module.css";

const services = [
  {
    title: "Cloud Operations",
    text: "OpenStack, OpenShift, Kubernetes, and Linux platforms maintained with clean runbooks, measurable reliability, and controlled change windows.",
  },
  {
    title: "Platform Hardening",
    text: "Security baselines, access review, patch planning, and troubleshooting practices that reduce operational risk before it becomes downtime.",
  },
  {
    title: "Migration Support",
    text: "Hands-on help for cluster upgrades, service moves, and infrastructure improvements where continuity matters as much as speed.",
  },
];

const experiences = [
  {
    role: "Cloud & DevOps Engineer",
    company: "PT. Inovasi Informatika Indonesia (i3)",
    period: "3 years 10 months",
    text: "Managed enterprise cloud services, improved cluster performance, completed platform upgrades, and handled stability, security, and observability work.",
    tags: ["OpenStack", "OpenShift", "Kubernetes", "Linux"],
  },
  {
    role: "Cyber Security Trainee",
    company: "Digitalent Talent Scholarship",
    period: "1 month",
    text: "Completed focused cybersecurity training across network security, penetration testing fundamentals, and infrastructure hardening.",
    tags: ["Security", "Networking", "Hardening"],
  },
  {
    role: "Electrical Automation Engineer",
    company: "PT. Logamindo Pratama",
    period: "3 months",
    text: "Supported industrial automation systems and developed a practical foundation in operational discipline and field troubleshooting.",
    tags: ["Automation", "Electrical", "Operations"],
  },
];

const certifications = [
  {
    title: "Red Hat Certified System Administrator",
    code: "EX200",
    issuer: "Red Hat",
    image: "/rhcsa-ex200.png",
    alt: "Red Hat Certified System Administrator badge",
  },
  {
    title: "RHCSA in OpenShift",
    code: "EX280",
    issuer: "Red Hat",
    image: "/rhcsa-openshift.png",
    alt: "Red Hat OpenShift certification badge",
  },
  {
    title: "CompTIA Linux+ ce",
    code: "XK0-005",
    issuer: "CompTIA",
    image: "/comptia-linux.png",
    alt: "CompTIA Linux+ badge",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section id="home" className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Cloud Engineer based in Jakarta</span>
              <h1>Imran Setiadi</h1>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">Start a conversation</a>
                <a href="#experience" className="btn btn-secondary">View experience</a>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="Profile overview">
              <Image
                src="/profile.jpg"
                alt="Imran Setiadi"
                width={520}
                height={620}
                priority
                className={styles.profileImage}
              />
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={`container ${styles.aboutGrid}`}>
            <div className={`${styles.sectionIntro} ${styles.reveal}`}>
              <span className={styles.eyebrow}>About</span>
              <h2>About Me</h2>
            </div>
            <div className={`${styles.aboutText} ${styles.reveal}`}>
              <p>
                Experienced Cloud Engineer with deep expertise in managing and optimizing enterprise-grade cloud infrastructure. Currently focused on managing cloud infrastructure at a provider company, ensuring all services run with high stability, security, and peak performance.
              </p>
              <p>
                Proven track record in improving cluster performance, executing zero-downtime cluster upgrades, and implementing best practices for system security and reliability. Extensive hands-on experience with container orchestration technologies, multi-cloud platforms, and Linux system administration.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.servicesSection}`}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Focus Areas</span>
              <h2>What I can help with</h2>
            </div>
            <div className={styles.cardGrid}>
              {services.map((service) => (
                <article key={service.title} className={`${styles.featureCard} ${styles.reveal}`}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Experience</span>
              <h2>Hands-on infrastructure background</h2>
            </div>

            <div className={styles.timeline}>
              {experiences.map((item) => (
                <article key={`${item.role}-${item.company}`} className={`${styles.timelineItem} ${styles.reveal}`}>
                  <div className={styles.timelineMeta}>{item.period}</div>
                  <div className={styles.timelineCard}>
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                    <p>{item.text}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => <small key={tag}>{tag}</small>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
          <Skills />
        </section>

        <section id="education" className={styles.section}>
          <div className={`container ${styles.educationGrid}`}>
            <div className={`${styles.sectionIntro} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Education</span>
              <h2>Bachelor of Informatics Engineering</h2>
            </div>
            <div className={`${styles.educationCard} ${styles.reveal}`}>
              <span>University of Lampung</span>
              <p>
                Informatics Engineering program with a foundation in software systems, computer networking, and infrastructure concepts.
              </p>
            </div>
          </div>
        </section>

        <section id="certifications" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Credentials</span>
              <h2>Verified technical certifications</h2>
            </div>

            <div className={styles.certGrid}>
              {certifications.map((cert) => (
                <article key={cert.title} className={`${styles.certCard} ${styles.reveal}`}>
                  <Image src={cert.image} alt={cert.alt} width={112} height={112} className={styles.certImage} />
                  <div>
                    <span>{cert.issuer}</span>
                    <h3>{cert.title}</h3>
                    <small>{cert.code}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.centerAction}>
              <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View Credly profile
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={`container ${styles.contactGrid}`}>
            <div className={`${styles.contactInfo} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Contact</span>
              <h2>Need reliable infrastructure help?</h2>
              <p>
                Send a short message about the platform, current problem, and expected timeline. I am available for cloud operations, migration support, and troubleshooting discussions.
              </p>

              <div className={styles.contactList}>
                <a href="mailto:imransetiadi22@gmail.com">imransetiadi22@gmail.com</a>
                <a href="tel:+6282110286777">+62 821 1028 6777</a>
                <span>Jakarta, Indonesia</span>
              </div>

              <div className={styles.socials}>
                <a href="https://github.com/imransetiadi" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/imransetiadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/imran_setiadi/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <strong>Imran Setiadi</strong>
          <span>Cloud Engineer | 2026</span>
        </div>
      </footer>

      <ScrollReveal />
    </div>
  );
}
