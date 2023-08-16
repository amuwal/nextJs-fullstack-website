import { useState } from "react";
import updateUser from "@/helpers/updateUser";
import { FaPencilAlt } from "react-icons/fa";

const EditModal = ({ prevValue, handleSaveClick, setIsEditing }) => {
  const [value, setValue] = useState(prevValue);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <label className="block mb-2">
          Bio:
          <input
            type="text"
            className="w-full border rounded p-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleSaveClick(value)}
          >
            Save
          </button>
          <button
            className="ml-2 px-4 py-2 border rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutUser = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (newBio) => {
    const updated = { ...user };
    updated.about = newBio;

    const res = await updateUser(updated);
    setUser(updated);

    setIsEditing(false);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 m-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          About{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-400 to-red-500">
            {user?.username.split(" ")[0]}
          </span>
        </h2>
        <button onClick={handleEditClick} className="hover:bg-blue-600 hover:text-white text-black p-2 rounded ">
        <FaPencilAlt />
      </button>
      </div>
      <p className="text-gray-600 text-sm">{user?.about || "No bio set"}</p>
      {isEditing && (
        <EditModal
          prevValue={user?.about}
          handleSaveClick={handleSaveClick}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default AboutUser;
