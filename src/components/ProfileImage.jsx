import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const ProfileImage = () => {
  const imageUrl =
    "https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg";
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between m-3">
      <img src={imageUrl} alt="Profile" className="w-20 h-20 rounded-full" />
      <button className="hover:bg-blue-600 hover:text-white text-black p-2 rounded ">
        <FaPencilAlt />
      </button>
    </div>
  );
};

export default ProfileImage;
