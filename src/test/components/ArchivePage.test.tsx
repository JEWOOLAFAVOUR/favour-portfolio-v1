import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArchivePage from "../../screen/ArchivePage";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("ArchivePage Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the page title", () => {
    renderWithRouter(<ArchivePage />);

    expect(screen.getByText("All Projects")).toBeInTheDocument();
  });

  it("renders the back to home link", () => {
    renderWithRouter(<ArchivePage />);

    expect(screen.getByText("Jewoola Favour")).toBeInTheDocument();
  });

  it("renders table headers", () => {
    renderWithRouter(<ArchivePage />);

    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Project")).toBeInTheDocument();
    expect(screen.getByText("Made at")).toBeInTheDocument();
    expect(screen.getByText("Built with")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
  });

  it("displays HonourWorld project in archive", () => {
    renderWithRouter(<ArchivePage />);

    const honourWorldElements = screen.getAllByText("HonourWorld");
    expect(honourWorldElements.length).toBeGreaterThan(0);
  });

  it("displays Skill Remit project in archive", () => {
    renderWithRouter(<ArchivePage />);

    const skillRemitElements = screen.getAllByText("Skill Remit");
    expect(skillRemitElements.length).toBeGreaterThan(0);
  });

  it("displays VickyBest project in archive", () => {
    renderWithRouter(<ArchivePage />);

    const vickybestElements = screen.getAllByText("VickyBest Telecom");
    expect(vickybestElements.length).toBeGreaterThan(0);
  });

  it("displays StudyPadi project in archive", () => {
    renderWithRouter(<ArchivePage />);

    const studyPadiElements = screen.getAllByText("StudyPadi");
    expect(studyPadiElements.length).toBeGreaterThan(0);
  });

  it("displays JTB Website project in archive", () => {
    renderWithRouter(<ArchivePage />);

    const jtbElements = screen.getAllByText("JTB Website");
    expect(jtbElements.length).toBeGreaterThan(0);
  });

  it("displays year for projects", () => {
    renderWithRouter(<ArchivePage />);

    // Check that 2025 appears (most recent projects)
    expect(screen.getAllByText("2025").length).toBeGreaterThan(0);
  });

  it("displays company names for projects", () => {
    renderWithRouter(<ArchivePage />);

    expect(screen.getAllByText("Ennovate Lab").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Cephas Digital Technology").length,
    ).toBeGreaterThan(0);
  });

  it("renders technology tags in archive", () => {
    renderWithRouter(<ArchivePage />);

    expect(screen.getAllByText("React Native").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
  });

  it("renders external links with arrow icon", () => {
    renderWithRouter(<ArchivePage />);

    // Find all external links (those with project URLs)
    const externalLinks = screen.getAllByRole("link");

    // Filter for links that have href (excluding the back link)
    const projectLinks = externalLinks.filter((link) =>
      link.getAttribute("href")?.startsWith("http"),
    );

    expect(projectLinks.length).toBeGreaterThan(0);
  });
});
