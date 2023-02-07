import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import {saveAs} from "file-saver"

function Hero() {

  return (
    <motion.div
      initial={{
        y: +550,
        opacity: 0.5,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className='relative w-full text-center items-center mt-36'>
        <div>
          <p className='font-bold text-xl mb-5 my-5'>
            Hello there, I am Aditya👋
          </p>
          <h1 className='inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold '>
            I am a<span className='text-sky-400'> student</span>
            📖 and a<span className='text-sky-400'> programmer</span>
            💻 by hobby.
          </h1>
          <p className='font-medium text-xl mb-5'>
            I also try to fail in life uniquely!!🙃
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
