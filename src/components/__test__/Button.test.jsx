import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../Button";

describe("Button Component", () => {
  it("renders the button with correct text", () => {
    const { unmount } = render(<Button />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveTextContent("Submit");

    unmount();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { unmount } = render(<Button onClick={handleClick} />);

    const buttonElement = screen.getByRole("button");
    buttonElement.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
    unmount();
  });
});
