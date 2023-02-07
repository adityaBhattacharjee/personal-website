import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaNodeJs, FaReact, FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostgresql, SiDjango, SiFlask, SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <motion.div
      initial={{
        y: 1500,
        opacity: 0.5,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='bg-slate-900 h-auto max-w-5xl mx-auto items-center text-center'
    >
      <div className='text-4xl mt-28 font-bold text-center underline decoration-slate-600'>
        Skills
      </div>
      <div className='grid grid-cols-5 gap-5 mt-10'>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <FaPython size={150} fill='#00A5E9'></FaPython>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <FaJava size={150} fill='#00A5E9'></FaJava>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <IoLogoJavascript size={150} fill='#00A5E9'></IoLogoJavascript>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <SiPostgresql size={150} fill='#00A5E9'></SiPostgresql>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <SiTypescript size={150} fill='#00A5E9'></SiTypescript>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <SiDjango size={150} fill='#00A5E9'></SiDjango>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <FaReact size={150} fill='#00A5E9'></FaReact>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <SiFlask size={150} fill='#00A5E9'></SiFlask>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <FaGit size={150} fill='#00A5E9'></FaGit>
        </div>
        <div className='p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-md flex justify-center hover:scale-105 cursor-pointer'>
          <FaNodeJs size={150} fill='#00A5E9'></FaNodeJs>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
