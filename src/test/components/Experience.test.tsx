import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExperienceSection from "../../components/sections/Experience";

describe("Experience Component", () => {
  it("renders the experience section", () => {
    render(<ExperienceSection />);

    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  it("displays Ennovate Lab experience", () => {
    render(<ExperienceSection />);

    expect(
      screen.getByText(/Software Developer · Ennovate Lab/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/OCT 2025 — PRESENT/i)).toBeInTheDocument();
  });

  it("displays Cephas Digital Technology experience", () => {
    render(<ExperienceSection />);

    expect(
      screen.getByText(/Software Developer · Cephas Digital Technology/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/MAR 2022 — SEP 2025/i)).toBeInTheDocument();
  });

  it("displays Versecog Farm Enterprise experience", () => {
    render(<ExperienceSection />);

    expect(
      screen.getByText(
        /Freelance Mobile App Developer · Versecog Farm Enterprise/i,
      ),
    ).toBeInTheDocument();
  });

  it("displays Compellers Digital experience", () => {
    render(<ExperienceSection />);

    expect(
      screen.getByText(/Freelance Mobile Developer · Compellers Digital/i),
    ).toBeInTheDocument();
  });

  it("renders View Full Résumé link", () => {
    render(<ExperienceSection />);

    const resumeLink = screen.getByRole("link", { name: /View Full Résumé/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
  });

  it("renders skill tags for each experience", () => {
    render(<ExperienceSection />);

    // Check for some common skills that appear across experiences
    expect(screen.getAllByText("React Native").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
  });

  it("has the correct section id for navigation", () => {
    render(<ExperienceSection />);

    const section = document.getElementById("experience");
    expect(section).toBeInTheDocument();
  });
});
