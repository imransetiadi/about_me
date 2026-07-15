import Image from "next/image";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import Skills from "../components/Skills";
import styles from "./page.module.css";
import { FadeIn } from "../components/FadeIn";
import ContactForm from "../components/ContactForm";
import ScrollToTop from "../components/ScrollToTop";
import Projects from "../components/Projects";

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

const projects = [
  {
    title: "IDITA",
    tagline: "Outfit harian, checkout tanpa ribet",
    description: "A fast, clean e-commerce platform and Progressive Web App (PWA) built using Next.js with Clean Architecture. It features a real-time inventory catalog, a neobrutalist UI design, seamless manual payment flow with WhatsApp confirmation, custom order tracking links, and a comprehensive admin management console for product variants and transaction logs.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Zod", "PWA"],
    image: "/idita-logo.svg",
<<<<<<< HEAD
    link: "https://www.gaskeunn.web.id/",
=======
    link: "https://www.iditastore.my.id/",
>>>>>>> 5a2ebf7 (change url porto)
  },
  {
    title: "Solatify",
    tagline: "Muslim daily worship companion",
    description: "An offline-first Muslim daily worship companion mobile application built using Flutter with Clean Architecture (feature-first approach). It features accurate prayer times calculation, automated adhan alarms, offline Al-Qur'an with audio, Qibla compass, mosque locator, daily worship tracker, and custom performance metrics.",
    tags: ["Flutter", "Dart", "Riverpod", "Hive", "GoRouter", "Local Notifications"],
    image: "/solatify-logo.png",
    link: "https://solatify.my.id/",
    github: "https://github.com/imransetiadi/solatify",
  },
];

const certifications = [
  {
    title: "Red Hat Certified System Administrator",
    code: "EX200",
    issuer: "Red Hat",
    image: "/rhcsa-ex200.png",
    alt: "Red Hat Certified System Administrator badge",
    url: "https://www.credly.com/badges/4f93336f-e09d-43ff-980e-790ddfce92e6",
  },
  {
    title: "Red Hat Certified System Administrator in OpenShift",
    code: "EX280",
    issuer: "Red Hat",
    image: "/rhcsa-openshift.png",
    alt: "Red Hat OpenShift certification badge",
    url: "https://www.credly.com/badges/4263d0e9-f93d-4f6b-8172-cc72210c2f37",
  },
  {
    title: "CompTIA Linux+ ce",
    code: "XK0-005",
    issuer: "CompTIA",
    image: "/comptia-linux.png",
    alt: "CompTIA Linux+ badge",
    url: "https://www.credly.com/badges/be235685-cb60-46dc-8425-32522593e078",
  },
];

const contacts = [
  { title: "Email", value: "imransetiadi22@gmail.com", href: "mailto:imransetiadi22@gmail.com", icon: "mail" },
  { title: "Location", value: "Jakarta, Indonesia", icon: "location" },
  { title: "LinkedIn", value: "imransetiadi", href: "https://www.linkedin.com/in/imransetiadi/", icon: "linkedin" },
  { title: "GitHub", value: "imransetiadi", href: "https://github.com/imransetiadi", icon: "github" },
  { title: "Threads", value: "@imran_setiadi", href: "https://www.threads.net/@imran_setiadi", icon: "threads" },
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
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/icons/github.jpg" alt="GitHub logo" style={{ width: "20px", height: "20px", objectFit: "contain", borderRadius: "4px" }} />;
  }
  if (type === "threads") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/icons/threads.png" alt="Threads logo" style={{ width: "20px", height: "20px", objectFit: "contain" }} />;
  }
  if (type === "instagram") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/icons/instagram.png" alt="Instagram logo" className="theme-instagram-icon" style={{ width: "20px", height: "20px", objectFit: "contain" }} />;
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
                <a href="#contact" className="btn btn-blue">Get in Touch</a>
                <a href="#experience" className="btn btn-secondary">View Experience</a>
              </div>
              <div className={styles.heroSocials}>
                <a href="https://www.linkedin.com/in/imransetiadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/imransetiadi" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/imran_setiadi/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.threads.net/@imran_setiadi" target="_blank" rel="noopener noreferrer">Threads</a>
                <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer">Credly</a>
              </div>
            </div>

            <div className={styles.heroPanelWrapper}>
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

        <FadeIn delay={0.1}><section id="projects" className={styles.section}>
          <Projects initialProjects={projects} />
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
                <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className={`${styles.certCard} ${styles.reveal}`}>
                  <Image src={cert.image} alt={cert.alt} width={112} height={112} className={styles.certImage} />
                  <div>
                    <span>{cert.issuer}</span>
                    <h3>{cert.title}</h3>
                    <small>{cert.code}</small>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.centerAction} style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://www.credly.com/users/imran-setiadi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View All on Credly
              </a>
              <a href="https://rhtapps.redhat.com/verify?certId=220-188-205" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Verify Red Hat ID: 220-188-205
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
