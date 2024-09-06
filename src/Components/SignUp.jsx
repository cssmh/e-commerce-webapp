import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to <br /> Furni<span className="text-blue-500">Flex</span>
        </h1>
        <form className="w-full max-w-md">
          <div className="w-full flex gap-2">
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              I agree to the terms and conditions
            </span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md mb-4">
            Sign Up
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 py-2 rounded-md mb-2 hover:bg-gray-100">
            <FaGoogle className="mr-2" />
            Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100">
            <FaApple className="mr-2" />
            Sign Up with Apple
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 bg-black text-white justify-center items-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Furniflex</h2>
          <p className="text-gray-300">
            Discover a world of unique furniture pieces and home decor at
            Furniflex. Transform your space with style!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
