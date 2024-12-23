import React from "react";

const Card = ({ image, title }) => {
  return (
    <div
    className="shadow-lg rounded-xl overflow-hidden bg-secondary hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-68 object-fit" />
      <div className="p-2">
        <h3 className="text-center font-semibold text-primary italic">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
