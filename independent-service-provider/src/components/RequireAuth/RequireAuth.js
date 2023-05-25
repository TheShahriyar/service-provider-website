import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <div>Loading</div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  if (!user.emailVerified) {
    return (
      <>
        <div className="min-h-screen">
          <div className="container py-20">
            <h2 className="text-center text-2xl lg:text-3xl mb-10">
              Please verify your email address!!
            </h2>
            <button
              onClick={async () => {
                const success = await sendEmailVerification();
                if (success) {
                  toast("Verification email sent");
                }
              }}
            >
              Sent verification email again
            </button>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  }

  return children;
};

export default RequireAuth;
