import Image from "next/image";
import React from "react";

const ProfileImage = () => {
    const imageUrl = "https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg";
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between m-4">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
            Edit
          </button>
        </div>
      );
};

export default ProfileImage;
