import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./LoginForm.scss";
import logo from "../../data/logo/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginForm">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="form_container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="email_container">
            <EmailIcon className="icon" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password_container">
            <LockIcon className="icon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember_inputs">
            <div className="checkbox">
              <input type="checkbox" placeholder="Remember me" />{" "}
              <span>Remember me </span>
            </div>

            <p>Forgot Password</p>
          </div>

          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
