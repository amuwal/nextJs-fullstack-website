import React, { useState } from "react";

const Sidebar = ({ activeSection, setActiveSection, handleLogout }) => {
  //   const [activeSection, setActiveSection] = useState('profile'); // Default: 'profile'

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <aside className="bg-white text-gray-800 w-1/5 p-4 flex flex-col min-h-screen hidden md:flex">
      <nav>
        <ul>
          <li className="mb-12 p-5 pl-10">
            <h1 className="text-lg font-bold">Dashboard</h1>
          </li>
          <li className="mb-4">
            <button
              className={`flex items-center ${
                activeSection === "profile"
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => handleSectionClick("profile")}
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`flex items-center ${
                activeSection === "connections"
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => handleSectionClick("connections")}
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Connections
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex-grow"></div>
      <button
        className="block w-full text-center text-gray-600 hover:text-gray-900 py-2 mb-5"
        onClick={handleLogout}
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
