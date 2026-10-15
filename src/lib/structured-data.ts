import { projects, type Project } from "../data/projects";
import { AUTHOR, AUTHOR_BIO, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "../data/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

const certifications = [
  {
    name: "Red Hat Certified System Administrator (EX200)",
    issuer: "Red Hat",
    url: "https://www.credly.com/badges/4f93336f-e09d-43ff-980e-790ddfce92e6",
  },
  {
    name: "Red Hat Certified System Administrator in OpenShift (EX280)",
    issuer: "Red Hat",
    url: "https://www.credly.com/badges/4263d0e9-f93d-4f6b-8172-cc72210c2f37",
  },
  {
    name: "CompTIA Linux+ ce (XK0-005)",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/be235685-cb60-46dc-8425-32522593e078",
  },
];

const schemaTypeFor: Record<Project["kind"], string> = {
  "open-source": "SoftwareApplication",
  "web-app": "WebApplication",
  "mobile-app": "MobileApplication",
};

function projectId(project: Project) {
  return `${SITE_URL}/#project-${project.slug}`;
}

function projectNode(project: Project) {
  const node: Record<string, unknown> = {
    "@type": schemaTypeFor[project.kind],
    "@id": projectId(project),
    name: project.title,
    alternateName: project.tagline,
    description: project.description,
    url: project.link,
    image: `${SITE_URL}${project.image}`,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    datePublished: String(project.year),
    keywords: project.tags.join(", "),
    applicationCategory: project.applicationCategory,
    operatingSystem: project.operatingSystem,
    inLanguage: "en",
  };

  if (project.preview) {
    node.screenshot = {
      "@type": "ImageObject",
      url: `${SITE_URL}${project.preview.src}`,
      width: project.preview.width,
      height: project.preview.height,
      caption: project.preview.alt,
    };
  }

  if (project.github) {
    node.sameAs = [project.github];
    node.codeRepository = project.github;
  }

  if (project.programmingLanguages?.length) {
    node.programmingLanguage = project.programmingLanguages;
  }

  if (project.license) {
    node.license = project.license.url;
    node.isAccessibleForFree = true;
    node.offers = { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" };
  }

  return node;
}

export function buildStructuredData() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR.name,
    givenName: AUTHOR.givenName,
    familyName: AUTHOR.familyName,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR_BIO,
    url: `${SITE_URL}/`,
    email: `mailto:${AUTHOR.email}`,
    image: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#profile-image`,
      url: `${SITE_URL}/profile.jpg`,
      width: 520,
      height: 620,
      caption: AUTHOR.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: AUTHOR.locality,
      addressCountry: "ID",
    },
    worksFor: { "@type": "Organization", name: AUTHOR.employer },
    alumniOf: { "@type": "CollegeOrUniversity", name: AUTHOR.university },
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
      url: cert.url,
    })),
    sameAs: Object.values(AUTHOR.socials),
    knowsAbout: [
      "OpenStack",
      "Red Hat OpenStack Platform",
      "OpenShift",
      "Kubernetes",
      "Linux",
      "DevOps",
      "Ansible",
      "VM migration",
      "Observability",
      "Automation",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };

  const webpage = {
    "@type": "ProfilePage",
    "@id": WEBPAGE_ID,
    url: `${SITE_URL}/`,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@id": `${SITE_URL}/#profile-image` },
    hasPart: projects.map((project) => ({ "@id": projectId(project) })),
    inLanguage: "en",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, webpage, ...projects.map(projectNode)],
  };
}

/** Serializes JSON-LD safely for a <script> tag (prevents `</script>` injection). */
export function serializeStructuredData(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
