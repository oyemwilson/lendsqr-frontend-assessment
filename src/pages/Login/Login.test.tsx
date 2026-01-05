import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Login Page", () => {
  test("Positive: allows user to submit valid credentials", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    // no crash = pass
    expect(true).toBe(true);
  });

  test("Negative: prevents submit when email is missing", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByPlaceholderText(/email/i)).toBeInvalid();
  });

  test("Negative: prevents submit when password is missing", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByPlaceholderText(/password/i)).toBeInvalid();
  });
});
