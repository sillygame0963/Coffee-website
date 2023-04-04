import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useScrollPosition from "../../SettingsPage/useScrollPosition";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
export default function Contact() {
  // NAVBAR
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
                <a href="/Contact" className="text-gray-900">
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

      {/* CONTACT */}

      <div className="wrap flex flex-col justify-center items-center bg-gray-100 h-[563px] mb-[10px]">
        <div className="pt-[100px] pb-[110px]">
          <div className="text-[36px] mb-[15px]">Let's Connect</div>
          <div className="text-gray-400 mb-[15px] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Suspendisse varius enim in eros elementum tristique.
          </div>
        </div>

        <div className="ts-subheadline">
          <div className="ts-decor"></div>
          <div className="ts-content">OUR OFFICES</div>
          <div className="ts-decor"></div>
        </div>
      </div>

      <div className="feature-post w-95% xl:w-[65%] mx-auto mt-[-60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* #1 */}
          <div className="ts-end-img">
            <div className="h-[300px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg')] bg-no-repeat bg-cover bg-center"></div>
            <div className="text-center my-8">
              <div className="">UNITED KINGDOM</div>
              <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                Canary Wharf, London
              </div>

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
            <div className="h-[300px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a481bece02f_Blog%20Pic%20Head%201.jpg')] bg-no-repeat bg-cover bg-center"></div>

            <div className="text-center my-8">
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

      {/* CONTACT FORM */}

      <div className="flex justify-center items-center mb-10 drop-shadow-xl mt-20">
        <form
          action="/"
          className="w-full md:w-auto border border-gray-200 p-6 bg-white lg:flex lg:flex-row flex-col lg:basis-3/2 mt-10 rounded-lg"
        >
          <div className="lg:text-left mt-5 lg:mt-10 lg:ml-10">
            <div className="text-gray-500">Contact form</div>
            <div className="mt-5 text-[18px]">
              Drop us your message and I'll get back to you as soon as possible.
            </div>
            <div className="mt-10 lg:mt-5 text-gray-600">Name</div>
            <div className="Name mt-5 lg:mt-2">
              <input
                placeholder="Thai Son"
                type="text"
                className="px-6 py-4 mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900 hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>
            <div className="mt-10 lg:mt-5 text-gray-600">Email Address</div>
            <div className="email mt-5 lg:mt-2">
              <input
                placeholder="sonnt03@gmail.com"
                type="text"
                className="px-6 py-4 mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900  hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>
            <div className="mt-10 lg:mt-5 text-gray-600">Your message</div>
            <div className="message mt-5 lg:mt-2">
              <textarea
                placeholder="Hi! I would like to ask  something about mug."
                className="px-6 py-4 mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900 hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>
            <div className="button mt-10 lg:mt-5">
              <button
                type="submit"
                className="mx-auto md:mx-0 w-max mt-[10px] md:mt-0 ts-button bg-black text-white hover:drop-shadow-md"
              >
                Send message
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mx-20 w-0.5 right-[500px] lg:right-0 h-[500px] bg-gray-200 lg:rotate-0 rotate-90"></div>
          </div>

          <div className="lg:text-left lg:mt-10">
            <div className="lg:mr-20 lg:-ml-10 -mt-24 lg:mt-0">
              <div className="text-gray-500">Contact form</div>
              <ul>
                <li className="mt-[18px] text-[18px]">CoffeeStyle. Inc</li>
                <li className="mt-5 text-[16px] text-gray-400">Pride Ave,</li>
                <li className="mt-2 text-[16px] text-gray-400">
                  Hamlyn Heights
                </li>
                <li className="mt-2 text-[16px] text-gray-400">VIC 3215</li>
                <li className="mt-2 text-[16px] text-gray-400">Australia</li>
                <li className="mt-10 uppercase text-[12px] text-gray-400">
                  call us
                </li>
                <li className="mt-2 hover:text-coffee-400 duration-400 cursor-pointer">
                  +1 (415) 555-1212
                </li>
                <li className="mt-10 uppercase text-[12px] text-gray-400">
                  email us
                </li>
                <li className="mt-2 hover:text-coffee-400 duration-400 cursor-pointer">
                  us@coffeestyle.io
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>

      <div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
