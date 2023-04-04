import React from "react";
import ReactDOM from "react-dom";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24">
        <div className="flex justify-center items-center px-6 sm:px-0">
          <div className="w-8 h-px bg-gray-600"></div>
          <div className="uppercase lg:px-3 text-[12px] font-bold tracking-widest text-gray-400 px-auto">
            Sign up and get free coffee bags
          </div>
          <div className="w-8 h-px bg-gray-600"></div>
        </div>

        <div className="text-[36px] mt-[10px] mb-3 tracking-wider text-white">
          Coffee Updates
        </div>

        <div className="form">
          <div className="md:flex justify-center items-center">
            <div className="email">
              <input
                placeholder="sonnt03@gmail.com"
                type="email"
                className="px-6 py-4 mr-[10px] w-[350px] bg-inherit border-[1px] border-gray-600 outline-none leading-5 text-white hover:border-gray-300 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>
            <div className="button">
              <button
                type="submit"
                className="mx-auto md:mx-0 w-max mt-[10px] md:mt-0 ts-button bg-white text-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
