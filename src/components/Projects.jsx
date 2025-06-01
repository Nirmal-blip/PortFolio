import React, { useState } from 'react';
import Project from '../assets/Project.png';
import ProjectLeft from '../assets/Group 24.png';
import ProjectRight from '../assets/Group 24.png';
import project1 from '../assets/Project.png';
import project2 from '../assets/Project.png';
import project3 from '../assets/Project.png';

const projects = [
  {
    title: "AI Chatbot",
    description: "Built using OpenAI and React.",
    image: project1,
    link: "https://example.com/ai-chatbot",   // Change to real link
  },
  {
    title: "Portfolio Website",
    description: "A personal branding site with animations.",
    image: project2,
    link: "https://example.com/portfolio",
  },
  {
    title: "E-commerce App",
    description: "React and Firebase based shopping app.",
    image: project3,
    link: "https://example.com/ecommerce",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  const getCardStyle = (index) => {
    const total = projects.length;
    const relativeIndex = (index - currentIndex + total) % total;

    let transform = '';
    let zIndex = 0;
    let opacity = 1;

    if (relativeIndex === 0) {
      transform = 'translateZ(0) scale(1)';
      zIndex = 3;
    } else if (relativeIndex === 1) {
      transform = 'translateX(220px) translateZ(-100px) scale(0.9) rotateY(-15deg)';
      zIndex = 2;
      opacity = 0.7;
    } else if (relativeIndex === total - 1) {
      transform = 'translateX(-220px) translateZ(-100px) scale(0.9) rotateY(15deg)';
      zIndex = 2;
      opacity = 0.7;
    } else {
      transform = 'translateZ(-300px) scale(0.7)';
      zIndex = 1;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.6s ease',
    };
  };

  return (
    <div className="flex flex-col min-h-[150vh] text-white relative overflow-hidden bg-gradient-to-br to-[#0D1B2A] via-[#2A1A40] from-[#4A1538] items-center pt-32 pb-32 px-4 ">

      {/* Top Images Container */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 flex items-center space-x-12 pointer-events-none z-8 w-[900px] justify-center">
        {/* Left Image */}
        <img
          src={ProjectLeft}
          alt="Left Decorative"
          className="w-[250px] "
          style={{ userSelect: 'none' }}
        />
        {/* Center Image */}
        <img
          src={Project}
          alt="Center Decorative"
          className="md:w-[700px] w-[490px]"
          style={{ userSelect: 'none' }}
        />
        {/* Right Image */}
        <img
          src={ProjectRight}
          alt="Right Decorative"
          className="w-[250px]"
          style={{ userSelect: 'none' }}
        />
      </div>

      {/* Carousel Container */}
      <div className="relative w-full md:max-w-[900px] md:h-[650px] max-w[600px] h-[550px] perspective-[1200px] mr-40 mt-80 z-10">
        <div className="relative w-full h-full text-2xl">
          {projects.map((project, i) => (
            <div
              key={i}
              className="absolute md:w-[500px] md:h-[550px] w-[400px] h-[450px] hover:bg-[#030320] bg-[#1b0624] border-4 rounded-2xl shadow-2xl p-6"
              style={{
                ...getCardStyle(i),
                left: '50%',
                top: '50%',
                marginLeft: '-150px',
                marginTop: '-200px',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                fontSize: '19px',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className=" rounded-md w-full md:h-56 h-46 object-cover mb-4"
              />
              <h2 className="md:text-4xl  text-3xl font-bold mb-2 bg-gradient-to-tr from-[#070707] via-[#a7a1a1] to-[#ffff] bg-clip-text text-transparent hover:text-white">{project.title}</h2>
              <p className="text-gray-400 md:text-xl text-md group-hover:text-white">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block md:px-6 md:py-2 px-4 py-2 bg-white hover:bg-[#1f0313] md:mt-20 mt-16 text-black font-semibold  md:text-md   hover:text-white rounded-full hover:border-white hover:border-2 transition"
              >
                Explore Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-20 gap-6 z-10">
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className={`md:px-8 md:py-3 px-6 py-2 bg-white hover:bg-[#1f0313] text-black md:text-lg text-md hover:text-white border-black border-2 rounded-full font-semibold hover:border-white hover:border-2 transition ${
            isAnimating ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          disabled={isAnimating}
          className={`md:px-8 md:py-3 px-6 py-2 bg-white hover:bg-[#1f0313] text-black md:text-lg text-md border-[#0c0c0c] border-2 hover:text-white hover:border-white font-semibold rounded-full hover:border-2 transition ${
            isAnimating ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>

    </div>
  );
}
