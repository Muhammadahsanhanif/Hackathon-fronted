import React from "react";

const AdminCard = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={imgSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <button className="block w-full py-2 bg-teal-950 text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-teal-600 focus:ring-2 focus:ring-teal-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
