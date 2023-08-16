import React, { useState } from "react";
import Hamburger from "./Hamburgers";

const profileUrl =
  "https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg";

const NotificationIcon = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative mr-4">
      <button className="text-gray-500" onClick={toggleNotifications}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png"
          alt="Notification"
          className="h-10 w-10 text-gray-600"
        />
      </button>
      {showNotifications && (
        <div className="absolute z-10 left-0 mt-2 bg-white p-4 shadow-md w-56 md:right-0">
          {/* Render your notifications content here */}
          <p className="mb-2 text-gray-600">
            8 people checked your profile today.
          </p>
        </div>
      )}
    </div>
  );
};

const UserDropdown = ({ username, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative z-10 text-right">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img src={profileUrl} alt="Profile" className="w-10 h-10 rounded-lg" />
        <div className="ml-2">
          <p className="text-gray-600">Welcome back</p>
          <p className="text-lg font-semibold">{username}</p>
        </div>
        <svg
          className="ml-2 h-5 w-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md">
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ username, handleLogout, setActiveSection }) => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center pr-10 md:justify-end">
      <Hamburger setActiveSection={setActiveSection} />
      <div className="flex items-center">
        <NotificationIcon />
        <UserDropdown
          username={username}
          handleLogout={handleLogout}
          profileUrl={profileUrl}
        />
      </div>
    </nav>
  );
};

export default Navbar;
