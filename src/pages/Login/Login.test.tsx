import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
  test("Positive: allows user to submit valid credentials", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue("test@example.com");
  });

  test("Negative: prevents submit when email is missing", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByPlaceholderText(/email/i)).toBeInvalid();
  });

  test("Negative: prevents submit when password is missing", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByPlaceholderText(/password/i)).toBeInvalid();
  });
});
