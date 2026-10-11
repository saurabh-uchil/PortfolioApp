import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the main heading and description", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toHaveTextContent("LEGAL QUESTIONS?");

    expect(
      screen.getByText(/A legal professional with experience in civil litigation/),
    ).toBeInTheDocument();
  });

  it("renders the hero image with its alt text", () => {
    render(<Hero />);

    expect(
      screen.getByRole("img", {
        name: "Professional holding a tablet in a bright architectural setting",
      }),
    ).toBeInTheDocument();
  });

  it("renders the Schedule a Call link", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /Schedule a Call/i }),
    ).toHaveAttribute("href", "/contact");
  });

  it("renders the CV download link", () => {
    render(<Hero />);

    const cvLink = screen.getByRole("link", { name: /Download CV/i });

    expect(cvLink).toHaveAttribute("href", "/assets/kashvi-ail.pdf");
    expect(cvLink).toHaveAttribute("download");
  });
});