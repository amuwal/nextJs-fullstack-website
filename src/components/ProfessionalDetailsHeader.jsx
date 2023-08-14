import React from 'react';

const ProfessionalDetailsHeader = () => {
  const professionalDetailsIconUrl =
    'https://img.freepik.com/free-vector/cool-astronaut-with-baseball-bat-jacket-cartoon-vector-icon-illustration-science-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3320.jpg?w=740&t=st=1691983635~exp=1691984235~hmac=48c031f7787a20619c7e2aa3ba9c0492b1a88dca02b78376a1297108574a7ac6'; // Replace with the actual image URL

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4 flex items-center space-x-4">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">Professional Details</h2>
        <p className="text-gray-600">
          These are the details that will be shown to the users in the app.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={professionalDetailsIconUrl}
          alt="Professional Details Icon"
          className="w-16 h-16"
        />
      </div>
    </div>
  );
};

export default ProfessionalDetailsHeader;
