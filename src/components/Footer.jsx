import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="lg:mt-72 md:mt-64 mt-56 mb-20">
      <section>
        <div className="grid md:grid-cols-2 text-center gap-y-10 md:gap-0 mx-auto items-start justify-center md:justify-between">
          <div>
            <Link href="/" className="flex gap-6 items-center">
              <svg
                width="80"
                height="80"
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
              <span className="text-2xl font-semibold">Foundation</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="md:ms-auto grid gap-6 w-fit text-left md:text-center">
              <h4 className="text-2xl font-semibold">Community</h4>
              <div className="flex md:items-center gap-5 bg-[#19191A] border border-white/25 justify-evenly py-4 px-3 rounded-full ">
                <Link
                  href="/"
                  className="text-4xl text-[#B6B6B6] hover:text-primary ease-in transition-all duration-300"
                >
                  <FaTelegramPlane />
                </Link>
                <Link
                  href="/"
                  className="text-4xl text-[#B6B6B6] hover:text-primary ease-in transition-all duration-300"
                >
                  <FaTwitter />
                </Link>
              </div>
              <Link
                href="/"
                className="text-sm hover:text-primary ease-in transition-all duration-300"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
          <p className="text-sm mt-20 text-left">
            Foundation 2024. All rights reserved{" "}
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
