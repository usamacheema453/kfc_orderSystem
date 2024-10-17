import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState('+92');

  const handleInputChange = (e) => {
    if (e.target.value.startsWith('+92')) {
      setPhoneNo(e.target.value);
    }
  };

  return (
    <>
      <Navbar />
      {/* Make the container relative to allow absolute positioning inside */}
      <div className="bg-[#1C1816] w-2/3 mx-auto mt-40 mb-20 flex justify-center items-center rounded-md relative">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          
          {/* Left Section with Icon and Image */}
          <div className="flex justify-center items-center relative">
            <div className="relative">
              {/* Adjust the FaAngleLeft icon inside the container */}
              <FaAngleLeft className="absolute top-4 left-4 text-white border-2 border-red-600 rounded-full p-1 text-2xl hover:bg-red-600 hover:text-white" />
              
              <img
                src="https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif"
                alt="Login Animation"
                className="w-full h-auto" // Adjust size as needed
              />
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="p-8">
            <h1 className="text-2xl font-bold my-6">Welcome!</h1>
            <form>
              <div className="bg-[#333] pt-2 rounded-t-lg">
                <label className="px-4">Phone Number</label>
                <input
                  className="outline-none px-4 bg-[#333] text-white border-b w-full font-bold"
                  value={phoneNo}
                  onChange={handleInputChange}
                  placeholder="Phone"
                />
              </div>
            </form>

            <div className="flex flex-col gap-4 mt-8">
              <div>
                <button className="bg-[#58151c] w-full uppercase font-bold py-2 rounded-md">Login</button>
              </div>
              <div>
                <button className="flex flex-row justify-center items-center bg-red-600 w-full uppercase font-bold py-2 rounded-md">
                  <FaGoogle className="mr-2" /> Login with Google
                </button>
              </div> 
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
