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

  const [invalidInputs, setInvalidInputs] = useState({
    email: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setInvalidInputs({ ...invalidInputs, [name]: false });
    setErrorMessage("");
  };

  const handleLogin = async (dummy: any = false) => {
    let areInputsValid = true;

    if (user.email.trim() === "") {
      areInputsValid = false;
      setInvalidInputs({ ...invalidInputs, email: true });
    }

    if (user.password.trim() === "") {
      areInputsValid = false;
      setInvalidInputs({ ...invalidInputs, password: true });
    }

    if (dummy || areInputsValid ) {
      try {
        const creds = dummy
          ? { email: "jhon@gmail.com", password: "jhon" }
          : user;
        const res = await axios.post("/api/login", creds);
        console.log("login success", res);
        setErrorMessage("Redirecting..");
        router.push("/profile");
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
      }
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleDummyUserLogin = () => {
    handleLogin(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className={`w-full p-2 mb-4 rounded-md ${
            invalidInputs.email ? "border-red-500" : "border-gray-700"
          } focus:border-blue-500 focus:ring focus:ring-blue-200 text-white bg-gray-700`}
          placeholder="Email"
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          className={`w-full p-2 mb-4 rounded-md ${
            invalidInputs.password ? "border-red-500" : "border-gray-700"
          } focus:border-blue-500 focus:ring focus:ring-blue-200 text-white bg-gray-700`}
          placeholder="Password"
          required
        />
        <button
          className="w-full mb-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          onClick={handleDummyUserLogin}
        >
          Login as Dummy User
        </button>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          onClick={handleLogin}
        >
          Login
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <p className="text-sm text-gray-300 mt-2">
          Dont have an account?{" "}
          <Link className="text-blue-500 hover:underline" href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
