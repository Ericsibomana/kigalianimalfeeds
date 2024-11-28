import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, to, className = "" }) => {
  const baseClasses =
    "group relative grid overflow-hidden rounded-full font-bold transition duration-300";
  const sizeClasses = "px-10 py-3 text-base sm:text-lg md:px-6 md:py-2"; // Adjusts size on small devices and larger screens.

  // Apply shooting star effect styles
  const shootingStarClasses = `
    shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] 
    transition-colors duration-200
    bg-white text-primary hover:bg-secondary
    group-hover:bg-slate-800
  `;

  // Button Link
  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${sizeClasses} ${shootingStarClasses} ${className}`}
      >
        <span>
          <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-white transition-colors duration-200 group-hover:bg-secondary" />
        <span className="text-center z-10 text-primary">{text}</span>
      </Link>
    );
  }

  // Button without Link
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${shootingStarClasses} ${className}`}
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
      <span className="text z-10 text-[#cbd5e1]">{text}</span>
    </button>
  );
};

export default Button;
