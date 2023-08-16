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

  const [errorMessage, setErrorMessage] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    email: false,
    username: false,
    password: false,
  });


  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrorMessage("");
  };

  const handleRegister = async () => {
    let areInputsValid = true;
    const inputValidity = { email: false, password: false, username: false };

    if (user.username.trim() === "") {
      areInputsValid = false;
      inputValidity.username = true;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      areInputsValid = false;
      inputValidity.email = true;
    }

    if (user.password.trim() === "") {
      areInputsValid = false;
      inputValidity.password = true;
    }

    setInvalidInputs(inputValidity);
    if (areInputsValid) {
      try {
        const res = await axios.post("/api/register", user);
        console.log("register success", res);
        router.push("/login");
      } catch (error: any) {
        // console.log(error.response.data.error);
        setErrorMessage(error.response.data.error || "Something went wrong");
      }
    } else {
      setErrorMessage("Invalid input. Please check your information.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Register
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          className={`w-full border border-2 px-4 py-2 mb-2 bg-gray-700 text-white rounded focus:outline-none ${
            invalidInputs.email ? "border-red-500" : "border-gray-500"
          }`}
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`w-full border border-2 px-4 py-2 mb-2 bg-gray-700 text-white rounded focus:outline-none ${
            invalidInputs.username ? "border-red-500" : "border-gray-500"
          }`}
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`w-full border border-2 px-4 py-2 mb-4 bg-gray-700 text-white rounded focus:outline-none ${
            invalidInputs.password ? "border-red-500" : "border-gray-500"
          }`}
          value={user.password}
          onChange={handleInputChange}
        />
        {errorMessage && <p className="mb-2 text-red-500">{errorMessage}</p>}
        <button
          className={`w-full py-2 text-white ${"bg-blue-400 hover:bg-blue-500"} rounded focus:outline-none`}
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link className="text-blue-400 hover:underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
