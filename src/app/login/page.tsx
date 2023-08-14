"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const res = await axios.post("/api/login", user);
      console.log("login success", res);
      router.push("/profile");
    } catch (error: any) {
      console.log("login failed", error.response.data);
    }
  };

  return (
    <div className="text-white bg-slate-800 flex flex-col min-h-screen py-2 justify-center items-center">
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
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounder-lg mb-4 focus:otuline-none focus:border-gray-600"
      >
        Login
      </button>
      <Link href={"/register"}> Register instead </Link>
    </div>
  );
};

export default LoginPage;
