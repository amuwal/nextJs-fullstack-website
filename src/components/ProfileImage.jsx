import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const EditModal = ({ setIsEditing }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">TODO</h2>
        <button
          className="ml-2 px-4 py-2 border rounded"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const ProfileImage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const hanldleOnClick = () => {
    setIsEditing(true);
  };
  const imageUrl =
    "https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg";
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between m-3">
      <img src={imageUrl} alt="Profile" className="w-20 h-20 rounded-full" />
      <button
        onClick={hanldleOnClick}
        className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
      >
        <FaPencilAlt />
      </button>
      {isEditing && <EditModal setIsEditing={setIsEditing} />}
    </div>
  );
};

export default ProfileImage;
