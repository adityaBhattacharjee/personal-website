import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";
function BodyProjects() {
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
      className='bg-slate-900 h-auto max-w-6xl mx-auto'
    >
      <div className='text-4xl mt-28 font-bold text-center underline decoration-slate-600'>
        Projects
      </div>
      <div className='mt-20 gap-10 grid grid-cols-1'>
        <div className='p-6 bg-slate-800 border border-slate-600 rounded-lg shadow-md'>
          <p className='font-bold'>
            Text to Image generator through OpenAI api
          </p>
          <div className='grid md:grid-cols-2'>
            <div className='mt-3'>
              <p className='mr-3'>
                This website allows you to easily create stunning text images
                using the power of OpenAI&apos;s state-of-the-art machine
                learning technology. Simply type in your desired text and DALL·E
                2 will generate a unique image that you can use for a variety of
                purposes, such as social media posts, banners, or even as a
                creative way to share quotes and messages.
              </p>

              <a
                className='inline-flex items-center mt-6 text-blue-600 hover:underline cursor-pointer'
                href='https://text-to-image-generator.vercel.app'
              >
                https://text-to-image-generator.vercel.app
              </a>

              <Link href='https://github.com/adityaBhattacharjee/Text-to-image-generator'>
                <button className='hover:scale-105 p-2 mt-6 rounded-xl flex flex-row items-center space-x-1 bg-sky-400 gap-1'>
                  <IoLogoGithub></IoLogoGithub> Source code
                </button>
              </Link>
            </div>
            <div className='mt-6 md:mt-3 hidden md:inline-flex'>
              <Image
                src='/Text-to-image.png'
                alt='Text To Image Generator'
                width={1896}
                height={886}
              ></Image>
            </div>
          </div>
        </div>
        <div className='p-6 bg-slate-800 border border-slate-600 rounded-lg shadow-md'>
          <p className='font-bold'>Online Snake Game</p>
          <div className='grid md:grid-cols-2'>
            <div className='mt-3'>
              <p className='mr-3'>
                A simple online snake game website featuring a small,
                square-shaped snake that moves around a canvas using the arrow
                keys. The goal is to navigate the snake to eat
                randomly-generated food items, making the snake grow in size.
                Avoid colliding with the walls or the snake&apos;s own body, and
                try to get the highest score.
              </p>

              <a
                className='inline-flex items-center mt-6 text-blue-600 hover:underline cursor-pointer'
                href='https://web-snake-game-online.netlify.app/'
              >
                https://web-snake-game-online.netlify.app/
              </a>

              <Link href='https://github.com/adityaBhattacharjee/Online-snake-game'>
                <button className='hover:scale-105 p-2 mt-6 rounded-xl flex flex-row items-center space-x-1 bg-sky-400 gap-1'>
                  <IoLogoGithub></IoLogoGithub> Source code
                </button>
              </Link>
            </div>
            <div className='mt-6 md:mt-3 hidden md:inline-flex'>
              <Image
                src='/Online-snake-game.png'
                alt='Text To Image Generator'
                width={1920}
                height={886}
              ></Image>
            </div>
          </div>
        </div>
        <div className='p-6 bg-slate-800 border border-slate-600 rounded-lg shadow-md'>
          <p className='font-bold'>
            StateZ: A programming language written in python
          </p>
          <div className=''>
            <div className='mt-3'>
              <p className='mr-3'>
                A simple programming language, written in Python, is a
                high-level language that provides a straightforward syntax and
                an easy-to-use environment. It is designed to be accessible to
                beginners and experienced programmers alike, with a focus on
                readability and simplicity. If you want a language to tinker
                with, StateZ simple programming language, written in Python,
                provides the perfect solution for your needs.
              </p>

              <Link href='https://github.com/adityaBhattacharjee/StateZ'>
                <button className='hover:scale-105 p-2 mt-6 rounded-xl flex flex-row items-center space-x-1 bg-sky-400 gap-1'>
                  <IoLogoGithub></IoLogoGithub> Source code
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BodyProjects;
