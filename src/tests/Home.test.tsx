import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

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

  it("filters projects when clicking on a technology filter button", () => {
    render(<Home />);
    
    // Select the "Flutter" filter button
    const flutterBtn = screen.getByRole("button", { name: "Flutter" });
    expect(flutterBtn).toBeTruthy();

    // IDITA project is visible by default
    expect(screen.queryByRole("heading", { level: 3, name: "IDITA" })).toBeTruthy();

    // Click on "Flutter" filter button
    fireEvent.click(flutterBtn);

    // Now, only Solatify is shown (which has Flutter tag), IDITA should be hidden
    expect(screen.queryByRole("heading", { level: 3, name: "Solatify" })).toBeTruthy();
    expect(screen.queryByRole("heading", { level: 3, name: "IDITA" })).toBeNull();

    // Click on "All" filter button
    const allBtn = screen.getByRole("button", { name: "All" });
    fireEvent.click(allBtn);

    // Now, both are shown again
    expect(screen.queryByRole("heading", { level: 3, name: "IDITA" })).toBeTruthy();
    expect(screen.queryByRole("heading", { level: 3, name: "Solatify" })).toBeTruthy();
  });
});
