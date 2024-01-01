"use client";

import { useState } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Login = () => {
  const [issignUp, setIsSignUp] = useState(false);
  const signUpHandler = () => setIsSignUp(!issignUp);

  return (
    <section className="w-screen grid place-items-center min-h-screen xl:h-screen overflow-hidden">
      {!issignUp ? (
        <SignIn onLogin={signUpHandler} />
      ) : (
        <SignUp onLogOut={signUpHandler} />
      )}
    </section>
  );
};

export default Login;
