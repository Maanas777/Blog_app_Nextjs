"use client";

import React from "react";
import "./page.css";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handlegoogle = async (e) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>

        <button className="google-btn" onClick={handlegoogle}>
          <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
          <span>Login with Google</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
