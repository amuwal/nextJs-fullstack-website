import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";

const ConnectionsSection = ({ user, setUser }) => {
  const [connections, setConnetions] = useState([]);
  const [suggestedConnections, setSuggestedConnections] = useState([]);

  const initializeConnections = async () => {
    try {
      // Clear suggestion if not gets clearned authomatically

      // handle suggested connections
      const res = await axios.get("/api/getSuggestedUsers");
      const suggested = res.data.suggestions;
      setSuggestedConnections(suggested);

      // handle suggestions
      const newConnections = [];
      for (let i = 0; i < user?.connections.length; i++) {
        const email = user.connections[i];
        const connectedUser = await axios.post("/api/getUserInfoByEmail", {
          email: email,
        });
        newConnections.push(connectedUser.data.user)
      }
      setConnetions(newConnections)
      console.log(newConnections)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    initializeConnections();
  }, [user]);

  const handleOnClick = async (index, sourceSection) => {
    // Let's make this concise later
    if (sourceSection === "connections") {
      const newConnections = connections.filter((_, i) => i !== index);
      const newConnectionIds = [];
      newConnections.forEach((con) => newConnectionIds.push(con.email));
      const updatedUser = { ...user, connections: newConnectionIds };
      const res = await axios.post("/api/updateUserData", updatedUser);
      setUser(updatedUser);
    } else if (sourceSection === "suggestedConnections") {
      const suggestedConnectionToMove = suggestedConnections[index];
      const newConnections = [...connections, suggestedConnectionToMove];
      const newConnectionIds = [];
      newConnections.forEach((con) => newConnectionIds.push(con.email));
      const updatedUser = { ...user, connections: newConnectionIds };
      const res = await axios.post("/api/updateUserData", updatedUser);
      setUser(updatedUser);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md flex flex-grow flex-col bg-gray  z-0 overflow-auto">
      <div className="mb-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md font-semibold shadow-md">
        Your Connections
      </div>
      <div className="m-4 flex flex-wrap">
        {!connections || connections.length === 0 ? (
          <p className="text-gray-600">You have no connections yet.</p>
        ) : (
          connections?.map((connection, index) => (
            <UserCard
              key={index}
              name={connection?.username}
              occupation={connection?.occupation || "Student"}
              handleOnClick={() => handleOnClick(index, "connections")}
              buttonText={"Remove Connection"}
              color={"red"}
            />
          ))
        )}
      </div>

      <h2 className="text-lg font-semibold mb-2">Suggested Connections</h2>
      <div className="m-6 flex flex-wrap">
        {!suggestedConnections || suggestedConnections.length === 0 ? (
          <p className="text-gray-600">
            No suggested connections at the moment.
          </p>
        ) : (
          suggestedConnections.map((suggestedConnection, index) => (
            <UserCard
              key={index}
              name={suggestedConnection.username}
              occupation={suggestedConnection.occupation || "Student"}
              handleOnClick={() => handleOnClick(index, "suggestedConnections")}
              buttonText={"Add Connection"}
              color={"blue"}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ConnectionsSection;
