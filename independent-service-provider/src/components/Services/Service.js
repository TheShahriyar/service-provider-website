import React from "react";
import { useNavigate } from "react-router-dom";
import iconImage from "../../images/healthy.png"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Service = (props) => {
  const {_id, name, price, desc } = props.service;
  const handleDelete = props.handleDelete;

  const navigate = useNavigate()

  const navigateToServiceDetails = id => {
    navigate(`/service/${id}`)
  }

  const [user] = useAuthState(auth)

  return (
    <div className="service text-center flex flex-col items-center shadow px-10 py-10">
      <img src={iconImage} alt={name} className="w-20" />
      <h3 className="mt-8 text-xl">{name}</h3>
      <p className="py-3">{desc}</p>
      <div className="mb-4 font-semibold">
        Fee: <span className="text-red-400">${price}</span>
      </div>
      <button
        onClick={()=> navigateToServiceDetails(_id)}
        className="bg-sky-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded mb-4"
      >
        View Details
      </button>
      {
        user &&
        <button
          onClick={()=> handleDelete(_id)}
          className="bg-red-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded"
        >
          Delete Service
        </button>
      }
    </div>
  );
};

export default Service;
