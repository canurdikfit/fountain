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
              <svg
                width="45"
                height="45"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0556 7.85742C6.34195 15.1955 0 26.7842 0 39.8965C0 45.751 1.28445 51.3247 3.57236 56.3772L16.0556 49.1594V7.85742Z"
                  fill="url(#paint0_linear_6331_6615)"
                />
                <path
                  d="M36.1257 37.5728V0C31.8709 0.441089 27.8169 1.52376 24.084 3.16782V44.55L36.1257 37.5728Z"
                  fill="url(#paint1_linear_6331_6615)"
                />
                <path
                  d="M40.1386 44.5098L7.58594 63.2761C10.0344 66.6444 12.9646 69.6518 16.3362 72.0979L52.1803 51.487L40.1386 44.5098Z"
                  fill="url(#paint2_linear_6331_6615)"
                />
                <path
                  d="M44.1562 23.7012V37.5754L76.7089 56.3418C78.3947 52.6126 79.5186 48.6027 80.0003 44.3923L44.1562 23.7012Z"
                  fill="url(#paint3_linear_6331_6615)"
                />
                <path
                  d="M24.3672 76.7926C29.224 78.8377 34.5223 80.0006 40.1418 80.0006C53.5482 80.0006 65.3892 73.3842 72.6944 63.3194L60.2112 56.1016L24.3672 76.7926Z"
                  fill="url(#paint4_linear_6331_6615)"
                />
                <path
                  d="M79.9602 35.1267C77.7525 16.5609 62.861 1.84455 44.1562 0V14.4356L79.9602 35.1267Z"
                  fill="url(#paint5_linear_6331_6615)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6331_6615"
                    x1="8.02778"
                    y1="7.85742"
                    x2="8.02778"
                    y2="56.3772"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6331_6615"
                    x1="30.1048"
                    y1="0"
                    x2="30.1048"
                    y2="44.55"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_6331_6615"
                    x1="29.8831"
                    y1="44.5098"
                    x2="29.8831"
                    y2="72.0979"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_6331_6615"
                    x1="62.0783"
                    y1="23.7012"
                    x2="62.0783"
                    y2="56.3418"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_6331_6615"
                    x1="48.5308"
                    y1="56.1016"
                    x2="48.5308"
                    y2="80.0006"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_6331_6615"
                    x1="62.0582"
                    y1="0"
                    x2="62.0582"
                    y2="35.1267"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.291667" stop-color="white" />
                    <stop offset="1" stop-color="#414141" />
                  </linearGradient>
                </defs>
              </svg>
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
