import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProjectsSection from "../../components/sections/Projects";

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

describe("Projects Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the projects section", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it("displays HonourWorld project", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText("HonourWorld")).toBeInTheDocument();
    expect(
      screen.getByText(
        /A client project at Cephas ICT Hub offering VTU services with 10k\+ downloads/i,
      ),
    ).toBeInTheDocument();
  });

  it("displays Skill Remit project", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText("Skill Remit")).toBeInTheDocument();
  });

  it("displays VickyBest Telecom project", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText("VickyBest Telecom")).toBeInTheDocument();
  });

  it("displays StudyPadi project", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText("StudyPadi")).toBeInTheDocument();
  });

  it("displays JTB Website project", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText("JTB Website")).toBeInTheDocument();
  });

  it("renders technology tags for projects", () => {
    renderWithRouter(<ProjectsSection />);

    // Check for common technologies used in projects
    expect(screen.getAllByText("React Native").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
  });

  it("renders View Full Project Archive button", () => {
    renderWithRouter(<ProjectsSection />);

    expect(screen.getByText(/View Full Project Archive/i)).toBeInTheDocument();
  });

  it("navigates to archive page when clicking archive button", () => {
    renderWithRouter(<ProjectsSection />);

    const archiveButton = screen.getByText(/View Full Project Archive/i);
    fireEvent.click(archiveButton);

    expect(mockNavigate).toHaveBeenCalledWith("/archive");
  });

  it("has the correct section id for navigation", () => {
    renderWithRouter(<ProjectsSection />);

    const section = document.getElementById("projects");
    expect(section).toBeInTheDocument();
  });

  it("renders project images", () => {
    renderWithRouter(<ProjectsSection />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
