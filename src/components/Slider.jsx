import React, { useState } from "react";
import ReactDOM from "react-dom";

const Slider = () => {
  return (
    <>
      <div
        className={
          "slider h-[530px] bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')] bg-no-repeat bg-cover bg-bottom"
        }
      >
        <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="mx-16 text-white">
            <div className="uppercase text-sm mb-6">
              Best place to buy coffee
            </div>
            <div className="text-[48px] mb-6">Coffee Mugs</div>
            <div className="font-medium text-lg mb-8">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </div>
            <div className="uppercase flex justify-center">
              <button className="rounded-none text-xs font-semibold bg-white text-black px-8 py-4 tracking-widest cursor-pointer hover:bg-opacity-90">
                Explore our products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
