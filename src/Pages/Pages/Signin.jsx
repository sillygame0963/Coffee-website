import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useScrollPosition from "../../SettingsPage/useScrollPosition";

export default function Signin() {
  const [toggle, setToggle] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <header className="mx-auto h-20 max-w-screen-2xl text-base px-8">
        <nav className="flex flex-col justify-start items-center">
          <div className="logo text-center text-[45px] mt-44 lg:mt-20 font-semibold cursor-pointer">
            <a href="/" className="">
              CoffeeStyle.
            </a>
          </div>
          <ul
            className={`lg:flex lg:items-center lg:justify-end gap-8 uppercase text-sm text-gray-500 font-medium ${
              toggle ? "" : "hidden"
            }`}
          ></ul>
        </nav>
      </header>

      {/* SIGN IN */}
      <div className="sign-in-form w-[100%] xl:w-[65%] mx-auto -mt-10">
        <div className="ts-sign-in-img">
          <div className="h-[700px] bg-[url('https://cdn.wallpapersafari.com/7/72/u0XE8Z.jpg')] bg-no-repeat bg-cover bg-right lg:-mr-40">
            <div className="flex justify-center lg:justify-start items-center mb-10 drop-shadow-xl mt-20 lg:mx-10 mx-auto">
              <form
                action="/"
                className="w-auto border border-gray-200 p-6 bg-white lg:flex lg:flex-row flex-col lg:basis-3/2 mt-32 rounded-lg"
              >
                <div className="mt-5 lg:mt-10">
                  <div className="text-gray-500 text-3xl lg:-mt-10">
                    Sign In
                  </div>

                  <div className="mt-10 lg:mt-5 text-gray-600 text-left">
                    Username
                  </div>
                  <div className="Name mt-5 lg:mt-2">
                    <input
                      placeholder="ThaiSon1234"
                      type="text"
                      className="px-6 py-4 mx-auto mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900 hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
                    />
                  </div>
                  <div className="mt-10 lg:mt-5 text-gray-600 text-left">
                    Password
                  </div>
                  <div className="password mt-5 lg:mt-2">
                    <input
                      placeholder=""
                      type={`password`}
                      className="px-6 py-4 mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900  hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
                    />
                  </div>

                  <div className="text-[16px] lg:text-[12px] mt-4 lg:mt-2">
                    <div className="forgot-pass lg:text-left">
                      <a
                        href="/Forgotpassword"
                        className="text-blue-400 underline"
                      >
                        Forgot Password
                      </a>
                    </div>

                    <div className="flex lg:justify-start justify-center mt-1">
                      <div className="ml-25">You don't have an account?</div>
                      <a href="/Signup" className="ml-1 text-blue-400">
                        Sign up.
                      </a>
                    </div>
                  </div>

                  <div className="button mt-10 lg:mt-5">
                    <button
                      type="submit"
                      className="mx-auto md:mx-0 w-max -mt-2 md:mt-0 ts-button bg-black text-white hover:drop-shadow-md"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
