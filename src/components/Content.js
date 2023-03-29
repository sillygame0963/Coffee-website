import React, { useState } from "react";
import ReactDOM from "react-dom";

const Content = () => {
  return (
    <>
      {/* FEATURE MUGS */}
      <div className="ts-subheadline">
        <div className="ts-decor"></div>
        <div className="ts-content">Feature Mugs</div>
        <div className="ts-decor"></div>
      </div>
      <div className="feature-mugs w-95% lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="ts-product-img ">
            <div className="h-[400px] sm:h-[540px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                    On Sale.
                  </div>
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[20px] text-coffee-600 mr-[10px]">
                  $50.00
                </span>
                <span className="text-[16px] text-gray-400 line-through">
                  $69.00 USD
                </span>
              </div>
            </div>
          </div>

          <div className="ts-product-img">
            <div className="h-[400px] sm:h-[540px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Golden Designers Mug
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$49.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE PRODUCTS */}
      <div className="ts-subheadline">
        <div className="ts-decor"></div>
        <div className="ts-content">More Products</div>
        <div className="ts-decor"></div>
      </div>
      <div className="more-products w-95% xl:w-[65%] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {/* #1 */}
          <div className="ts-more-img ">
            <div className="h-[380px] bg-[url('https://i.pinimg.com/originals/94/ec/29/94ec296a6ddf01ef0590164e7710157a.png')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                    On Sale.
                  </div>
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Red Love Cup
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[20px] text-coffee-600 mr-[10px]">
                  $25.00
                </span>
                <span className="text-[16px] text-gray-400 line-through">
                  $37.00 USD
                </span>
              </div>
            </div>
          </div>

          {/* #2 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('http://cdn.shopify.com/s/files/1/2629/2348/products/BLACK_23b63f9b-ea4a-4247-845a-197edf13edad_1200x1200.jpg?v=1658191420')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Black Tea Cup
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[20px] text-coffee-600 mr-[10px]">
                  $15.00
                </span>
                <span className="text-[16px] text-gray-400 line-through">
                  $29.00 USD
                </span>
              </div>
            </div>
          </div>

          {/* #3 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  B&W Essentials Mug
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$19.00 USD</span>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  No Handle Bar Cup
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$34.00 USD</span>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6d09ece015_rocknwool-690694-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Winter Style Mug
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$25.00 USD</span>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a1db2ece009_natanja-grun-600152-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Espresso Cup by Mugs.co
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$25.00 USD</span>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$99.00 USD</span>
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Ceramic Tea
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$46.00 USD</span>
              </div>
            </div>
          </div>

          {/* 9 */}
          <div className="ts-more-img">
            <div className="h-[380px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a81a6ecdfe7_levi-guzman-1077850-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Summer Designer Cup
                </div>
              </a>
              <div className="ts-price">
                <span className="text-[16px] text-gray-600">$29.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COFFEE MAGAZINE */}
      <div className="ts-subheadline">
        <div className="ts-decor"></div>
        <div className="ts-content">
          Buy 2 mugs and get a coffee magazine free
        </div>

        <div className="ts-decor"></div>
      </div>

      <div className="coffee-magazine w-95% lg:w-[65%] mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="ts-img basis-1/2 md:flex md:flex-row gap-5 w-full h-full mb-[50px] md:mb-0">
            <div className="ts-big-img h-[280px] basis-2/3 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg')] bg-no-repeat bg-cover bg-center"></div>

            <div className="ts-small-2imgs basis-1/3 flex flex-row md:flex-col mt-5 md:mt-0 md:gap-5 gap-3">
              <div className="md:h-[130px] h-[200px] basis-1/2 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg')] bg-no-repeat bg-cover bg-center"></div>
              <div className="md:h-[130px] h-[200px] basis-1/2 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg')] bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>

          {/* POST OF MAGAZINE*/}
          <div className="ts-post basis-1/2 md:pl-14 md:text-left">
            <div className="uppercase text-[12px] font-medium tracking-widest text-gray-500">
              Premium offer
            </div>
            <div className="text-[36px] mt-[10px] mb-[15px] tracking-wider">
              Get our Coffee Magazine
            </div>
            <div className="text-[16px] mb-[15px]">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className="ts-button bg-gray-900 text-white mx-auto md:mx-0 w-max py-[18px] px-[24px]">
              Start shopping
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX */}
      <div className="ts-parallax bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg')] bg-no-repeat bg-cover bg-center h-[340px] bg-fixed mb-[100px]"></div>

      {/* END CONTENTS */}
      <div className="ts-subheadline">
        <div className="ts-decor"></div>
        <div className="ts-content">Behind the mugs, lifestyle stories</div>
        <div className="ts-decor"></div>
      </div>

      <div className="lifestyle-stories w-95% xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
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
            <div className="text-center md:text-left my-8">
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

            <div className="text-center md:text-left my-8">
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

          {/* #3 */}
          <div className="ts-end-img ">
            <div className="h-[300px] bg-[url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg')] bg-no-repeat bg-cover bg-center">
              <a href="/" alt="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:lg:transition-all hover:lg:ease-in-out hover:lg:duration-800 relative group">
                  <div className="absolute rounded-none w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn  bg-white text-black px-8 py-4 ts-button">
                    READ THE FULL STORY
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center md:text-left my-8">
              <a href="/">
                <div className="font-Karla text-[20px] mb-[5px] hover:text-coffee-400">
                  Recent research suggests that heavy coffee drinkers may reap
                  health benefits.
                </div>
              </a>
              <div className="ts-para">
                <span className="text-[16px] text-gray-500">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
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
    </>
  );
};

export default Content;
