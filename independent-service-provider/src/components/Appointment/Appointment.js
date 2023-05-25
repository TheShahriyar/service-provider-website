import React from "react";
import DoctorImage from "../../images/img1.png";

const Appointment = () => {
  return (
    <div className="pt-16 bg-gray-100 pb-16 lg:pb-0">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-x-10 items-center">
          <div className="">
            <div className="appointment-wrapper">
              <h2 className="text-2xl lg:text-3xl mb-2">Book an appointment</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                tenetur.
              </p>
              <div className="grid grid-cols-2 gap-x-4 mb-4 mt-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                />
                <input
                  type="date"
                  placeholder="Appointment Date"
                  className="bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                />
              </div>
              <div className="grid mb-4">
                <textarea
                  rows="6"
                  className="bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
                ></textarea>
              </div>
              <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
                Appointment
              </button>
            </div>
          </div>
          <div className=" text-center hidden lg:block">
            <img
              src={DoctorImage}
              alt="Doctor Name"
              className="h-auto max-w-full inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
