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
              <Image src="/foundation.svg" height={80} width={80} alt="Logo" />{" "}
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
