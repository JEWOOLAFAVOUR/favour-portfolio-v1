import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../../components/sections/About";

describe("About Component", () => {
  it("renders the about section", () => {
    render(<About />);

    expect(screen.getByText(/Hi! I'm Favour/i)).toBeInTheDocument();
  });

  it("displays the Ennovate Lab link", () => {
    render(<About />);

    const ennovateLink = screen.getByRole("link", { name: /Ennovate Lab/i });
    expect(ennovateLink).toBeInTheDocument();
    expect(ennovateLink).toHaveAttribute(
      "href",
      "https://www.ennovatelab.com/",
    );
  });

  it("displays the Studypadi link", () => {
    render(<About />);

    const studypadiLink = screen.getByRole("link", { name: /Studypadi/i });
    expect(studypadiLink).toBeInTheDocument();
    expect(studypadiLink).toHaveAttribute(
      "href",
      "https://www.studypady.com.ng/",
    );
  });

  it("displays the LAUTECH link", () => {
    render(<About />);

    const lautechLink = screen.getByRole("link", { name: /LAUTECH/i });
    expect(lautechLink).toBeInTheDocument();
    expect(lautechLink).toHaveAttribute("href", "https://www.lautech.edu.ng/");
  });

  it("renders all skills", () => {
    render(<About />);

    // Check for some key skills
    expect(screen.getByText("React Native")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("has the correct section id for navigation", () => {
    render(<About />);

    const section = document.getElementById("about");
    expect(section).toBeInTheDocument();
  });
});
