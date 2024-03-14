import React from "react";

const Reset = ({ onClick }) => {
  return (
    <div className="flex justify-center">
        <button className="text-2xl bg-red-800 px-5 py-5 rounded-lg font-bold" onClick={onClick}>Restart</button>
    </div>
  );
};

export default Reset;
