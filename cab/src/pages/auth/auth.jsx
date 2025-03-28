import "./auth.css";
import React, { useState } from "react";

const Signup = ({ switchForm }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form>
      <h2>Sign up</h2>
      <label htmlFor="Username">Enter username</label>
      <input type="text" name="Username" id="Username" />
      <label htmlFor="Password">Enter password</label>
      <input
        type={passwordVisible ? "text" : "password"}
        name="Password"
        id="Password"
      />
      <label htmlFor="Confirm-Password">Confirm password</label>
      <input
        type={passwordVisible ? "text" : "password"}
        name="Confirm-Password"
        id="Confirm-Password"
      />
      <span>
        <input
          type="checkbox"
          name="show-password"
          id="show-password"
          onChange={handlePasswordVisibility}
        />{" "}
        Show password
      </span>
      <span className="switch-form">
        Already have an account?{" "}
        <button className="switch-form-btn" onClick={switchForm}>
          Sign in
        </button>
      </span>
      <button type="submit">Sign up</button>{" "}
      <span>
        By clicking sign up, you agree to our{" "}
        <a href="/">terms and conditions</a>
      </span>
    </form>
  );
};

const Signin = ({ switchForm }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <form>
      <h2>Sign in</h2>
      <label htmlFor="Username">Enter username</label>
      <input type="text" name="Username" id="Username" />
      <label htmlFor="Password">Enter password</label>
      <div className="password-input">
        <input
          type={passwordVisible ? "text" : "password"}
          name="Password"
          id="Password"
        />
        <i
          className={`bx ${passwordVisible ? "bx-show" : "bx-hide"}`}
          onClick={handlePasswordVisibility}
        ></i>
      </div>
      <div className="password-manager">
        <span>
          {" "}
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </span>
        <a href="/">Forgot password?</a>
      </div>
      <span className="switch-form">
        Don't have an account?{" "}
        <button className="switch-form-btn" onClick={switchForm}>
          Sign up
        </button>
      </span>
      <button type="submit">Sign in</button>{" "}
    </form>
  );
};

function Auth() {
  const [form, setForm] = useState("signin");

  const switchForm = () => {
    if (form === "signin") {
      setForm("signup");
    } else {
      setForm("signin");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-banner">
        <h1>
          Careers and Businesses <br />{" "}
          {form === "signin" ? (
            <span>Welcome back 👋🏾</span>
          ) : (
            <span>Hello 👋🏾, join community </span>
          )}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius
          esse magnam accusantium soluta incidunt quas repudiandae doloremque
          aliquam sunt, deleniti cum fugit. Voluptatum ab unde optio error,
          perferendis quos.
        </p>
      </div>
      <div className="auth-form">
        {form === "signin" ? (
          <Signin switchForm={switchForm} />
        ) : (
          <Signup switchForm={switchForm} />
        )}
      </div>
    </div>
  );
}

export default Auth;
