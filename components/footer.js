import React from "react";

const date = new Date()
const year = date.getFullYear();

function Footer() {
  return (
    <div className='h-auto mt-40 bottom-0'>
      <footer className='p-6 shadow border-t-2 max-w-7xl border-slate-800 mx-auto text-slate-400 text-center grid grid-cols-1'>
          © {year} Aditya Bhattacharjee. All Rights Reserved.
          <span className="mt-3">aditya.developer001@gmail.com</span>
      </footer>
    </div>
  );
}

export default Footer;
