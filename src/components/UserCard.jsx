import React from 'react';

const UserCard = ({ name, occupation, handleOnClick, buttonText, color }) => {
  const userImageUrl = 'https://cdn.dribbble.com/users/8878746/avatars/normal/ad811060ebacb8ee305d0cd3ac9980e0.png?1629299370';

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex m-2 border aspect-w-4 aspect-h-3">
      <div className="mr-3">
        <h2 className="text-md font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{occupation}</p>
        <button onClick={handleOnClick} className={`text-sm px-4 py-2 bg-blue-500 bg-${color}-500 text-white rounded`}>{buttonText}</button>
      </div>
      <div>
        <img src={userImageUrl} alt="User" className="w-16 h-16 rounded-full" />
      </div>
    </div>
  );
};

export default UserCard;