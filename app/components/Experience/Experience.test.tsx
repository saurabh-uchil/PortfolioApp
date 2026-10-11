import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the section heading and description", () => {
    render(<Experience />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Building experience through practice.",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/From court appearances to drafting and client coordination/),
    ).toBeInTheDocument();
  });

  it("renders the experience section with the correct id", () => {
    render(<Experience />);

    expect(document.getElementById("experience")).toBeInTheDocument();
  });

  it("renders all four experience entries", () => {
    render(<Experience />);

    expect(screen.getByText("Chamber of Adv. Rajesh Kachare")).toBeInTheDocument();
    expect(screen.getByText("Adv. Wasim Hassan")).toBeInTheDocument();
    expect(screen.getByText("A&G Legal Associates LLP")).toBeInTheDocument();
    expect(screen.getByText("Sama")).toBeInTheDocument();
  });

  it("renders the experience periods", () => {
    render(<Experience />);

    expect(screen.getByText("2024 – 2026")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("2021 – 2022")).toBeInTheDocument();
  });
});