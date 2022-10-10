import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const iconClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-orange-300">
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
        <div className="flex justify-start">
          <h1 className="mx-2">Kowcher</h1>
        </div>
        <div className=" ">
          <ul
            className={`md:flex justify-around md:static absolute ${
              open
                ? "top-12 bg-orange-300 w-full absolute left-0 pb-3"
                : "top-[-120px]"
            }`}
          >
            
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/statics'>Statics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
