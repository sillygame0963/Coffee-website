import React, { useState } from "react";
import ReactDOM from "react-dom";

const Story = () => {
  return (
    <>
      <div className="story">
        <div className="w-full h-full justify-center flex items-center">
          <div className="px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
            <div className="text-3xl mb-6 font-normal leading-10">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </div>
            <div className="text-gray-500 leading-7 mb-6">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
              <br /> Even the all-powerful Pointing has no control about the
              blind texts it is an almost <br />
              unorthographic life One day however a small line of blind text by
              the name of Lorem <br />
              Ipsum decided to leave for the far World of Grammar.
            </div>
            <div className=" text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400">
              <a href="/">Read the full Story</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
