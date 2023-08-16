import { useEffect, useState } from "react";
import updateUser from "@/helpers/updateUser";
import { FaPencilAlt } from "react-icons/fa";

const EditModal = ({ curKey, prevValue, handleSaveClick, setIsEditing }) => {
  const [value, setValue] = useState(prevValue);
  const isDummyUser = prevValue === "jhon@gmail.com";
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md">
        {isDummyUser ? (
          <>
            <h2 className="text-lg font-semibold mb-4">
              Cannot update dummy user email
            </h2>
            <button
              className="ml-2 px-4 py-2 border rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
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
      updated.email = value;
    }
    if (key === "phone") {
      setPhone(value);
      updated.phone = value;
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
    <div className="bg-white p-6 rounded-lg shadow-md m-3">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold text-sm">Name</p>
            <p className="text-black text-sm">{name}</p>
          </div>
          <button
            onClick={() => handleEditClick("username")}
            className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold text-sm">Email</p>
            <p className="text-black text-sm">{email}</p>
          </div>
          <button
            onClick={() => handleEditClick("email")}
            className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold text-sm">Phone</p>
            <p className="text-black text-sm">{phone || "Not set"}</p>
          </div>
          <button
            onClick={() => handleEditClick("phone")}
            className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
          >
            <FaPencilAlt />
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
