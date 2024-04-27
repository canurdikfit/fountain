"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="fixed w-full z-50 lg:top-8 top-0">
      <div
        className="mx-auto py-2 px-10 sm:px-16 lg:px-2 lg:rounded-full border border-[#31363D] max-w-[1000px] w-full bg-[#19191A] drop-shadow-lg"
        data-aos="fade-down"
        data-aos-easing="ease-in-back"
        data-aos-duration="1200"
        data-aos-offset="0"
      >
        <div className="flex items-center justify-between">
          <div className="uppercase text-sm sm:w-1/3 text-white">
            <Link href="/" className="flex gap-3 items-center">
              <Image src="/foundation.svg" height={45} width={45} alt="Logo" />{" "}
              <span className="text-xl font-semibold">Foundation</span>
            </Link>
          </div>
          {clicked ? (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <FaBarsStaggered />
            </div>
          ) : (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <IoClose />
            </div>
          )}
          <div className="hidden lg:block w-full">
            <div className="flex items-center justify-between">
              <ul className="flex mx-auto w-fit items-center justify-start xl:gap-14 gap-11">
                {NavLinks.map((link, key) => (
                  <li key={key} className="text-[#B6B6B6] font-medium">
                    <Link
                      className="hover:opacity-100 hover:text-primary"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-7">
                <Link
                  href="#download"
                  className="px-6 lg:text-lg py-2.5 border border-white/25 rounded-full back"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
          <div className={!clicked ? "navbar_sm" : "navbar_lg"}>
            <div className="flex flex-col sm:justify-start justify-between h-full pt-24 px-5 sm:px-10 pb-20">
              <ul className="flex flex-col items-center justify-start gap-5">
                {NavLinks.map((link, key) => (
                  <li
                    key={key}
                    className="text-sm text-[#B6B6B] text-left w-full font-medium"
                  >
                    <Link
                      className="hover:opacity-100 hover:bg-primary w-full px-4 py-3 rounded-md block"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-7 mt-14 px-4">
                <Link
                  href="#download"
                  className="px-6 lg:text-lg py-2.5 border border-white/25 rounded-full w-full text-center back"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const NavLinks = [
  {
    name: "Tokenomics",
    url: "/",
  },
  {
    name: "Docs",
    url: "/",
  },
];
