"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function profilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      console.log("User logged out successfully");
      router.push("/login");
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
