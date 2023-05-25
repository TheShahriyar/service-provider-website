import React from 'react';
import useServices from '../hooks/useServices';
import Service from '../components/Services/Service';

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
        <h2 className="text-center text-2xl lg:text-3xl mb-10">My All Services</h2>
        <div className="service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Service key={service._id} service={service} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;