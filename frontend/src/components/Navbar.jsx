import React, { useState } from 'react';
import logo from "../assets/logo.png";
import github from "../assets/github.svg";
import { useNavigate } from 'react-router-dom';

const Navbar = ({isAuthenticated, setIsAuthenticated}) => {
  
  const navigate= useNavigate()

  const handleSignOut = () => {
    console.log("clicks");
    localStorage.removeItem('token')
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <nav className="flex items-center justify-between h-16 px-4">
      <div className="logo cursor-pointer flex items-center gap-1">
        <img className="h-12 w-12" src={logo} alt="logo" />
        <span className="cmpname text-xl sm:text-2xl font-extrabold text-[#ebb70e]">Key</span>
        <span className="cmpname text-xl sm:text-2xl font-extrabold text-[#eb0e0edd]">Chroma</span>
      </div>

      <ul className="flex items-center gap-6">

        {/* Sign Up / Sign In / Sign Out Buttons */}
        {!isAuthenticated ? (
          <>
            <li>
              <button
                onClick={() => navigate("/signup")}
                className="navbtn bg-[#ebb70e] text-white px-4 text-xs md:text-base py-2 rounded-lg"
              >
                SignUp
              </button>
            </li>
            <li>
              <button
                onClick={()=> navigate("signin")}
                className="navbtn bg-[#eb0e0edd] text-white text-xs md:text-base px-4 py-2 rounded-lg"
              >
                SignIn
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={()=>handleSignOut()}
              className="navbtn bg-red-500 text-white text-xs md:text-base px-4 py-2 rounded-lg"
            >
              Sign Out
            </button>
          </li>
        )}

        {/* GitHub Link */}
        <li>
          <a href="https://github.com/Rituraj67" target="_blank" rel="noopener noreferrer">
            <img className="invert h-6" src={github} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
