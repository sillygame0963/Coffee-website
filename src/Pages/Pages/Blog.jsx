import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useScrollPosition from "../../SettingsPage/useScrollPosition";

import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

function Blog() {
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
      {/* NAVBAR */}
      <div
        className={classNames(
          scrollPosition > 0 ? "shadow" : "shadow-none",
          "sticky -top-1 z-20 bg-gray-50 transition-shadow rounded-b-lg",
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
                <a href="/" className="">
                  Home
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Product" className="">
                  Products
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/Blog" className="text-gray-900">
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

      {/* BLOG */}
      <div className="wrap flex flex-col justify-center items-center bg-gray-100 h-[563px] mb-[10px]">
        <div className="pt-[100px] pb-[110px]">
          <div className="text-[36px] mb-[15px]">
            Read coffee stories on our Blog
          </div>
          <div className="text-gray-400 mb-[15px] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Suspendisse varius enim in eros elementum tristique.
          </div>
        </div>

        <div className="ts-subheadline">
          <div className="ts-decor"></div>
          <div className="ts-content">Feature Posts</div>
          <div className="ts-decor"></div>
        </div>
      </div>
      <div className="feature-post w-[95%] xl:w-[65%] mx-auto mt-[-60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* #1 */}
          <div className="ts-end-img">
            <div className="h-[300px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    READ THE FULL STORY
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center lg:text-left my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                  Health Check: why do I get a headache when I haven't had my
                  <br /> coffee?
                </div>
              </a>
              <div className="ts-para">
                <span className="text-[16px] text-gray-500 mb-3">
                  It is a paradisematic country, in which
                  <br /> roasted parts of sentences fly into your
                  <br /> mouth.
                </span>
                <br />
                <br />
                <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                  OCTOBER 9, 2018
                </span>
              </div>
            </div>
          </div>

          {/* #2 */}
          <div className="ts-end-img ">
            <div className="h-[300px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a481bece02f_Blog%20Pic%20Head%201.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    READ THE FULL STORY
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center lg:text-left my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  How long does a cup of coffee keep you awake?
                </div>
              </a>
              <div className="ts-para">
                <span className="text-[16px] text-gray-500 mr-[10px]">
                  It is a paradisematic country, in which roasted parts. Vel qui
                  et ad voluptatem.
                </span>
                <br />
                <br />
                <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                  OCTOBER 9, 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOG FEEDS */}
      <div className="wrap lg:flex lg:flex-col justify-center items-center mt-[50px] mb-[10px]">
        <div className="w-[80%] md:w-[%] mx-auto">
          <div className="lg:flex lg:flex-row flex-col">
            <div className="lg:basis-2/3 text-center">
              <div className="text-coffee-900 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-gray-100 hover:after:bg-coffee-200 after:h-0.5 after:w-full lg:after:w-[90%] after:transition-all after:ease-in-out after:duration-400">
                <div className="mb-[30px] md:mb-0 text-[22px] md:text-left text-center">
                  Latest Post
                </div>
              </div>
              {/* IMAGE #1 */}
              <div className="ts-end-img md:flex md:flex-row justify-center items-center lg:-ml-[66px]">
                <div className="h-[210px] lg:w-[339px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg')] bg-no-repeat bg-cover">
                  <a href="/" alt="">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                      <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                        READ THE FULL STORY
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center md:text-left my-8 mx-5">
                  <a href="/">
                    <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                      Health Check: why do I get a headache when I haven't had
                      my
                      <br /> coffee?
                    </div>
                  </a>
                  <div className="ts-para">
                    <span className="text-[16px] text-gray-500 mb-3">
                      It is a paradisematic country, in which
                      <br /> roasted parts of sentences fly into your
                      <br /> mouth.
                    </span>
                    <br />
                    <br />
                    <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                      OCTOBER 9, 2018
                    </span>
                  </div>
                </div>
              </div>
              {/* IMAGE #2 */}
              <div className="ts-end-img md:flex md:flex-row justify-center items-center lg:-ml-[66px]">
                <div className="h-[210px] lg:w-[339px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a3042ece037_Blog%20Pic%20Head%207.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="/" alt="">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                      <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                        READ THE FULL STORY
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center md:text-left my-8 mx-5">
                  <a href="/">
                    <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                      Health Check: why do I get a headache when I haven't had
                      my
                      <br /> coffee?
                    </div>
                  </a>
                  <div className="ts-para">
                    <span className="text-[16px] text-gray-500 mb-3">
                      It is a paradisematic country, in which
                      <br /> roasted parts of sentences fly into your
                      <br /> mouth.
                    </span>
                    <br />
                    <br />
                    <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                      OCTOBER 9, 2018
                    </span>
                  </div>
                </div>
              </div>
              {/* IMAGE #3 */}
              <div className="ts-end-img md:flex md:flex-row justify-center items-center lg:-ml-[66px]">
                <div className="h-[210px] lg:w-[339px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="/" alt="">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                      <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                        READ THE FULL STORY
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center md:text-left my-8 mx-5">
                  <a href="/">
                    <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                      Health Check: why do I get a headache when I haven't had
                      my
                      <br /> coffee?
                    </div>
                  </a>
                  <div className="ts-para">
                    <span className="text-[16px] text-gray-500 mb-3">
                      It is a paradisematic country, in which
                      <br /> roasted parts of sentences fly into your
                      <br /> mouth.
                    </span>
                    <br />
                    <br />
                    <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                      OCTOBER 9, 2018
                    </span>
                  </div>
                </div>
              </div>
              {/* IMAGE #4 */}
              <div className="ts-end-img md:flex md:flex-row justify-center items-center lg:-ml-[66px]">
                <div className="h-[210px] lg:w-[339px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="/" alt="">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                      <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                        READ THE FULL STORY
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center md:text-left my-8 mx-5">
                  <a href="/">
                    <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                      Health Check: why do I get a headache when I haven't had
                      my
                      <br /> coffee?
                    </div>
                  </a>
                  <div className="ts-para">
                    <span className="text-[16px] text-gray-500 mb-3">
                      It is a paradisematic country, in which
                      <br /> roasted parts of sentences fly into your
                      <br /> mouth.
                    </span>
                    <br />
                    <br />
                    <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                      OCTOBER 9, 2018
                    </span>
                  </div>
                </div>
              </div>
              {/* IMAGE #5 */}
              <div className="ts-end-img md:flex md:flex-row justify-center items-center lg:-ml-[66px]">
                <div className="h-[210px] lg:w-[339px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="/" alt="">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                      <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                        READ THE FULL STORY
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center md:text-left my-8 mx-5">
                  <a href="/">
                    <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                      Health Check: why do I get a headache when I haven't had
                      my
                      <br /> coffee?
                    </div>
                  </a>
                  <div className="ts-para">
                    <span className="text-[16px] text-gray-500 mb-3">
                      It is a paradisematic country, in which
                      <br /> roasted parts of sentences fly into your
                      <br /> mouth.
                    </span>
                    <br />
                    <br />
                    <span className="text-[12px] text-gray-400 tracking-widest font-semibold leading 7">
                      OCTOBER 9, 2018
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div className="basis-1/3 text-center md:text-left">
              <div className="text-gray-900 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-gray-100 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 mt-10">
                <div className="text-[22px]">About us</div>
              </div>

              <div className="ts-post md:text-left mt-[35px]">
                <div className="logo text-xl font-semibold cursor-pointer">
                  CoffeeStyle.
                </div>
                <div className="text-[16px] lg:mt-[10px] lg:mb-[15px] lg:tracking-widest text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
                <div className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 lg:after:w-[43%] after:transition-all after:ease-in-out after:duration-400 mt-5 lg:mt-0">
                  <a href="/">Read the full Story</a>
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="text-gray-900 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-gray-100 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 mt-[55px]">
                <div className="text-[22px]">Categories</div>
              </div>

              <div className="my-10">
                <ul className="">
                  <li className="text-gray-500 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800">
                    <a href="/">Barista</a>
                  </li>
                  <li className="text-gray-500 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 mt-5 w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800">
                    {" "}
                    <a href="/">Coffee</a>
                  </li>
                  <li className="text-gray-500 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 mt-5 w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800">
                    {" "}
                    <a href="/">Lifestyle</a>
                  </li>
                  <li className="text-gray-500 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400 mt-5 w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800">
                    {" "}
                    <a href="/">Mugs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBSCRIBE FORM */}
      <Subscribe />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Blog;
