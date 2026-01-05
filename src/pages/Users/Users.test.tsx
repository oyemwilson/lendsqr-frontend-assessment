import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users Page", () => {
  test("Positive: renders users list", async () => {
    render(<Users />);

    expect(await screen.findByText(/users/i)).toBeInTheDocument();
  });

  test("Negative: shows loading state when users not loaded", () => {
    render(<Users />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
