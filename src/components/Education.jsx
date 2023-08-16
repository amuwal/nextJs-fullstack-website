import updateUser from "@/helpers/updateUser";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const EditEducationModal = ({ hideModal, educationData, onSave }) => {
  const [editedEducations, setEditedEducations] = useState([...educationData]);
  const [newEducation, setNewEducation] = useState({
    institute: "",
    start: "",
    end: "",
    course: "",
    details: "",
  });
  const [validationError, setValidationError] = useState(false);

  const handleSaveClick = () => {
    onSave(editedEducations);
    hideModal();
  };

  const handleAddEducation = () => {
    if (
      newEducation.institute.trim() !== "" &&
      newEducation.start.trim() !== "" &&
      newEducation.end.trim() !== "" &&
      newEducation.course.trim() !== "" &&
      newEducation.details.trim() !== ""
    ) {
      setValidationError(false);
      setEditedEducations([...editedEducations, newEducation]);
      setNewEducation({
        institute: "",
        start: "",
        end: "",
        course: "",
        details: "",
      });
    } else {
      setValidationError(true);
    }
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = editedEducations.filter((_, i) => i !== index);
    setEditedEducations(updatedEducations);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md w-96  max-h-[70vh] overflow-y-auto w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Education</h2>
        <div className=" max-h-[25vh] overflow-y-auto">
          {editedEducations.map((education, index) => (
            <div
              key={index}
              className="mb-4 flex align-center justify-between items-center"
            >
              <div className="flex flex-col">
                <p className="text-sm font-semibold mb-1">
                  {education.institute}
                </p>
                <p className="text-sm">
                  {education.start} - {education.end}
                </p>
                <p className="text-sm">{education.course}</p>
                <p className="text-sm">{education.details}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveEducation(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="border p-4 rounded]">
          <input
            type="text"
            placeholder="Institute"
            value={newEducation.institute}
            onChange={(e) =>
              setNewEducation({ ...newEducation, institute: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newEducation.institute.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="number"
            placeholder="Start Year"
            value={newEducation.start}
            onChange={(e) =>
              setNewEducation({ ...newEducation, start: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newEducation.start.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="number"
            placeholder="End Year"
            value={newEducation.end}
            onChange={(e) =>
              setNewEducation({ ...newEducation, end: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newEducation.end.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <input
            type="text"
            placeholder="Course"
            value={newEducation.course}
            onChange={(e) =>
              setNewEducation({ ...newEducation, course: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newEducation.course.trim()
                ? "border-red-500"
                : ""
            }`}
          />

          <textarea
            placeholder="Details"
            value={newEducation.details}
            onChange={(e) =>
              setNewEducation({ ...newEducation, details: e.target.value })
            }
            className={`border rounded p-2 w-full mb-2 ${
              validationError && !newEducation.details.trim()
                ? "border-red-500"
                : ""
            }`}
            rows={4}
          />

          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddEducation}
          >
            Add Education
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

// Helper component for displaying each education item
const EducationItem = ({ education }) => {
  const { institute, start, end, course, details } = education;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{institute}</h2>
      <div className="flex items-center mb-2">
        <p className="text-gray-600 text-sm">
          {start}-{end}
        </p>
        <p className="text-gray-600 text-sm mx-2">•</p>
        <p className="text-gray-600 text-sm">{course}</p>
      </div>
      <p className="text-gray-600 text-sm">{details}</p>
    </div>
  );
};

const EducationComponent = ({ user, setUser }) => {
  const [showModal, setShowModal] = useState(false);

  const onSave = async (newEducations) => {
    const updatedUser = { ...user, education: newEducations };
    const res = await updateUser(updatedUser);
    setUser(updatedUser);
  };
  const educations = user?.education;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          onClick={() => setShowModal(true)}
          className="hover:bg-blue-600 hover:text-white text-black p-2 rounded "
        >
          <FaPencilAlt />
        </button>
      </div>
      <div>
        {educations?.length
          ? educations.map((edu, index) => (
              <EducationItem key={index} education={edu} />
            ))
          : "lol he is illiterate"}
      </div>
      {showModal && (
        <EditEducationModal
          hideModal={() => setShowModal(false)}
          educationData={educations}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default EducationComponent;
