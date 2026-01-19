import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "../../components/Navigation";

describe("Navigation Component", () => {
  it("renders the name and title", () => {
    render(<Navigation />);

    expect(screen.getByText("Jewoola Favour")).toBeInTheDocument();
    expect(
      screen.getByText("Full-Stack Software Developer"),
    ).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Navigation />);

    expect(
      screen.getByText(/I build end-to-end mobile and web products/i),
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navigation />);

    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });

  it("renders GitHub social link", () => {
    render(<Navigation />);

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/JEWOOLAFAVOUR",
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders LinkedIn social link", () => {
    render(<Navigation />);

    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/jewoolafavour",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders Twitter social link", () => {
    render(<Navigation />);

    const twitterLink = screen.getByRole("link", { name: /Twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute("href", "https://x.com/favourlop");
    expect(twitterLink).toHaveAttribute("target", "_blank");
  });

  it("renders Instagram social link", () => {
    render(<Navigation />);

    const instagramLink = screen.getByRole("link", { name: /Instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/jewoolafavourgbemi/",
    );
    expect(instagramLink).toHaveAttribute("target", "_blank");
  });

  it("renders YouTube social link", () => {
    render(<Navigation />);

    const youtubeLink = screen.getByRole("link", { name: /YouTube/i });
    expect(youtubeLink).toBeInTheDocument();
    expect(youtubeLink).toHaveAttribute(
      "href",
      "https://www.youtube.com/@lacademos982",
    );
    expect(youtubeLink).toHaveAttribute("target", "_blank");
  });

  it("renders all social links", () => {
    render(<Navigation />);

    const socialLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");
    expect(socialLinks.length).toBe(5);
  });

  it("has navigation links with correct href attributes", () => {
    render(<Navigation />);

    const aboutLink = screen.getByText("ABOUT").closest("a");
    const experienceLink = screen.getByText("EXPERIENCE").closest("a");
    const projectsLink = screen.getByText("PROJECTS").closest("a");

    expect(aboutLink).toHaveAttribute("href", "#about");
    expect(experienceLink).toHaveAttribute("href", "#experience");
    expect(projectsLink).toHaveAttribute("href", "#projects");
  });
});
