import React from "react";
import Appointment from "../components/Appointment/Appointment";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Appointment />
    </div>
  );
};

export default Homepage;
