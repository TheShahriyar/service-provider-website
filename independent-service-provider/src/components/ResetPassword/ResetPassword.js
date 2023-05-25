import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
    toast(`Reset Password Email sent to ${email}`);
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="container py-20">
          <div className="text-center mb-6">
            <h4>To reset your password add your email address below.</h4>
          </div>
          <div className="login-wrapper w-2/5 mx-auto">
            <div>
              <form onSubmit={handleResetPassword} className="flex flex-col">
                <input
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Your Email"
                  className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                />
                <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResetPassword;
