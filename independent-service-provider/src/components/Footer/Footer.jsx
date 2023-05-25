import React from "react";

const componentName = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center bg-slate-400 py-4">
      <p>Copyright © {year}</p>
    </div>
  );
};

export default componentName;
