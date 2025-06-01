import React, { useState } from "react";
import glowingFigure from "../assets/glow.png";
import { Link } from "react-router-dom";

export default function Explore() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#2A1A40] to-[#4A1538]">

      {/* Top Navbar */}
      <header className="flex justify-between items-start p-6">
        {/* Left Side Header */}
        <div className="text-left">
          <h1 className="lg:text-6xl bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4] bg-clip-text text-2xl text-transparent ml-[20px] md:text-4xl font-bold">
            Hello!
          </h1>
          <p className="text-4xl ml-[20px] text-[#A0A0A0]">नमस्ते </p>
        </div>

        {/* Right Side Header */}
        <div className="text-right">
          <h1 className="text-2xl bg-gradient-to-r from-[#6b6969] via-[#fffcfc] to-[#4a4747] bg-clip-text text-transparent font-bold">
            NJ Designs
          </h1>
          <p className="text-sm text-[#A0A0A0]">Portfolio</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 items-center justify-between py-12 px-6 lg:px-16 gap-8">
        
        {/* Left Section - Cards Buttons and Cards */}
        <div className="w-full lg:w-1/4 pr-0 lg:pr-12 border-r border-dashed border-gray-600 flex-col hidden lg:block gap-6 mb-20">
      
          {/* Buttons */}
          <div className="flex flex-col gap-4 mb-6">
             <h1 className="lg:text-4xl bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4] bg-clip-text text-2xl text-transparent ml-[20px] md:text-3xl font-bold">
            ABOUT ME
          </h1>
            <button
              onClick={() => setActiveCard(activeCard === "hobbies" ? null : "hobbies")}
              className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg
                ${activeCard === "hobbies" ? "bg-[#1f0313] border-white border-2 text-white" : "hover:bg-[#6c0b42] hover:text-white bg-white text-black"} transition`}
            >
              Hobbies
            </button>
            <button
              onClick={() => setActiveCard(activeCard === "skills" ? null : "skills")}
              className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg
                ${activeCard === "skills" ?"  bg-[#1f0313] border-white border-2 text-white" : "bg-white hover:bg-[#6c0b42] hover:text-white text-black"} transition`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveCard(activeCard === "tools" ? null : "tools")}
              className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg
                ${activeCard === "tools" ? "  bg-[#1f0313] border-white border-2 text-white" : "bg-white hover:bg-[#6c0b42] hover:text-white text-black"} transition`}
            >
              Tools I Use
            </button>
          </div>

          {/* Cards */}
          {activeCard === "hobbies" && (
            <div className="bg-[#441041]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-3 text-white">Hobbies</h2>
              <ul className="list-disc list-outside pl-4 text-[#D1D5DB] space-y-1">
                <li>Designing</li>
                <li>UI/UX Design</li>
                <li>Portrait Art</li>
              </ul>
            </div>
          )}

          {activeCard === "skills" && (
            <div className="bg-[#441041]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-3 text-white">Skills</h2>
              <ul className="list-disc list-outside pl-4 text-[#D1D5DB] space-y-1">
                <li>Full-Stack Development</li>
                <li>React & Tailwind CSS</li>
                <li>Node.js & Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          )}

          {activeCard === "tools" && (
            <div className="bg-[#441041]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-3 text-white">Tools I Use</h2>
              <ul className="list-disc list-outside pl-4 text-[#D1D5DB] space-y-1">
                <li>Figma</li>
                <li>VS Code</li>
                <li>GitHub</li>
                <li>Cursor</li>
                <li>Postman</li>
              </ul>
            </div>
          )}
        </div>

        {/* Center Section - Glowing Figure + Welcome Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center  relative h-[400px] sm:h-[500px] md:h-[600px]">

          {/* Welcome Text - always visible */}
          <div className="absolute md:mt-[180px] lg:mt-[120px] sm:mt-[180px] mt-[120px] lg-mid:ml-[900px]  md:ml-[1000px] lg:ml-[700px] sm:ml-[800px] ml-[500px] transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 lg:px-0  ">
           
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl lg-mid:text-8xl bg-gradient-to-r from-[#605f5f] via-[#fffcfc] to-[#282727] bg-clip-text  lg-mid:block text-transparent font-extrabold drop-shadow-lg mb-2">
           Welcome
         </h1>

            <h2 className="md:text-4xl text-3xl lg-mid:text-6xl  lg-mid:block font-extrabold text-[#A020F0] drop-shadow-lg">
              To my Portfolio
            </h2>
            <div className="w-full max-w-sm mx-auto mt-8 lg:ml-[150px] lg:hidden lg-mid:block md:text-left">
              <p className="md:text-lg text-md font-bold ml-[20px] text-[#a9a7a7] md:leading-relaxed">
                Hi, I'm Nirmal, a full-stack developer who enjoys building web
                apps and creating clean, user-friendly UI/UX designs.
              </p>
              
            </div>
          </div>
               <Link 
                to="/home" 
                className="md:mt-[350px] mt-[280px] 
                sm-md:mr-[180px] ml-[110px]
                sm:mt-[350px] sm:ml-[180px]
                lg:mr-[0px] xs:ml-[180px] bg-white hover:bg-[#1f0313] text-black md:text-xl text-md hover:border-white hover:border-2 hover:text-white md:px-10 md:py-4  px-6 py-3 rounded-full font-semibold transition-colors md:ml-[200px] inline-block"
              >
                Explore →
              </Link>
          {/* Glowing Figure and Shadow - hidden on small screens */}
          <div className="absolute bottom-0 left-1 transform -translate-x-1/2 w-[550px] h-auto flex-col items-center justify-end pointer-events-none select-none lg:flex md:flex sm:flex ">
            {/* Glowing shadow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-black opacity-[80%] blur-[120px] pointer-events-none z-10 rounded-full" />
            {/* Glowing Figure */}
            <img
              src={glowingFigure}
              alt="Glowing Figure"
              className="relative z-20 lg:w-[600px] lg:h-[800px] w-[80%] h-[70%] md:w-full md:h-1/2 object-contain"
            />
          </div>
        </div>
        
      </div>
       
       {/* ABOUT ME for mobile */}
      <div className="block lg:hidden w-full px-6 ">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4]  to-[#fad0c4] mb-6">ABOUT ME</h1>
        <div className="flex flex-col gap-4 mb-[100px]">
          <button onClick={() => setActiveCard(activeCard === "hobbies" ? null : "hobbies")} className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg ${activeCard === "hobbies" ? "bg-[#1f0313] border-white border-2 text-white" : "hover:bg-[#6c0b42] hover:text-white bg-white text-black"} transition`}>Hobbies</button>
          <button onClick={() => setActiveCard(activeCard === "skills" ? null : "skills")} className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg ${activeCard === "skills" ? "bg-[#1f0313] border-white border-2 text-white" : "bg-white hover:bg-[#6c0b42] hover:text-white text-black"} transition`}>Skills</button>
          <button onClick={() => setActiveCard(activeCard === "tools" ? null : "tools")} className={`p-4 rounded-2xl border border-white/30 font-semibold text-lg ${activeCard === "tools" ? "bg-[#1f0313] border-white border-2 text-white" : "bg-white hover:bg-[#6c0b42] hover:text-white text-black"} transition`}>Tools I Use</button>

          {activeCard === "hobbies" && <Card title="Hobbies" items={["Designing", "UI/UX Design", "Portrait Art"]} />}
          {activeCard === "skills" && <Card title="Skills" items={["Full-Stack Development", "React & Tailwind CSS", "Node.js & Express", "MongoDB"]} />}
          {activeCard === "tools" && <Card title="Tools I Use" items={["Figma", "VS Code", "GitHub", "Cursor", "Postman"]} />}
        </div>
      </div>
      {/* Decorative Bottom Block Rectangle */}
<div className="absolute bottom-0 left-0 w-full  lg:h-20 h-14 bg-[#20041e] rounded-t-3xl z-0 shadow-inner shadow-[#00000066]" />

    </div>
  );
}
function Card({ title, items }) {
  return (
    <div className="bg-[#441041]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition-transform duration-300 ease-in-out mt-4">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <ul className="list-disc pl-4 text-[#D1D5DB] space-y-1">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}