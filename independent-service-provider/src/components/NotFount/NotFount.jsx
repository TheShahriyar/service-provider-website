import React from "react";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-20 text-center">
        <h2 className="text-4xl">404!! Not found.</h2>
        <p>
          Go back to <Link to="/">Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFount;
