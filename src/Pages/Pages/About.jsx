import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useScrollPosition from "../../SettingsPage/useScrollPosition";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

export default function About() {
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
                <a href="/Blog" className="">
                  Blog
                </a>
              </li>
              <li className="top-menu-item">
                <a href="/About" className="text-gray-900">
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

      {/* ABOUT */}
      <div className="wrap flex flex-col justify-center items-center bg-gray-100 h-[563px] mb-[10px] lg:mx-[40px]">
        <div className="pt-[100px] pb-[110px]  mt-[-130px]">
          <div className="text-[36px] mb-[15px]">About</div>
          <div className="text-gray-400 mb-[15px] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Suspendisse varius enim in eros elementum tristique. Duis
            cursus,
            <br /> mi quis viverra ornare, eros dolor interdum nulla, ut commodo
            diam
            <br /> libero vitae erat.
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className=" w-95% xl:w-[65%] mx-auto mt-[-40px]">
        <div className="flex justify-center items-center my-8 ">
          <div className="bg-img w-[940px] h-[320px] mx-auto bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a780eecdfcc_About-Cover.jpg')] bg-no-repeat bg-cover bg-center mt-[-170px]"></div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="flex justify-center items-center mb-4 mt-[100px]">
        <div className="ts-decor"></div>
        <div className="ts-content">Introductions</div>
        <div className="ts-decor"></div>
      </div>

      <div className="flex flex-col justify-center items-center mx-5 md:px-[100px] lg:px-[400px]">
        <div className="text-[25px] mb-[15px]">
          Overlaid the jeepers uselessly much excluding everyday life.
        </div>
        <div className="mb-[15px]">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </div>
      </div>

      {/* IMAGE #1 */}
      <div className="wrap lg:flex lg:flex-col justify-center items-center mt-32 mb-[10px]">
        <div className="w-[80%] md:w-[65%] mx-auto">
          <div className="lg:flex lg:flex-row flex-col">
            <div className="ts-end-img md:flex md:flex-row justify-center items-center">
              <div className="h-[380px] w-full md:w-[700px] mx-auto bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7af7e3ecdfad_About%20Image%201.jpg')] bg-no-repeat bg-cover bg-center">
                <a href="/" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                    <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                      READ THE FULL STORY
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center md:text-left my-8 mx-5 md:pl-[60px]">
                <a href="/">
                  <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                    Health Check: why do I get a headache when I haven't had my
                    coffee?
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
        </div>
      </div>

      {/* IMAGE #2 */}
      <div className="wrap flex flex-col-reverse lg:flex lg:flex-col justify-center items-center mt-32 mb-32">
        <div className="w-[80%] md:w-[65%] mx-auto">
          <div className="lg:flex lg:flex-row flex-col">
            <div className="ts-end-img flex flex-col-reverse md:flex md:flex-row justify-center items-center">
              <div className="text-center md:text-left my-8 md:pr-[60px]">
                <a href="/">
                  <div className="font-Karla text-[20px] mb-[5px] text-[#1d1f2e] hover:text-coffee-400 leading-8">
                    Health Check: why do I get a headache when I haven't had my
                    coffee?
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

              <div className="h-[380px] w-full md:w-[700px] mx-auto bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7af7e3ecdfad_About%20Image%201.jpg')] bg-no-repeat bg-cover bg-center">
                <a href="/" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                    <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                      READ THE FULL STORY
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX */}
      <div className="ts-parallax bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a6103ecdfcd_brooke-lark-230509-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-[340px] bg-fixed mb-[100px]"></div>

      {/* HISTORY TIMELINE */}
      <div className="flex justify-center items-center mb-4 mt-[100px]">
        <div className="ts-decor"></div>
        <div className="ts-content uppercase">History timeline</div>
        <div className="ts-decor"></div>
      </div>

      {/* TIME LINES #4 */}
      <div className="ts-time-line">
        <div className="text-[40px] opacity-10">04</div>
        <div className="uppercase -mt-7 text-[13px] tracking-widest">
          October 2018
        </div>

        <div className="mt-5 mx-auto lg:mx-[188px] mb-[50px]">
          <div className="">One day however a small line</div>
          <div className="mt-5 px-5">
            It is a paradisematic country, in which roasted parts of sentences
            fly into
            <br /> your mouth. Even the all-powerful Pointing has no control
            about the blind
            <br /> texts it is an almost unorthographic life One day however a
            small line of
            <br /> blind text by the name of Lorem Ipsum.
          </div>
        </div>
      </div>

      {/* THE 'T' LINE */}
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="h-[1px] bg-gray-200 w-48"></div>
        <div className="h-[0.5px] bg-gray-200 w-8 rotate-90 mt-4"></div>
      </div>

      {/* TIME LINES #3 */}
      <div className="ts-time-line">
        <div className="text-[40px] opacity-10">03</div>
        <div className="uppercase -mt-7 text-[13px] tracking-widest">
          October 2018
        </div>

        <div className="mt-5 mx-auto lg:mx-[188px] mb-[50px]">
          <div className="">Overlaid the jeepers uselessly</div>
          <div className="mt-5 px-5">
            It is a paradisematic country, in which roasted parts of sentences
            fly into
            <br /> your mouth. Even the all-powerful Pointing has no control
            about the blind
            <br /> texts it is an almost unorthographic life One day however a
            small line of
            <br /> blind text by the name of Lorem Ipsum.
          </div>
        </div>
      </div>

      {/* THE 'T' LINE */}
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="h-[1px] bg-gray-200 w-48"></div>
        <div className="h-[0.5px] bg-gray-200 w-8 rotate-90 mt-4"></div>
      </div>

      {/* TIME LINES #2 */}
      <div className="ts-time-line">
        <div className="text-[40px] opacity-10">02</div>
        <div className="uppercase -mt-7 text-[13px] tracking-widest">
          October 2018
        </div>

        <div className="mt-5 mx-auto lg:mx-[188px] mb-[50px]">
          <div className="">Pointing has no control about</div>
          <div className="mt-5 px-5">
            It is a paradisematic country, in which roasted parts of sentences
            fly into
            <br /> your mouth. Even the all-powerful Pointing has no control
            about the blind
            <br /> texts it is an almost unorthographic life One day however a
            small line of
            <br /> blind text by the name of Lorem Ipsum.
          </div>
        </div>
      </div>

      {/* THE 'T' LINE */}
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="h-[1px] bg-gray-200 w-48"></div>
        <div className="h-[0.5px] bg-gray-200 w-8 rotate-90 mt-4"></div>
      </div>

      {/* TIME LINES #1 */}
      <div className="ts-time-line">
        <div className="text-[40px] opacity-10">01</div>
        <div className="uppercase -mt-7 text-[13px] tracking-widest">
          October 2018
        </div>

        <div className="mt-5 mx-auto lg:mx-[188px] mb-[50px]">
          <div className="">We've started CoffeeStyle.</div>
        </div>
      </div>

      {/* THE 'T' LINE */}
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="h-[1px] bg-gray-200 w-48"></div>
        <div className="h-[0.5px] bg-gray-200 w-8 rotate-90 mt-4"></div>
      </div>

      {/* SUBSCRIBES */}
      <Subscribe />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
