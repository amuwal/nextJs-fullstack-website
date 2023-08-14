import React, { useState } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Default: 'profile'

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <aside className="bg-white text-gray-800 w-64 p-4 shadow flex flex-col">
      <nav>
        <ul>
          <li className="mb-4">
            <button
              className={`flex items-center ${
                activeSection === 'profile' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => handleSectionClick('profile')}
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`flex items-center ${
                activeSection === 'connections' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => handleSectionClick('connections')}
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Connections
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex-grow"></div>
      <button
        className="block w-full text-center text-gray-600 hover:text-gray-900 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
