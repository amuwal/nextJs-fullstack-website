import updateUser from "@/helpers/updateUser";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const EditExperienceModal = ({ hideModal, experiences, onSave }) => {
  const [editedExperiences, setEditedExperiences] = useState([...experiences]);
  const [newExperience, setNewExperience] = useState({
    start: "",
    end: "",
    role: "",
    organization: "",
    jobTitle: "",
  });
  const [validationError, setValidationError] = useState(false);

  const handleSaveClick = () => {
    onSave(editedExperiences);
    hideModal();
  };

  const handleAddExperience = () => {
    if (
      newExperience.start.trim() !== "" &&
      newExperience.end.trim() !== "" &&
      newExperience.role.trim() !== "" &&
      newExperience.organization.trim() !== "" &&
      newExperience.jobTitle.trim() !== ""
    ) {
      setValidationError(false);
      setEditedExperiences([...editedExperiences, newExperience]);
      setNewExperience({
        start: "",
        end: "",
        role: "",
        organization: "",
        jobTitle: "",
      });
    } else {
      setValidationError(true);
    }
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = editedExperiences.filter((_, i) => i !== index);
    setEditedExperiences(updatedExperiences);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900 ">
      <div className="bg-white p-6 rounded-md shadow-md max-h-[70vh] overflow-y-auto w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Experience</h2>

        {editedExperiences.map((experience, index) => (
          <div key={index} className="mb-4 flex align-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-semibold mb-1">
                {experience.start} - {experience.end}
              </p>
              <p className="text-sm">{experience.role}</p>
              <p className="text-sm">{experience.organization}</p>
              <p className="text-sm">{experience.jobTitle}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemoveExperience(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="border p-4 rounded">
          <input
            type="number"
            placeholder="Start Year"
            value={newExperience.start}
            onChange={(e) =>
              setNewExperience({ ...newExperience, start: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newExperience.start.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="number"
            placeholder="End Year"
            value={newExperience.end}
            onChange={(e) =>
              setNewExperience({ ...newExperience, end: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newExperience.end.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="text"
            placeholder="Role"
            value={newExperience.role}
            onChange={(e) =>
              setNewExperience({ ...newExperience, role: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newExperience.role.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="text"
            placeholder="Organization"
            value={newExperience.organization}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                organization: e.target.value,
              })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newExperience.organization.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="text"
            placeholder="Job Title"
            value={newExperience.jobTitle}
            onChange={(e) =>
              setNewExperience({ ...newExperience, jobTitle: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newExperience.jobTitle.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddExperience}
          >
            Add Experience
          </button>
        </div>

        <div className="flex justify-end mt-4">
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

const iconUrl = "https://cdn-icons-png.flaticon.com/512/1285/1285797.png";

// Helper component for displaying each experience item
const ExperienceItem = ({ experience }) => {
  const { start, end, role, jobTitle, organization } = experience;

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3 flex-grow">
        <img src={iconUrl} alt="Experience Icon" className="w-10 h-10" />
        <div>
          <p className="text-md font-semibold">
            {start}-{end}
          </p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex-grow text-right text-sm">
        <p className="text-gray-600">{organization}</p>
        <p className="text-gray-600">{jobTitle}</p>
      </div>
    </div>
  );
};

const ExperienceComponent = ({ user, setUser }) => {
  const [modalActive, setModalActive] = useState(false);

  const onSave = async (newExperiences) => {
    console.log(newExperiences);
    const updatedUser = { ...user, experience: newExperiences };
    const res = await updateUser(updatedUser);
    setUser(updatedUser);
  };
  const experiences = user?.experience;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <button
          onClick={() => setModalActive(true)}
          className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
        >
          <FaPencilAlt />
        </button>
      </div>
      <div>
        {experiences?.length
          ? experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))
          : "This guy got not experience lol (jk)"}
      </div>
      {modalActive && (
        <EditExperienceModal
          hideModal={() => setModalActive(false)}
          experiences={experiences}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default ExperienceComponent;
