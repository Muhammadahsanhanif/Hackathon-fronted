// CategoryCard.js
import React, { useState } from "react";
import Modal from "./modal";

export default function ({ title, image, description }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSeeMoreClick = () => {
    setModalOpen(true); // Open the modal when "See More" is clicked
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
      <div className="h-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="p-4 flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-lg font-semibold text-teal-600 mb-2">{title}</h2>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description || "No description available."}
          </p>
          
          {/* Button */}
          <button
            className="w-full py-2 text-sm font-bold text-white bg-teal-950 rounded-md transition-all duration-300 hover:bg-gray-500"
            onClick={handleSeeMoreClick}
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

