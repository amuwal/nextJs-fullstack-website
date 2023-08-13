
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onregister = async () => {
    try {
        const res = await axios.post("/api/register", user);
        console.log("register success", res);
        router.push("/login")
    } catch (error: any) {
        console.log("register failed", error.message)
    }
  };

  return (
    <div className="text-white bg-slate-800 flex flex-col min-h-screen py-2 justify-center items-center">
      <div>
        <input
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <input
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="text"
          placeholder="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <input
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        onClick={onregister}
        className="p-2 border border-gray-300 rounder-lg mb-4 focus:otuline-none focus:border-gray-600"
      >
        register
      </button>
      <Link href={"/login"}> Visit login page instead </Link>
    </div>
  );
};

export default RegisterPage;
