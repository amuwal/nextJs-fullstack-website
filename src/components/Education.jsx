import React from "react";

// Helper component for displaying each education item
const EducationItem = ({ education }) => {
  const { institute, start, end, course, details } = education;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">{institute}</h2>
      <div className="flex items-center mb-2">
        <p className="text-gray-600">
          {start}-{end}
        </p>
        <p className="text-gray-600 mx-2">•</p>
        <p className="text-gray-600">{course}</p>
      </div>
      <p className="text-gray-600">{details}</p>
    </div>
  );
};

const EducationComponent = () => {
  const educations = [
    {
      institute: "IIT HYDERABAD",
      start: 2010,
      end: 2014,
      course: "Btech",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facilis omnis. Doloremque  rem. At a vero tempore labore provident!",
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
          Edit
        </button>
      </div>
      <div>
        {educations.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationComponent;
