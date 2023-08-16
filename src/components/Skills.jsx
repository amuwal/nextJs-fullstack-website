import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import React, { useState } from "react";

const EditSkillsModal = ({ hideModal, skills, onSave }) => {
  const [newSkill, setNewSkill] = useState("");
  const [editedSkills, setEditedSkills] = useState([...skills]);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setEditedSkills([...editedSkills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = editedSkills.filter(
      (skill) => skill !== skillToRemove
    );
    setEditedSkills(updatedSkills);
  };

  const handleSaveClick = () => {
    onSave(editedSkills);
    hideModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Skills</h2>

        <div className="mb-4 max-h-48 overflow-auto">
          {editedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded mt-2"
            >
              <span>{skill}</span>
              <button
                className="text-red-500"
                onClick={() => handleRemoveSkill(skill)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.293 10l3.646 3.646a1 1 0 11-1.414 1.414L10.293 11l-3.647 3.646a1 1 0 11-1.414-1.414L8.566 10 4.92 6.354a1 1 0 111.414-1.414L10.293 8l3.646-3.646a1 1 0 111.414 1.414L12.566 10l3.647 3.646a1 1 0 01-1.414 1.414L10.293 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Add new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddSkill}
          >
            Add Skill
          </button>
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button className="px-4 py-2 border rounded" onClick={hideModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Skills = ({ user, setUser }) => {
//   const skills = ["NodeJs", "Typescript"];
  const [showModal, setShowModal] = useState(false);

  const onSave = async (updatedSkills) => {
    const updatedUser = { ...user, skills: updatedSkills };
    console.log(user?.skills, updatedSkills);
    const res = await axios.post("/api/updateUserData", updatedUser);
    setUser(updatedUser);
    setShowModal(false);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button
          onClick={() => setShowModal(true)}
          className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
        >
        <FaPencilAlt />
          
        </button>
      </div>
      <ul className="list-disc ml-6 text-sm">
        {user?.skills?.map((skill, index) => (
          <li key={index} className="text-gray-600">
            {skill}
          </li>
        ))}
      </ul>
      {showModal && (
        <EditSkillsModal
          hideModal={() => setShowModal(false)}
          skills={user?.skills}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default Skills;
