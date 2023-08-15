import { useEffect, useState } from "react";
import updateUser from "@/helpers/updateUser";

const EditModal = ({ curKey, prevValue, handleSaveClick, setIsEditing }) => {
  const [value, setValue] = useState(prevValue);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <label className="block mb-2">
          {curKey + ":"}
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
            onClick={() => handleSaveClick(curKey, value)}
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
const BasicInfo = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [curKey, setCurKey] = useState("");

  const handleEditClick = (key) => {
    setCurKey(key);
    setIsEditing(true);
  };

  const handleSaveClick = async (key, value) => {
    const updated = { ...user };

    if (key === "username") {
      setName(value);
      updated.username = value;
    }
    if (key === "email") {
      setEmail(value);
      updated.email = email;
    }
    if (key === "phone") {
      setPhone(value);
      updated.phone(value);
    }

    const res = await updateUser(updated);
    setUser(updated);
    
    setIsEditing(false);
  };

  useEffect(() => {
    setName(user?.username);
    setEmail(user?.email);
    setPhone(user?.phone);
  }, [user]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold">Name</p>
            <p className="text-black">{name}</p>
          </div>
          <button
            onClick={() => handleEditClick("username")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full"
          >
            Edit
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold">Email</p>
            <p className="text-black">{email}</p>
          </div>
          <button
            onClick={() => handleEditClick("email")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full"
          >
            Edit
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold">Phone</p>
            <p className="text-black">{phone || "Not set"}</p>
          </div>
          <button
            onClick={() => handleEditClick("phone")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full"
          >
            Edit
          </button>
        </div>
        {isEditing && (
          <EditModal
            curKey={curKey}
            prevValue={
              curKey === "username" ? name : curKey === "email" ? email : phone
            }
            handleSaveClick={handleSaveClick}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
