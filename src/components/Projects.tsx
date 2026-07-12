"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

interface ProjectsProps {
  initialProjects: Project[];
}

export default function Projects({ initialProjects }: ProjectsProps) {
  const [activeTag, setActiveTag] = useState<string>("All");

  // Get unique tags across all projects
  const allTags = ["All", ...Array.from(new Set(initialProjects.flatMap((p) => p.tags)))];

  const filteredProjects =
    activeTag === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="container">
      <div className={`${styles.sectionHeader} ${styles.reveal}`}>
        <span className={styles.eyebrow}>Portfolio</span>
        <h2>Featured Projects</h2>
      </div>

      {/* Filter Tags Buttons */}
      <div className={styles.filterContainer}>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`${styles.filterBtn} ${activeTag === tag ? styles.filterBtnActive : ""}`}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <article key={project.title} className={`${styles.projectCard} ${styles.reveal}`}>
            <div className={styles.projectHeader}>
              <Image
                src={project.image}
                alt={`${project.title} logo`}
                width={64}
                height={64}
                className={styles.projectImage}
              />
              <div className={styles.projectTitleArea}>
                <h3>{project.title}</h3>
                <p className={styles.projectTagline}>{project.tagline}</p>
              </div>
            </div>
            <p className={project.title === "IDITA" ? styles.projectDescription : styles.projectDescription} style={{ textAlign: "justify" }}>
              {project.description}
            </p>

            <div className={styles.projectActions}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Visit Website
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
