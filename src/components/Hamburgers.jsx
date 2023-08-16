import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from React Icons

const Hamburger = ({ setActiveSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSectionLocal] = useState('profile');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSectionClick = (section) => {
    setActiveSectionLocal(section);
    setActiveSection(section); // Call the parent component's setActiveSection function
    setShowMenu(false);
  };

  return (
    <div className="md:hidden relative z-10">
      <div className="flex items-center justify-end p-4">
        <FaBars className="text-gray-500 cursor-pointer" onClick={toggleMenu} />
      </div>
      {showMenu && (
        <div className="absolute left-0 top-full bg-white p-4 shadow-md">
          <button
            className={`block mb-2 text-blue-500 ${
              activeSection === 'profile' ? 'font-semibold' : ''
            }`}
            onClick={() => handleSectionClick('profile')}
          >
            Profile
          </button>
          <button
            className={`block text-blue-500 ${
              activeSection === 'connections' ? 'font-semibold' : ''
            }`}
            onClick={() => handleSectionClick('connections')}
          >
            Connections
          </button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
