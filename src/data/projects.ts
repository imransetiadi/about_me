export type ProjectKind = "open-source" | "web-app" | "mobile-app";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectPhase {
  name: string;
  detail: string;
}

export interface ProjectPreview {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  kind: ProjectKind;
  year: number;
  link?: string;
  github?: string;
  /** Renders the large spotlight layout at the top of the portfolio grid. */
  featured?: boolean;
  badge?: string;
  role?: string;
  highlights?: string[];
  stats?: ProjectStat[];
  phases?: ProjectPhase[];
  preview?: ProjectPreview;
  extraLinks?: ProjectLink[];
  /** Used only for structured data (schema.org). */
  license?: { name: string; url: string };
  programmingLanguages?: string[];
  operatingSystem?: string;
  applicationCategory?: string;
}

export const projects: Project[] = [
  {
    slug: "seamless-migrate",
    title: "Seamless Migrate",
    tagline: "Keep your VMs running. Cut over in minutes.",
    description:
      "An open-source control plane that moves virtual machines from Red Hat OpenStack Platform 17.1, community OpenStack and VMware vSphere into Red Hat OpenStack Services on OpenShift (RHOSO) 18.0. It plans migration waves with a pilot first, estimates the downtime of every VM, copies disks while the VMs keep serving traffic, gates each cutover behind approvals and change windows, verifies every VM on the destination and rolls back on its own when a check fails.",
    tags: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "Ansible", "os-migrate", "virt-v2v", "OpenStack", "VMware vSphere", "OpenShift", "Kubernetes", "Docker"],
    image: "/seamlessmigrate-logo.svg",
    kind: "open-source",
    year: 2026,
    link: "https://www.seamlessmigrate.org/",
    github: "https://github.com/imransetiadi/seamless-vms-migration",
    featured: true,
    badge: "Open Source · Apache 2.0",
    role: "Creator & maintainer",
    highlights: [
      "Warm migration: disks copy in snapshot passes while the VM runs, so only the final delta crosses the wire at cutover.",
      "Safe by construction: approval gates, change windows, maker-checker cutovers and typed confirmation before the one irreversible step.",
      "Reversible until finalize: a failed verification rolls back automatically and the source VM starts again.",
      "Operable from day one: live SSE dashboard (WCAG 2.2 AA), REST API, CLI, Prometheus metrics and a full audit trail.",
    ],
    stats: [
      { value: "3", label: "source platforms: RHOSP 17.1, OpenStack, VMware vSphere" },
      { value: "11m 20s", label: "modelled warm-migration downtime for a 200 GiB VM (cold copy: 20m 53s)" },
      { value: "5", label: "migration strategies, picked automatically per VM" },
      { value: "1 image", label: "plus PostgreSQL: runs on OpenShift, Kubernetes, Docker or Podman" },
    ],
    phases: [
      { name: "Validate", detail: "Both clouds, before any copy" },
      { name: "Replicate", detail: "Copy while the VM runs" },
      { name: "Cut over", detail: "Minutes, on your approval" },
      { name: "Verify", detail: "Checks pass, or roll back" },
    ],
    preview: {
      src: "/seamlessmigrate-dashboard.webp",
      alt: "Seamless Migrate dashboard overview showing live VM migrations, downtime clocks measured against a 15-minute SLO and pending cutover approvals.",
      width: 1280,
      height: 800,
      caption: "The live dashboard: every downtime clock against its SLO, approvals waiting for a person.",
    },
    extraLinks: [{ label: "Design doc", href: "https://github.com/imransetiadi/seamless-vms-migration/blob/main/docs/SDD.md" }],
    license: { name: "Apache License 2.0", url: "https://www.apache.org/licenses/LICENSE-2.0" },
    programmingLanguages: ["Python", "TypeScript", "Shell"],
    operatingSystem: "Linux, Kubernetes, OpenShift",
    applicationCategory: "UtilitiesApplication",
  },
  {
    slug: "idita",
    title: "IDITA",
    tagline: "Outfit harian, checkout tanpa ribet",
    description:
      "A fast, clean e-commerce platform and Progressive Web App (PWA) built using Next.js with Clean Architecture. It features a real-time inventory catalog, a neobrutalist UI design, seamless manual payment flow with WhatsApp confirmation, custom order tracking links, and a comprehensive admin management console for product variants and transaction logs.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Zod", "PWA"],
    image: "/idita-logo.svg",
    kind: "web-app",
    year: 2026,
    link: "https://www.iditastore.my.id/",
    operatingSystem: "Any (Progressive Web App)",
    applicationCategory: "ShoppingApplication",
  },
  {
    slug: "solatify",
    title: "Solatify",
    tagline: "Muslim daily worship companion",
    description:
      "An offline-first Muslim daily worship companion mobile application built using Flutter with Clean Architecture (feature-first approach). It features accurate prayer times calculation, automated adhan alarms, offline Al-Qur'an with audio, Qibla compass, mosque locator, daily worship tracker, and custom performance metrics.",
    tags: ["Flutter", "Dart", "Riverpod", "Hive", "GoRouter", "Local Notifications"],
    image: "/solatify-logo.png",
    kind: "mobile-app",
    year: 2025,
    link: "https://solatify.my.id/",
    github: "https://github.com/imransetiadi/solatify",
    programmingLanguages: ["Dart"],
    operatingSystem: "Android, iOS",
    applicationCategory: "LifestyleApplication",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
