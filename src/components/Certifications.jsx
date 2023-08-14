import React from "react";

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

const Certifications = () => {
  const certifications = [
    { courseName: "Python", organization: "Coding Ninjas" },
    { courseName: "Nextjs", organization: "Udemy"}
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
          Edit
        </button>
      </div>
      <div>
        {certifications.map((cert, index) => (
          <Certificate
            key={index}
            courseName={cert.courseName}
            organization={cert.organization}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
