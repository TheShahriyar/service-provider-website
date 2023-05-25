import React from "react";
import Service from "./Service";
import useServices from "../../hooks/useServices";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useServices();

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url =`http://localhost:4000/service/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        const remaining = services.filter(service => service._id !== id)
        setServices(remaining);
      })
    }
  }

  return (
    <div className="service-section py-20">
      <div className="container">
        <h2 className="text-center text-2xl lg:text-3xl mb-10">My Services</h2>
        <div className="service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <Service key={service._id} service={service} handleDelete={handleDelete} />
          ))}
        </div>
        {
          services.length > 6 &&
          <div className="mt-12 text-center">
            <NavLink to="/services" className=" inline-block bg-sky-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded mb-4 mx-auto">View All Services</NavLink> </div>
        }
      </div>
    </div>
  );
};

export default Services;
