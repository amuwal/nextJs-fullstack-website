import React, { useState } from 'react';

const profileUrl = "https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg"

const NotificationIcon = () => {
    return (
      <button className="mr-4 relative">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png"
          alt="Notification"
          className="h-10 w-10 text-gray-600"
        />
        {/* <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span> */}
      </button>
    );
  };
  

const UserDropdown = ({ username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <img
          src={profileUrl}
          alt="Profile"
          className="w-10 h-10 rounded-lg"
        />
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
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md">
          <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ username }) => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <NotificationIcon />
        <UserDropdown username={username} profileUrl={profileUrl} />
      </div>
    </nav>
  );
};

export default Navbar;
