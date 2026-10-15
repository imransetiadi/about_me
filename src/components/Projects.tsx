import Image from "next/image";
import styles from "../app/page.module.css";
import type { Project } from "../data/projects";

interface ProjectsProps {
  initialProjects: Project[];
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <line x1="8" y1="13" x2="16" y2="13"></line>
      <line x1="8" y1="17" x2="16" y2="17"></line>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );
}

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectTags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className={styles.projectTags} aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag}>
          <small>{tag}</small>
        </li>
      ))}
    </ul>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className={styles.projectActions}>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website`}>
          <GlobeIcon />
          Visit Website
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
          <GitHubIcon />
          GitHub
        </a>
      )}
      {project.extraLinks?.map((extra) => (
        <a key={extra.href} href={extra.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${extra.label}`}>
          <DocIcon />
          {extra.label}
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const headingId = `project-${project.slug}`;

  return (
    <article className={`${styles.projectCard} ${styles.projectFeatured} ${styles.reveal}`} aria-labelledby={headingId}>
      <div className={styles.featuredBadges}>
        <span className={styles.featuredBadge}>
          <StarIcon />
          Featured project
        </span>
        {project.badge && <span className={`${styles.featuredBadge} ${styles.featuredBadgeAlt}`}>{project.badge}</span>}
        <span className={styles.featuredYear}>{project.year}</span>
      </div>

      <div className={styles.featuredGrid}>
        <div className={styles.featuredCopy}>
          <div className={styles.projectHeader}>
            <Image
              src={project.image}
              alt={`${project.title} logo`}
              width={72}
              height={72}
              className={`${styles.projectImage} ${styles.projectImageLarge}`}
            />
            <div className={styles.projectTitleArea}>
              <h3 id={headingId}>{project.title}</h3>
              <p className={styles.projectTagline}>{project.tagline}</p>
              {project.role && <p className={styles.projectRole}>{project.role}</p>}
            </div>
          </div>

          <p className={styles.projectDescription}>{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className={styles.featuredHighlights}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <ProjectTags tags={project.tags} />
          <ProjectActions project={project} />
        </div>

        <div className={styles.featuredAside}>
          {project.preview && (
            <figure className={styles.browserFrame}>
              <div className={styles.browserBar} aria-hidden="true">
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserUrl}>{project.link ? hostnameOf(project.link) : project.title}</span>
              </div>
              <div className={styles.browserViewport}>
                <Image
                  src={project.preview.src}
                  alt={project.preview.alt}
                  width={project.preview.width}
                  height={project.preview.height}
                  className={styles.browserShot}
                />
              </div>
              <figcaption>{project.preview.caption}</figcaption>
            </figure>
          )}

          {project.phases && project.phases.length > 0 && (
            <ol className={styles.phaseFlow} aria-label={`${project.title} workflow`}>
              {project.phases.map((phase, index) => (
                <li key={phase.name} className={styles.phaseStep}>
                  <span className={styles.phaseIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.phaseName}>{phase.name}</span>
                  <span className={styles.phaseDetail}>{phase.detail}</span>
                </li>
              ))}
            </ol>
          )}

          {project.stats && project.stats.length > 0 && (
            <ul className={styles.statGrid} aria-label={`${project.title} key facts`}>
              {project.stats.map((stat) => (
                <li key={stat.label} className={styles.statTile}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const headingId = `project-${project.slug}`;

  return (
    <article className={`${styles.projectCard} ${styles.reveal}`} aria-labelledby={headingId}>
      <div className={styles.projectHeader}>
        <Image
          src={project.image}
          alt={`${project.title} logo`}
          width={64}
          height={64}
          className={styles.projectImage}
        />
        <div className={styles.projectTitleArea}>
          <h3 id={headingId}>{project.title}</h3>
          <p className={styles.projectTagline}>{project.tagline}</p>
        </div>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <ProjectTags tags={project.tags} />
      <ProjectActions project={project} />
    </article>
  );
}

export default function Projects({ initialProjects }: ProjectsProps) {
  const featured = initialProjects.filter((project) => project.featured);
  const others = initialProjects.filter((project) => !project.featured);

  return (
    <div className="container">
      <div className={`${styles.sectionHeader} ${styles.reveal}`}>
        <span className={styles.eyebrow}>Portfolio</span>
        <h2 id="projects-heading">Featured Projects</h2>
        <p>Open-source tooling, products and apps I have designed, built and shipped end to end.</p>
      </div>

      {featured.map((project) => (
        <FeaturedProject key={project.slug} project={project} />
      ))}

      {others.length > 0 && (
        <div className={styles.projectsGrid}>
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
