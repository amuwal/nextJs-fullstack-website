"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Connections from "@/components/Connections";

// components
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
import { setuid } from "process";
import { connections } from "mongoose";

const Profile = (props: any) => {
  const { user, setUser } = props;
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <ProfileImage />
        <BasicInfo user={user} setUser={setUser} />
        <AboutUser user={user} setUser={setUser} />
        <Skills user={user} setUser={setUser} />
      </div>
      <div>
        <ProfessionalDetailsHeader />
        <Certifications user={user} setUser={setUser} />
        <ExperienceComponent user={user} setUser={setUser} />
        <EducationComponent user={user} setUser={setUser} />
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("profile");

  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      console.log("User logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const [user, setUser] = useState({ username: "" });

  const setUserData = async () => {
    try {
      const data = await axios.get("/api/userData");
      console.log("hello", data);
      setUser(data.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //   if (!user) setUserData();
  useEffect(() => {
    setUserData();
  }, []);

  return (
    <div className="min-h-screen text-black flex">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex flex-col flex-grow">
        <Navbar
          setActiveSection={setActiveSection}
          username={user.username}
          handleLogout={handleLogout}
        />
        {activeSection === "profile" ? (
          <Profile user={user} setUser={setUser} />
        ) : (
          <Connections user={user} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
