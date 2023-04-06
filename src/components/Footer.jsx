import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <>
      <div className="footer w-95% lg:w-[65%] mx-auto pb-24 text-[14px] text-gray-500">
        <div className=" flex gap-8 md:text-left text-center md:flex-row flex-col">
          <div className="basis-2/6 ml-[5px]">
            <div className="text-xl font-semibold cursor-pointer mb-5 text-black">
              CoffeeStyle.
            </div>
            <div className="text-[14px] text-gray-400 mb-[100px]">
              Delivering the best coffee life since 1996. From coffee geeks to
              the real ones.
            </div>
            <div className="text-[14px] text-gray-300 hover:text-coffee-400 duration-500 -mt-6 lg:mt-0">
              CoffeeStyle Inc. © 1996
            </div>
          </div>

          <div className="basis-1/6">
            <div className="uppercase font-semibold tracking-widest text-[12px] mb-[20px]">
              Menu
            </div>

            <div className="flex flex-col gap-4">
              <div className="">
                <a href="/" className=" hover:text-coffee-400 duration-500">
                  Home
                </a>
              </div>
              <div className="">
                <a
                  href="/Product"
                  className=" hover:text-coffee-400 duration-500"
                >
                  Our Products
                </a>
              </div>
              <div className="">
                <a
                  href="/About"
                  className=" hover:text-coffee-400 duration-500"
                >
                  About
                </a>
              </div>
              <div className="">
                <a
                  href="/Contact"
                  className=" hover:text-coffee-400 duration-500"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="basis-1/6">
            <div className="uppercase font-semibold tracking-widest text-[12px] mb-[20px]">
              Follow us
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <a href="/" className=" hover:text-coffee-400 duration-500">
                  Facebook
                </a>
              </div>
              <div className="">
                <a href="/" className=" hover:text-coffee-400 duration-500">
                  Instagram
                </a>
              </div>
              <div className="">
                <a href="/" className=" hover:text-coffee-400 duration-500">
                  Pinterest
                </a>
              </div>
              <div className="">
                <a href="/" className=" hover:text-coffee-400 duration-500">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="basis-2/6">
            <div className="uppercase font-semibold tracking-widest text-[12px] mb-[20px]">
              Contact us
            </div>
            <div className="mb-4">We're Always Happy to Help</div>
            <div className="text-[24px] text-gray-800 mb-[70px]">
              <a href="mailto:sonnt03@gmail.com" className="">
                sonnt03@gmail.com
              </a>
            </div>
            <div className="text-[14px] text-gray-300">Design by Thai Son</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
