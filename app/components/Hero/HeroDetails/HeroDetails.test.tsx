import { render, screen } from "@testing-library/react";
import { HeroDetails } from "./HeroDetails";

describe("HeroDetails", () => {
  it("renders the location details", () => {
    render(<HeroDetails />);

    expect(screen.getByText("Mumbai,")).toBeInTheDocument();
    expect(screen.getByText("Maharashtra, India")).toBeInTheDocument();
  });

  it("renders the education details", () => {
    render(<HeroDetails />);

    expect(screen.getByText("LL.M. (Business Law)")).toBeInTheDocument();
    expect(screen.getByText("K.C. Law College")).toBeInTheDocument();
  });

  it("renders the opportunities details", () => {
    render(<HeroDetails />);

    expect(screen.getByText("Open to")).toBeInTheDocument();
    expect(screen.getByText("opportunities")).toBeInTheDocument();
  });

});