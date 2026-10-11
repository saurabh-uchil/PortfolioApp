import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the brand name and subtitle", () => {
    render(<Navbar/>);

    expect(
      screen.getByText("KASHVI AIL"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Advocate, Bombay High Court"),
    ).toBeInTheDocument();
  });

  it("renders the primary navigation links", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("navigation", {
        name: "Primary navigation",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Home" }),
    ).toHaveAttribute("href", "#top");

    expect(
      screen.getByRole("link", { name: "About" }),
    ).toHaveAttribute("href", "#about");

    expect(
      screen.getByRole("link", { name: "Practice Areas" }),
    ).toHaveAttribute("href", "#practice-areas");
  });

  it("renders the Schedule a Call CTA by default", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("link", { name: /Schedule a Call/i }),
    ).toHaveAttribute("href", "/contact");
  });

  it("does not render navigation or the CTA when disabled", () => {
    render(<Navbar navLinks={[]} showCta={false} />);

    expect(
      screen.queryByRole("navigation"),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /Schedule a Call/i }),
    ).not.toBeInTheDocument();
  });

  it("opens and closes the mobile navigation menu", () => {
    render(<Navbar />);

    const openButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", {
        name: "Mobile navigation",
      }),
    ).not.toBeInTheDocument();

    fireEvent.click(openButton);

    expect(
      screen.getByRole("button", {
        name: "Close navigation menu",
      }),
    ).toHaveAttribute("aria-expanded", "true");

    expect(
      screen.getByRole("navigation", {
        name: "Mobile navigation",
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Close navigation menu",
      }),
    );

    expect(
      screen.queryByRole("navigation", {
        name: "Mobile navigation",
      }),
    ).not.toBeInTheDocument();
  });
});