import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useScrollPosition from "../SettingsPage/useScrollPosition";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div
        className={classNames(
          scrollPosition > 0 ? "shadow" : "shadow-none",
          "sticky top-0 z-20 bg-gray-50 transition-shadow rounded-b-lg",
          "content-wrapper font-Karla h-20 max-w-screen-2xl text-base mx-auto px-8"
        )}
      >
        <header className="py-6 mx-auto">
          <nav className="flex flex-row justify-between items-center">
            <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
              <a href="/" className="">
                CoffeeStyle.
              </a>
            </div>
            <ul
              className={`lg:basis-3/6 lg:flex lg:items-center lg:justify-end gap-8 uppercase text-sm text-gray-500 font-medium ${
                toggle ? "" : "hidden"
              }`}
            >
              <li className="top-menu-item">
                <a href="/" className="text-gray-900">
                  Home
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Product" className="">
                  Products
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Blog" className="">
                  Blog
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/About" className="">
                  About
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Contact" className="">
                  Contact
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Signin" className="">
                  Sign in
                </a>
              </li>
              {/* <li className="top-menu-item top-menu-item-active">
                <a
                  href="https://nguyenthaison.com"
                  target="-blank"
                  className=""
                >
                  Son'coffee
                </a>
              </li> */}
            </ul>

            <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
              <li className="top-menu-item">
                <a href="/" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ts-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="mx-2">Cart</span>
                  <span className="ts-amount bg-black text-white">0</span>
                </a>
              </li>
            </ul>

            <div
              className="lg:hidden basis-1/6 flex items-center cursor-pointer px-3 sm:px-8"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ts-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
