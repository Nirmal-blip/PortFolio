import React from 'react';
import { Link } from "react-router-dom";
import MyImage from '../assets/Nirmal.png';
import BG from '../assets/HOMEBG.png';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen text-white overflow-hidden font-poppins">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={BG}
            alt="Decorative background"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center flex-1 px-6 md:px-20 bg-gradient-to-br from-[#0D1B2A] via-[#190b2c]/95 to-[#4A1538] z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            
            {/* Left - Heading */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-4xl lg:text-6xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#ffffff] via-[#f0a6ca] to-white bg-clip-text text-transparent ml-[10%] md:mb-[5%]">
                Let’s get to know<br /> about me closer
              </h1>
              <p className="text-gray-300 ml-[10%] max-w-md text-xl font-semibold leading-relaxed tracking-wide pb-[8%]">
                Discover who I am, what I do, and the passion that drives my creativity and code.
              </p>

              <div className="mt-6 ml-[10%]">
                <Link 
                  to="/home" 
                  className="bg-white hover:bg-[#1f0313] text-black text-md hover:border-white hover:border-2 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 inline-block"
                >
                  Download My Resume 
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src={MyImage}
                alt="Nirmal Joshi"
                className="lg:w-[380px] lg:h-[380px] md:w-80 md:h-80 w-[250px] h-[250px] rounded-full object-cover border-4 border-[#a55aa5] shadow-2xl shadow-black hover:shadow-white md:transition-all md:duration-500 md:ease-in-out md:hover:w-[400px] md:hover:h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Decorative Bottom Block Rectangle */}
        <div className="absolute bottom-0 left-0 w-full h-10 md:h-20 bg-[#42163f] rounded-t-3xl z-20 shadow-inner shadow-[#00000066]">
          <h1 className="text-xl md:text-4xl font-extrabold bg-gradient-to-r from-[#605f5f] via-[#fffcfc] to-[#282727] bg-clip-text text-transparent hover:text-white hover:drop-shadow-4xl drop-shadow-lg text-center md:mt-4 md:pb-3">
            Scroll Down to exciting journey
          </h1>
        </div>

      </div>
    </>
  );
}
