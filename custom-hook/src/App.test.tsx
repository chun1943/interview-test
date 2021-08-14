import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const setup = () => {
  const utils = render(<App />);
  const account = utils.getByPlaceholderText("Account") as HTMLInputElement;
  const password = utils.getByPlaceholderText("password") as HTMLInputElement;
  const rememberMe = utils.getByRole("checkbox", {
    name: "Remember Me",
  }) as HTMLInputElement;
  const login = utils.getByRole("button", {
    name: "Login",
  });

  return {
    account,
    password,
    rememberMe,
    login,
    ...utils,
  };
};

describe("form testing", () => {
  test("exist input element", () => {
    const { account, password, rememberMe, login } = setup();
    expect(account).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(rememberMe).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });

  test("change  input ", () => {
    const { account, password, rememberMe, login } = setup();
    fireEvent.change(account, { target: { value: "23" } });
    expect(account.value).toBe("23");
    fireEvent.change(password, { target: { value: "333" } });
    expect(password.value).toBe("333");
    fireEvent.click(rememberMe);
    expect(rememberMe.checked).toBe(true);
    fireEvent.click(rememberMe);
    expect(rememberMe.checked).toBe(false);

    fireEvent.change(password, { target: { value: "" } });
    expect(password.value).toBe("");
    fireEvent.click(login);
    expect(screen.getByText("請輸入密碼")).toBeInTheDocument();

    fireEvent.change(account, { target: { value: "" } });
    expect(account.value).toBe("");
    fireEvent.click(login);
    expect(screen.getByText("請輸入帳號")).toBeInTheDocument();
  });
});
