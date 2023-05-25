import React from "react";
import GoogleIcon from "../images/google-icon.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, error1] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (error1) {
    setError(error1.message);
  }

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <h2 className="text-center text-2xl lg:text-3xl mb-10">
          Please Login!!
        </h2>
        <div className="login-wrapper lg:w-3/5 xl:w-2/5 mx-auto">
          <div className="text-center">
            <button
              onClick={() => signInWithGoogle()}
              className="mx-auto flex items-center bg-gray-200 px-8 py-4 rounded-lg"
            >
              <span>Login with</span>
              <img src={GoogleIcon} alt="Google Icon" className="ml-4 w-6" />
            </button>
          </div>
          <div className="text-center font-bold text-xl my-10">Or</div>
          <div>
            <form onSubmit={handleLoginUser} className="flex flex-col">
              <input
                onBlur={handleEmail}
                type="email"
                placeholder="Your Email"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                onBlur={handlePassword}
                type="password"
                placeholder="Your Password"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
                Login
              </button>
              <div className="text-red-400 text-center mt-6">
                {error?.message}
              </div>
            </form>
          </div>
          <div className="text-center mt-8">
            <span>Forgot your Password?</span>
            <NavLink
              to="/reset-password"
              className="font-semibold underline ml-2 text-red-500"
            >
              Reset Password
            </NavLink>
          </div>
          <div className="text-center mt-8">
            <span>Don't have an account?</span>
            <NavLink
              to="/registration"
              className="font-semibold underline ml-2 text-red-500"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
