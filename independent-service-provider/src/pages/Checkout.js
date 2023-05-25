import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";

const Checkout = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  console.log(user);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    navigate("/order-confirm");
  };

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <div className="text-center text-2xl lg:text-3xl mb-10">
          <h2>Order Service: {param.serviceID}</h2>
        </div>
        <div className="lg:w-3/5 xl:w-2/5 mx-auto">
          <h3 className="mb-6">Fill out below information to confirm order:</h3>
          <form onSubmit={handleConfirmOrder} className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              value={user.displayName}
              className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={user.email}
              className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={user.phoneNumber}
              className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
            />
            <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
