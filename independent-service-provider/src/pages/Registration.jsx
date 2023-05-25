import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "../images/google-icon.png";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [updateProfile] = useUpdateProfile(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleCreateNewUserForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be minimum 6 characters");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setError(
        "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumber: phone });

    setError("");
    toast("Verification Email Sent");
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <h2 className="text-center text-2xl lg:text-3xl mb-10">
          Please Register!!
        </h2>
        <div className="login-wrapper lg:w-3/5 xl:w-2/5 mx-auto">
          <div className="text-center">
            <button
              onClick={handleGoogleSignIn}
              className="mx-auto flex items-center bg-gray-200 px-8 py-4 rounded-lg"
            >
              <span>Sign up with</span>
              <img src={GoogleIcon} alt="Google Icon" className="ml-4 w-6" />
            </button>
          </div>
          <div className="text-center font-bold text-xl my-10">Or</div>
          <div>
            <form onSubmit={handleCreateNewUserForm} className="flex flex-col">
              <input
                onBlur={handleName}
                type="text"
                placeholder="Your Name"
                required
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                onBlur={handleEmail}
                type="email"
                placeholder="Your Email"
                required
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                onBlur={handlePhone}
                type="text"
                placeholder="Your Phone"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                onBlur={handlePassword}
                type="password"
                placeholder="Your Password"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                onBlur={handleConfirmPass}
                type="password"
                placeholder="Confirm Password"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
                Register
              </button>
              <div className="text-red-400 text-center mt-6">{error}</div>
            </form>
          </div>
          <div className="text-center mt-8">
            <span>Already have an account?</span>
            <NavLink
              to="/login"
              className="font-semibold underline ml-2 text-red-500"
            >
              Login Now
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
