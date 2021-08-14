import React from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: "", password: "", rememberMe: false },
    validation: (values: { [key: string]: string }) => {
      const errors: { [key: string]: string } = {};
      console.log("vava");
      console.log(values);
      if (!values.account) {
        errors.account = "請輸入帳號";
      } else if (!values.password) {
        errors.password = "請輸入密碼";
      }
      return errors;
    },
    onSubmit: (values: { [key: string]: string }) => console.table(values),
  });

  return (
    <>
      <input
        name="account"
        onChange={handleChange}
        value={values.account}
        placeholder="Account"
      />
      {errors.account && <div>{errors.account}</div>}
      <input
        name="password"
        onChange={handleChange}
        value={values.password}
        placeholder="password"
      />
      {errors.password && <div>{errors.password}</div>}
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          onChange={handleChange}
          checked={values.rememberMe}
        />
        Remember Me
      </label>
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default App;
