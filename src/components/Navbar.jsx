import React from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      <li>
        <NavLink to="/resume">RESUME</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">CONTACTS</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar border-2 rounded-2xl mt-5 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-12" src="/favIconPortfollio.png" alt="" />
            <p className="text-md">JOSIM</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[#ff014f] ">Resume</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
