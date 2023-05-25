import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const ServiceDetails = () => {
  const param = useParams();
  const [service, setService] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const url =`http://localhost:4000/service/${param.serviceID}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])

  const navigateToCheckout = (id) => {
    navigate(`/checkout/${id}`)
  }

  return (
    <div className="min-h-screen">
      <div className='py-20 w-96 mx-auto space-y-4'>
        <h2>Details service of {service.name}</h2>
        <p>{service.desc}</p>
        <div>Price: {service.price}</div>
        <button
          onClick={()=> navigateToCheckout(service.name)}
          className="bg-sky-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded"
        >Checkout</button>
      </div>
    </div>
  )
}

export default ServiceDetails