import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Home from "../app/page";
import { projects } from "../data/projects";
import { buildStructuredData, serializeStructuredData } from "../lib/structured-data";
import { SITE_URL } from "../data/site";

describe("QA Test Suite - Portfolio Home Page", () => {
  it("renders page header and main title correctly", () => {
    render(<Home />);
    // Check main title
    const mainTitle = screen.getByRole("heading", { level: 1, name: /Imran Setiadi/i });
    expect(mainTitle).toBeTruthy();

    // Check subheading role
    const subHeading = screen.getByText(/Cloud Engineer/i);
    expect(subHeading).toBeTruthy();
  });

  it("gives every major section a labelled heading for SEO and accessibility", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 2, name: /About Me/i })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2, name: /Work Experience/i })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2, name: /Featured Projects/i })).toBeTruthy();

    const labelledSections = document.querySelectorAll("section[aria-labelledby]");
    expect(labelledSections.length).toBeGreaterThanOrEqual(8);
    labelledSections.forEach((section) => {
      const headingId = section.getAttribute("aria-labelledby") as string;
      expect(document.getElementById(headingId)).toBeTruthy();
    });
  });

  it("displays featured projects including Solatify and IDITA", () => {
    render(<Home />);
    
    // Check Solatify project card title
    const solatifyProject = screen.getByRole("heading", { level: 3, name: /Solatify/i });
    expect(solatifyProject).toBeTruthy();

    // Check IDITA project card title
    const iditaProject = screen.getByRole("heading", { level: 3, name: /IDITA/i });
    expect(iditaProject).toBeTruthy();
    
    // Check website links
    const visitLinks = screen.getAllByText(/Visit Website/i);
    expect(visitLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("spotlights the Seamless Migrate open-source project", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 3, name: /Seamless Migrate/i });
    expect(heading).toBeTruthy();

    const card = heading.closest("article") as HTMLElement;
    expect(card).toBeTruthy();
    expect(card.getAttribute("aria-labelledby")).toBe(heading.id);

    const website = screen.getByRole("link", { name: /Visit Seamless Migrate website/i });
    expect(website.getAttribute("href")).toBe("https://www.seamlessmigrate.org/");
    expect(website.getAttribute("rel")).toContain("noopener");

    const repo = screen.getByRole("link", { name: /Seamless Migrate on GitHub/i });
    expect(repo.getAttribute("href")).toBe("https://github.com/imransetiadi/seamless-vms-migration");

    expect(screen.getByText(/Open Source · Apache 2.0/i)).toBeTruthy();
    expect(screen.getByText(/Keep your VMs running\. Cut over in minutes\./i)).toBeTruthy();
    expect(screen.getByAltText(/Seamless Migrate dashboard/i)).toBeTruthy();

    // Workflow phases and key facts render inside the spotlight card
    const phases = screen.getByRole("list", { name: /Seamless Migrate workflow/i });
    expect(phases.querySelectorAll("li").length).toBe(4);
    expect(screen.getByText("Validate")).toBeTruthy();
    expect(screen.getByText("Cut over")).toBeTruthy();
    expect(screen.getByRole("list", { name: /Seamless Migrate key facts/i })).toBeTruthy();
  });

  it("renders technology tags for every project", () => {
    render(<Home />);

    const tagLists = screen.getAllByRole("list", { name: /Technologies used/i });
    expect(tagLists.length).toBe(projects.length);
    expect(screen.getAllByText("PostgreSQL").length).toBeGreaterThanOrEqual(2);

    const seamlessCard = screen.getByRole("heading", { level: 3, name: /Seamless Migrate/i }).closest("article") as HTMLElement;
    const seamlessTags = within(seamlessCard).getByRole("list", { name: /Technologies used/i });
    expect(within(seamlessTags).getByText("Ansible")).toBeTruthy();
    expect(within(seamlessTags).getByText("Python")).toBeTruthy();
  });

  it("renders technical skills groups", () => {
    render(<Home />);
    
    const skillsHeading = screen.getByRole("heading", { level: 2, name: /Technical Skills/i });
    expect(skillsHeading).toBeTruthy();

    // Check specific skill groups
    expect(screen.getByText(/Cloud Platforms/i)).toBeTruthy();
    expect(screen.getByText(/Container & Orchestration/i)).toBeTruthy();
    expect(screen.getByText(/CI\/CD & Version Control/i)).toBeTruthy();
  });

  it("renders credentials/certifications section", () => {
    render(<Home />);
    
    const certsHeading = screen.getByRole("heading", { level: 2, name: /Certifications/i });
    expect(certsHeading).toBeTruthy();

    // Check a specific certification title exactly
    expect(screen.getByText("Red Hat Certified System Administrator")).toBeTruthy();
    expect(screen.getByText("Red Hat Certified System Administrator in OpenShift")).toBeTruthy();
    expect(screen.getByText("CompTIA Linux+ ce")).toBeTruthy();

    // AWS Certified Cloud Practitioner links to its Credly badge
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeTruthy();
    const awsCard = screen.getByText("AWS Certified Cloud Practitioner").closest("a") as HTMLAnchorElement;
    expect(awsCard.getAttribute("href")).toBe("https://www.credly.com/badges/879b1263-8cee-43c1-a9d1-5c37d6f034f3");
    expect(screen.getByAltText("AWS Certified Cloud Practitioner badge")).toBeTruthy();
  });

  it("handles contact form inputs correctly", () => {
    render(<Home />);
    
    // Verify input fields exist
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/your@email\.com/i);
    const messageInput = screen.getByPlaceholderText(/Tell me about the platform/i);
    const submitBtn = screen.getByRole("button", { name: /Send inquiry/i });

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
    expect(submitBtn).toBeTruthy();

    // Simulate input typing
    fireEvent.change(nameInput, { target: { value: "QA Tester" } });
    fireEvent.change(emailInput, { target: { value: "qa@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Interested in hiring for a project." } });

    expect((nameInput as HTMLInputElement).value).toBe("QA Tester");
    expect((emailInput as HTMLInputElement).value).toBe("qa@example.com");
    expect((messageInput as HTMLTextAreaElement).value).toBe("Interested in hiring for a project.");
  });
});

describe("SEO - structured data", () => {
  it("builds a schema.org graph that links the person to every project", () => {
    const graph = buildStructuredData()["@graph"] as Array<Record<string, unknown>>;
    const types = graph.map((node) => node["@type"]);

    expect(types).toContain("Person");
    expect(types).toContain("WebSite");
    expect(types).toContain("ProfilePage");

    const personId = `${SITE_URL}/#person`;
    const projectNodes = graph.filter((node) => typeof node["@id"] === "string" && (node["@id"] as string).includes("#project-"));
    expect(projectNodes.length).toBe(projects.length);
    projectNodes.forEach((node) => {
      expect(node.author).toEqual({ "@id": personId });
    });

    const seamless = graph.find((node) => node.name === "Seamless Migrate") as Record<string, unknown>;
    expect(seamless["@type"]).toBe("SoftwareApplication");
    expect(seamless.codeRepository).toBe("https://github.com/imransetiadi/seamless-vms-migration");
    expect(seamless.license).toBe("https://www.apache.org/licenses/LICENSE-2.0");
    expect(seamless.isAccessibleForFree).toBe(true);
  });

  it("serializes JSON-LD without a raw closing script tag", () => {
    const html = serializeStructuredData({ name: "</script><script>alert(1)</script>" });
    expect(html).not.toContain("</script>");
    expect(html).toContain("\\u003c/script>");
  });
});
