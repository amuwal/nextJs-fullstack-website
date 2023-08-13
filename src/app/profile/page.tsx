"use client";
import React from "react";
import axios from "axios";

export default function profilePage() {

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      console.log("User logged out successfully");
      window.location.href = "/login";
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
