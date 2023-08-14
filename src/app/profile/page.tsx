"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProfileImage from "@/components/ProfileImage";
import BasicInfo from "@/components/BasicInfo";
import AboutUser from "@/components/AboutUser";
import Skills from "@/components/Skills";
import ProfessionalDetailsHeader from "@/components/ProfessionalDetailsHeader";
import Certifications from "@/components/Certifications";
import ExperienceComponent from "@/components/Experience";
import EducationComponent from "@/components/Education";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const ProfilePage = () => {
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

  const [user, setUser] = useState();

  const setUserData = async () => {
    try {
      const data = await axios.get("/api/userData");
      console.log("hello", data);
      setUser(data.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (!user) setUserData();

  return (
    <div className="min-h-screen">
      <Navbar username="Jhon" />
      <div className="flex">
        <Sidebar />
        <div className="flex">
          <div>
            <ProfileImage />
            <BasicInfo />
            <AboutUser />
            <Skills />
          </div>
          <div>
            <ProfessionalDetailsHeader />
            <Certifications />
            <ExperienceComponent />
            <EducationComponent />
          </div>
        </div>
      </div>
      <button
        onClick={logout}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
