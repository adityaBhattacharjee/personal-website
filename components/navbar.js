import React from "react";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoStackoverflow,
  IoMailOutline,
} from "react-icons/io5";
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="top-0 flex justify-between mx-auto max-w-6xl">
      <motion.div
        initial={{
          x: -550,
          opacity: 0.5,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex p-3 gap-x-7 ">
        <Link href="https://github.com/adityaBhattacharjee">
          <button className="hover:scale-125">
            <IoLogoGithub size={20} />
          </button>
        </Link>
        <Link href="https://instagram.com/im_aditya_bhattacharjee">
          <button className="hover:scale-125">
            <IoLogoInstagram size={20} />
          </button>
        </Link>
        <Link href="https://twitter.com/DoritosAdidas">
          <button className="hover:scale-125">
            <IoLogoTwitter size={20} />
          </button>
        </Link>
        <Link href="https://stackoverflow.com/users/20188829/aditya-bhattacharjee">
          <button className="hover:scale-125">
            <IoLogoStackoverflow size={20} />
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: +550,
          opacity: 0.5,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}>
        <Link href="/contacts">
          <button className="hover:scale-105 p-3 flex flex-row items-center space-x-1">
            <IoMailOutline size={20} />
            <p className="hidden md:inline-flex text-sm">Contact</p>
          </button>
        </Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;
