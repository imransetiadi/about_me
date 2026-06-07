import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* 1. Sticky Navigation (Client Island) */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <section id="home" className={styles.hero}>
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
                <a href="#contact" className="btn btn-primary">
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#experience" className="btn btn-secondary">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Me Section */}
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.subtitle}>Discover</span>
              <h2 className={styles.title}>About Me</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={`${styles.aboutGrid} ${styles.reveal}`}>
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

        {/* 4. Experience Section */}
        <section id="experience" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.subtitle}>History</span>
              <h2 className={styles.title}>Work Experience</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.timeline}>
              {/* Job 1 */}
              <div className={`${styles.timelineItem} ${styles.reveal}`}>
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
              <div className={`${styles.timelineItem} ${styles.reveal}`}>
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
              <div className={`${styles.timelineItem} ${styles.reveal}`}>
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
              <div className={`${styles.timelineItem} ${styles.reveal}`}>
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

        {/* 5. Skills Section (Client Island) */}
        <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
          <Skills />
        </section>

        {/* 6. Education Section */}
        <section id="education" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.subtitle}>Academics</span>
              <h2 className={styles.title}>Education</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.educationCardWrapper}>
              <div className={`${styles.educationCard} ${styles.reveal} glass-panel`}>
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

        {/* 7. Certifications Section */}
        <section id="certifications" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.subtitle}>Credentials</span>
              <h2 className={styles.title}>Certifications</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.projectsGrid}>
              {/* Cert 1 */}
              <div className={`${styles.projectCard} ${styles.reveal} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <Image
                    src="/rhcsa-ex200.png"
                    alt="Red Hat Certified System Administrator"
                    width={90}
                    height={90}
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
              <div className={`${styles.projectCard} ${styles.reveal} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <Image
                    src="/rhcsa-openshift.png"
                    alt="Red Hat Certified System Administrator in OpenShift"
                    width={90}
                    height={90}
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
              <div className={`${styles.projectCard} ${styles.reveal} glass-panel glass-panel-hover`}>
                <div className={styles.projectVisual}>
                  <Image
                    src="/comptia-linux.png"
                    alt="CompTIA Linux+"
                    width={90}
                    height={90}
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

        {/* 8. Contact Section */}
        <section id="contact" className={styles.section}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.subtitle}>Get in Touch</span>
              <h2 className={styles.title}>Contact Me</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.contactGrid}>
              <div className={`${styles.contactInfo} ${styles.reveal}`}>
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

              {/* Form client island */}
              <ContactForm />
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

      {/* Global Scroll Reveal Logic (Client Island) */}
      <ScrollReveal />
    </div>
  );
}
