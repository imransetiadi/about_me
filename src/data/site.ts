/**
 * Single source of truth for site-wide SEO values.
 * Used by metadata, structured data, sitemap, robots and the manifest.
 */
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (configuredUrl && configuredUrl.length > 0 ? configuredUrl : "https://imransetiadi.web.id").replace(/\/+$/, "");

export const SITE_NAME = "Imran Setiadi";
export const SITE_TITLE = "Imran Setiadi | Cloud Engineer";
/** Kept under ~160 characters so search engines show it without truncation. */
export const SITE_DESCRIPTION =
  "Cloud & DevOps Engineer in Jakarta: OpenStack, OpenShift, Kubernetes, Linux automation. Creator of Seamless Migrate, an open-source VM migration control plane.";

/** Longer biography used for structured data (schema.org Person). */
export const AUTHOR_BIO =
  "Imran Setiadi is a Jakarta-based Cloud & DevOps Engineer who designs, secures and operates enterprise cloud and container infrastructure on Red Hat OpenStack, OpenShift, Kubernetes and Linux. He is the creator of Seamless Migrate, an open-source control plane for warm VM migration into RHOSO 18.0, and the builder of IDITA (e-commerce PWA) and Solatify (Muslim worship companion app).";

export const AUTHOR = {
  name: "Imran Setiadi",
  givenName: "Imran",
  familyName: "Setiadi",
  jobTitle: "Cloud Engineer",
  email: "imransetiadi22@gmail.com",
  locality: "Jakarta",
  country: "Indonesia",
  employer: "PT. Inovasi Informatika Indonesia (i3)",
  university: "University of Lampung",
  socials: {
    github: "https://github.com/imransetiadi",
    linkedin: "https://www.linkedin.com/in/imransetiadi/",
    threads: "https://www.threads.net/@imran_setiadi",
    instagram: "https://www.instagram.com/imran_setiadi/",
    credly: "https://www.credly.com/users/imran-setiadi",
  },
} as const;

export const SITE_KEYWORDS = [
  "Imran Setiadi",
  "Cloud Engineer",
  "DevOps Engineer",
  "Cloud Engineer Jakarta",
  "OpenStack",
  "Red Hat OpenStack Platform",
  "OpenShift",
  "RHOSO",
  "Kubernetes",
  "AWS",
  "AWS Certified Cloud Practitioner",
  "Linux",
  "Ansible",
  "DevOps",
  "Seamless Migrate",
  "VM migration",
  "VMware to OpenStack migration",
  "RHOSP 17.1 to RHOSO 18.0",
  "warm migration",
  "open source",
  "IDITA",
  "Solatify",
  "E-commerce",
  "PWA",
  "Clean Architecture",
  "TypeScript",
  "Flutter",
];
