import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import {
  FaUsers, FaHeadset, FaSync,
  FaComments, FaBrain, FaClipboardList, FaChartBar, FaCode, FaRobot, FaMicrochip, FaCloud, FaCogs, FaDatabase
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import HomeBG from '../assets/HomeBG.png'; // Adjust the path as necessary
const Skill = () => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => setFade(true), 200);
  }, []);

  return (
    <>
      <div className="absolute top-0 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="font-sans">
        <section className="relative py-24 bg-gradient-to-b from-[#290931] to-[#12031e] overflow-hidden">

        {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={HomeBG}
                  loading="lazy"
                  alt="Decorative background"
                  className="w-full h-full object-cover "
                />
              </div>
              
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 2% 50%, rgba(99,102,241,0.1) 0%, transparent 25%),
                  radial-gradient(circle at 98% 30%, rgba(168,85,247,0.1) 0%, transparent 25%),
                  linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)`,
                backgroundSize: '80% 80%, 80% 80%, 40px 40px, 40px 40px',
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse-slow delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] animate-pulse-slow delay-300" />
          
          <div className="container mx-auto text-center px-4 relative z-10">
            <div className="relative mb-20">
              <h2 className="md:text-8xl text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-100 to-white md:pb-10 pb-3 bg-clip-text text-transparent">
                My Skills
              </h2>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:w-24 md:h-1 w-20 h-1 bg-gradient-to-r from-white via-purple-400 to-indigo-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaCode />,
                  title: "Frontend Development",
                  description:
                    "HTML, CSS, JavaScript, React.js, Tailwind CSS, Responsive Design",
                },
                {
                  icon: <FaCogs />,
                  title: "Backend Development",
                  description:
                    "Node.js, Express.js, REST APIs, MVC Architecture",
                },
                {
                  icon: <FaDatabase />,
                  title: "Database Management",
                  description:
                    "MongoDB, Mongoose, NoSQL",
                },
                {
                  icon: <FaMicrochip />,
                  title: "Version Control",
                  description:
                    "Git, GitHub",
                },
                {
                  icon: <SiTailwindcss />,
                  title: "Tailwind CSS",
                  description:
                    "Tailwind Css helping in UI/UX,Help to make the code efficient and clean",
                },
                {
                  icon: <FaCloud />,
                  title: "Deployment & DevOps",
                  description:
                    "Netlify, Vercel, Render, Continuous Deployment",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative flex flex-col h-full bg-gradient-to-tr from-[#360f48] to-[#160324] backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-500/50">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-lg opacity-75 rounded-xl" />
                      <div className="relative text-4xl text-white flex justify-center items-center w-16 h-16 mx-auto bg-gray-900/80 rounded-xl border border-purple-500/40">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-blue-300 group-hover:to-white transition-all">
                      {item.title}
                    </h3>
                    <p className="text-purple-100 group-hover:text-white/90 transition-colors">{item.description}</p>
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-purple-400/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-indigo-400/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.6; }
            }

            .animate-pulse-slow {
              animation: pulse-slow 6s ease-in-out infinite;
            }
          `}</style>
           {/* Decorative Bottom Block Rectangle */}
<div className="absolute bottom-0  left-0 w-full lg:h-20 h-14 bg-[#20041e] rounded-t-3xl z-0 shadow-inner shadow-[#00000066]" />
        </section>
        
      </div>
    </>
  );
};

export default Skill;
