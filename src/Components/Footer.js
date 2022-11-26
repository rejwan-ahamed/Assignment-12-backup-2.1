import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="main-footer-section font-general bg-black w-full block p-8 grid-cols-5 text-white md:px-20 sm:grid lg:px-20 xl:px-40  py-20 lg:grid-col-6 xl:grid-cols-5">
        <h1 className="col-span-2 text-2xl font-[500] w-[100%] mb-8 sm:mb-0 sm:w-[60%] sm:col-span-1 lg:col-span-1 xl:col-span-2">
          GariDhako.com<br></br>Best Deals to find.
        </h1>
        <div className="links flex flex-col gap-1 font-[500] mb-8 sm:mb-0 sm:w-[60%]">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blogs</Link>
          <Link>Services</Link>
          <Link>Account</Link>
        </div>
        <div className="links flex flex-col gap-1 font-[500] mb-8 sm:mb-0 sm:w-[60%]">
          <Link>Our service area</Link>
          <Link>Help line</Link>
          <Link>Pickup points</Link>
          <Link>Return products</Link>
          <Link>Report problem</Link>
        </div>
        <div className="contacts font-[500] flex flex-col gap-2 text-xl lg:col-span-2 xl:col-span-1">
          <h1>garidhako@gmail.com</h1>
          <p>+880 12121231231</p>
          <p>Newyork-2342, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
