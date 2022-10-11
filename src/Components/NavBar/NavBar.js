import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const iconClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-teal-500">
      <div
        onClick={iconClick}
        className=" md:hidden absolute right-0 mt-5 mr-5"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6  text-blue-500" />
        ) : (
          <Bars3Icon className="h-6 w-6  text-blue-500" />
        )}
      </div>
      <div className="w-full  grid grid-cols-2 p-5  ">
        <div className="flex align-center ">
          <img className="w-7 h-7" src="icons8-quiz-96.png" alt='logo'></img>
          <h1 className="mx-2 mt-1 font-semibold">Phero Quiz</h1>
        </div>
        <div className=" ">
          <ul
            className={`flex justify-around  md:static absolute ${
              open
                ? "top-12 flex flex-col  bg-teal-500 w-full absolute left-0 p-3"
                : "top-[-120px]"
            }`}
          >
            
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/statics'>Statics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
