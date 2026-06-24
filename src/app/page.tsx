import Image from "next/image";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import Skills from "../components/Skills";
import styles from "./page.module.css";
import { FadeIn } from "../components/FadeIn";
import ContactForm from "../components/ContactForm";
import ScrollToTop from "../components/ScrollToTop";

const experiences = [
  {
    role: "Cloud & DevOps Engineer",
    company: "PT. Inovasi Informatika Indonesia (i3)",
    period: "3 years, 10 months - Now",
    text: "Design, deploy, and manage enterprise-grade cloud and container infrastructure. Successfully led zero-downtime upgrades for Red Hat OpenShift and OpenStack clusters, automated platform provisioning using Ansible and Bash, and optimized monitoring stack to maintain high availability and robust security compliance.",
    tags: ["OpenStack", "OpenShift", "Linux", "Containers"],
  },
  {
    role: "Cybersecurity Trainee",
    company: "Digitalent Talent Scholarship",
    period: "1 month",
    text: "Completed rigorous cybersecurity training with a focus on network security assessments, penetration testing methodologies, vulnerability identification, and infrastructure defense strategies.",
    tags: ["Cybersecurity", "Network Security"],
  },
  {
    role: "Electrical Automation Engineer",
    company: "PT. Logamindo Pratama",
    period: "3 months",
    text: "Maintained and optimized industrial electrical automation systems, managed PLC programming, and diagnosed hardware issues to maximize operational uptime and machinery efficiency.",
    tags: ["Automation", "Electrical"],
  },
  {
    role: "ICT Staff (Intern)",
    company: "AirAsia",
    period: "3 months",
    text: "Supported enterprise-level IT and network operations, assisted with active directory management, resolved network connectivity issues, and maintained high reliability across corporate ICT systems.",
    tags: ["ICT", "Networking"],
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
    title: "Red Hat Certified System Administrator in OpenShift",
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

const contacts = [
  { title: "Email", value: "imransetiadi22@gmail.com", href: "mailto:imransetiadi22@gmail.com", icon: "mail" },
  { title: "WhatsApp", value: "+62 821 1028 6777", href: "https://wa.me/6282110286777", icon: "phone" },
  { title: "Location", value: "Jakarta, Indonesia", icon: "location" },
  { title: "LinkedIn", value: "imransetiadi", href: "https://www.linkedin.com/in/imransetiadi/", icon: "linkedin" },
  { title: "GitHub", value: "imransetiadi", href: "https://github.com/imransetiadi", icon: "github" },
  { title: "Instagram", value: "@imran_setiadi", href: "https://www.instagram.com/imran_setiadi/", icon: "instagram" },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "mail") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>;
  }
  if (type === "phone") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>;
  }
  if (type === "location") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
  }
  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
  }
  if (type === "github") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m16 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 22 4.8 5 5 0 0 0 21.9 1S20.7.6 18 2.5a13.4 13.4 0 0 0-7 0C8.3.6 7.1 1 7.1 1A5 5 0 0 0 7 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5"/></svg>;
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <FadeIn delay={0.1}><section id="home" className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1>Imran Setiadi</h1>
              <h2 className={styles.heroRole}>Cloud Engineer</h2>
              <p className={styles.heroSubtitle}>Specializing in architecting resilient cloud-native infrastructure, optimizing enterprise container platforms, and driving automation to deliver secure, scalable, and highly available systems.</p>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
                <a href="#experience" className="btn btn-secondary">View Experience</a>
              </div>
              <div className={styles.heroSocials}>
                <a href="https://www.linkedin.com/in/imransetiadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/imransetiadi" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/imran_setiadi/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer">Credly</a>
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
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="about" className={styles.section}>
          <div className={`container ${styles.aboutGrid}`}>
            <div className={`${styles.sectionIntro} ${styles.reveal}`}>
              <span className={styles.eyebrow}>About</span>
            </div>
            <div className={`${styles.aboutText} ${styles.reveal}`}>
              <p>
                I am a dedicated Cloud & DevOps Engineer specializing in architecting, securing, and optimizing enterprise-grade cloud and container infrastructure. My focus lies in building highly resilient systems, streamlining deployment workflows through automation, and maintaining rigorous security standards.
              </p>
              <p>
                Throughout my career, I have successfully executed zero-downtime cluster upgrades, improved container performance, and automated infrastructure provisioning at scale. With deep technical proficiency in Red Hat OpenStack, OpenShift, Kubernetes, and Linux systems engineering, I bridge the gap between development and operations to drive reliability and efficiency.
              </p>
            </div>
          </div>
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="experience" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Experience</span>
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
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
          <Skills />
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="education" className={styles.section}>
          <div className={`container ${styles.educationGrid}`}>
            <div className={`${styles.sectionIntro} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Education</span>
              <h2>Education</h2>
            </div>
            <div className={`${styles.educationCard} ${styles.reveal}`}>
              <Image src="/unila-logo.png" alt="Universitas Lampung logo" width={64} height={64} className={styles.educationLogo} />
              <h3>Bachelor of Informatics Engineering</h3>
              <span>University of Lampung</span>
              <p>
                Graduated with a curriculum focused on software engineering, distributed systems, database management, and advanced computer networking.
              </p>
            </div>
          </div>
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="certifications" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Credentials</span>
              <h2>Certifications</h2>
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
                View All Certifications on Credly
              </a>
            </div>
          </div>
        </section></FadeIn>

        <FadeIn delay={0.1}><section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.eyebrow}>Contact</span>
              <h2>Get in Touch</h2>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <p className={styles.reveal}>Please feel free to reach out to discuss professional collaborations, project consulting, or technical opportunities. I will respond to your inquiry as soon as possible.</p>
                <div className={styles.contactCards}>
                  {contacts.map((contact) => {
                    const content = (
                      <>
                        <span className={styles.contactIcon}><ContactIcon type={contact.icon} /></span>
                        <h3>{contact.title}</h3>
                        <p>{contact.value}</p>
                      </>
                    );

                    return contact.href ? (
                      <a key={contact.title} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className={`${styles.contactCard} ${styles.reveal}`}>
                        {content}
                      </a>
                    ) : (
                      <div key={contact.title} className={`${styles.contactCard} ${styles.reveal}`}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section></FadeIn>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <span>Imran Setiadi. © {new Date().getFullYear()}. All rights reserved.</span>
        </div>
      </footer>

      <ScrollReveal />
      <ScrollToTop />
    </div>
  );
}
