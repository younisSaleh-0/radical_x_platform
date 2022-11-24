import React, { useState } from "react";
import LoginForm from "../../components/loginPage/LoginForm";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_left"></div>
      <div className="login_right">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
