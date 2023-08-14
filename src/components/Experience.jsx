import React from "react";

const iconUrl = "https://cdn-icons-png.flaticon.com/512/1285/1285797.png"

// Helper component for displaying each experience item
const ExperienceItem = ({ experience }) => {
    const { start, end, role, jobTitle, organization } = experience;
  
    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 flex-grow">
          <img
            src={iconUrl}
            alt="Experience Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-lg font-semibold">
              {start}-{end}
            </p>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="flex-grow text-right">
          <p className="text-gray-600">{organization}</p>
          <p className="text-gray-600">{jobTitle}</p>
        </div>
      </div>
    );
  };

const ExperienceComponent = () => {
  const experiences = [
    {
      start: 2014,
      end: 2021,
      role: "Full-time",
      organization: "Oruphones",
      jobTitle: "Full-Stack Developer",
    },
    {
      start: 2014,
      end: 2014,
      role: "Intern",
      organization: "Oruphones",
      jobTitle: "Full-Stack Developer",
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
          Edit
        </button>
      </div>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
