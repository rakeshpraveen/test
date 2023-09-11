import React from "react";
import postal from "../assets/indiapost.png"

export default function Navigation() {
  const fname ="Rakesh";
  const lname = "Praveen";
  return (
    <>
      <div className="m-6">
        {/* <h1>Navigation</h1> */}
       
        <nav className="flex space-x-3 bg-red-600 justify-end p-3 rounded-lg text-amber-50 font-bold text-xl">
        <img src={postal} className="h-6 rounded-full"></img>
        <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>

        </nav>
        <h1>{`My Name is ${fname} ${lname}`}</h1>
      </div>
    </>
  );
}
