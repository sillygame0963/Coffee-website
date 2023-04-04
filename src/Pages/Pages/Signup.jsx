import React from "react";

export default function Signup() {
  return (
    <>
      <div className="flex justify-center items-center mb-10 drop-shadow-xl lg:mx-10 mx-auto">
        <form
          action="/"
          className="w-auto border border-gray-200 p-6 bg-white lg:flex lg:flex-row flex-col lg:basis-3/2 mt-32 rounded-lg"
        >
          <div className="mt-5 lg:mt-10">
            <div className="text-gray-500 text-3xl lg:-mt-10">Sign Up</div>

            {/* USERNAME */}
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

            {/* EMAIL */}
            <div className="mt-10 lg:mt-5 text-gray-600 text-left">Email</div>
            <div className="Name mt-5 lg:mt-2">
              <input
                placeholder="sonnt03@gmail.com"
                type="email"
                className="px-6 py-4 mx-auto mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900 hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>

            {/* PASSWORD */}
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

            {/* CONFIRM PASSWORD */}
            <div className="mt-10 lg:mt-5 text-gray-600 text-left">
              Confirm Password
            </div>
            <div className="password mt-5 lg:mt-2">
              <input
                placeholder=""
                type={`password`}
                className="px-6 py-4 mr-[10px] w-[450px] bg-inherit border-[1px] border-gray-300 outline-none leading-5 text-gray-900  hover:border-gray-600 duration-700 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold"
              />
            </div>

            <div className="text-left mt-2">
              <label
                htmlFor="checkbox"
                className=" underline text-[16px]  lg:text-[14px]"
              >
                I agree to the Terms
                <input type="checkbox" className="ml-2" />
              </label>
            </div>

            <div className="text-[16px] lg:text-[12px] mt-4 lg:mt-2">
              <div className="flex lg:justify-start justify-center mt-1">
                <div className="ml-25">You already have an account?</div>
                <a href="/Signin" className="ml-1 text-blue-400">
                  Sign in.
                </a>
              </div>
            </div>

            <div className="button mt-10 lg:mt-5">
              <button
                type="submit"
                className="mx-auto md:mx-0 w-max -mt-2 md:mt-0 ts-button bg-black text-white hover:drop-shadow-md"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
