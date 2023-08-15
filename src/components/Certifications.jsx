import updateUser from "@/helpers/updateUser";
import React, { useState } from "react";

const EditCertificationsModal = ({ hideModal, certifications, onSave }) => {
  const [newCertification, setNewCertification] = useState({
    courseName: "",
    organization: "",
  });
  const [editedCertifications, setEditedCertifications] = useState([
    ...certifications,
  ]);
  const [isFieldsEmpty, setIsFieldsEmpty] = useState(false);

  const handleAddCertification = () => {
    if (
      newCertification.courseName.trim() !== "" &&
      newCertification.organization.trim() !== ""
    ) {
      setEditedCertifications([...editedCertifications, newCertification]);
      setNewCertification({ courseName: "", organization: "" });
      setIsFieldsEmpty(false);
    } else {
      setIsFieldsEmpty(true);
    }
  };

  const handleRemoveCertification = (certificationToRemove) => {
    const updatedCertifications = editedCertifications.filter(
      (certification) => certification !== certificationToRemove
    );
    setEditedCertifications(updatedCertifications);
  };

  const handleSaveClick = () => {
    onSave(editedCertifications);
    hideModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Certifications</h2>

        <div className="mb-4 max-h-48 overflow-auto">
          {editedCertifications.map((certification, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded mt-2"
            >
              <div>
                <span className="font-semibold">
                  {certification.courseName}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {certification.organization}
                </span>
              </div>
              <button
                className="text-red-500"
                onClick={() => handleRemoveCertification(certification)}
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
            placeholder="Course Name"
            value={newCertification.courseName}
            onChange={(e) =>
              setNewCertification({
                ...newCertification,
                courseName: e.target.value,
              })
            }
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Organization"
            value={newCertification.organization}
            onChange={(e) =>
              setNewCertification({
                ...newCertification,
                organization: e.target.value,
              })
            }
            className="border rounded p-2 w-full mt-2"
          />
          {isFieldsEmpty && (
            <p className="text-red-500 text-xs mt-1">
              Both fields are required
            </p>
          )}
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddCertification}
          >
            Add Certification
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

// Helper component for displaying each certificate
const Certificate = ({ courseName, organization }) => {
  return (
    <div className="flex items-center space-x-4 mb-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1y3P-NQYh4slt-0oTEzxTh1_cpTernGnIOw&usqp=CAU"
        alt="Certificate Icon"
        className="w-10 h-10"
      />
      <div>
        <p className="text-lg font-semibold">{courseName}</p>
        <p className="text-gray-600">{organization}</p>
      </div>
    </div>
  );
};

const Certifications = ({ user, setUser }) => {
  const certifications = user?.certifications;

  const [modalActive, setModalActive] = useState(false);

  const onSave = async (updatedCertifications) => {
    const updatedUser = { ...user, certifications: updatedCertifications };
    const res = await updateUser(updatedUser);
    setUser(updatedUser);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <button
          onClick={() => setModalActive(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full"
        >
          Edit
        </button>
      </div>
      <div>
        {certifications?.length
          ? certifications.map((cert, index) => (
              <Certificate
                key={index}
                courseName={cert.courseName}
                organization={cert.organization}
              />
            ))
          : "No certifications, Bro is a loser"}
      </div>
      {modalActive && (
        <EditCertificationsModal
          hideModal={() => setModalActive(false)}
          certifications={certifications}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default Certifications;
