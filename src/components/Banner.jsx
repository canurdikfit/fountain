"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <section className="banner relative pt-36 md:mt-0">
      <div
        className="absolute xl:top-16 inset-x-0 flex items-center justify-center"
        data-aos="fade-up"
      >
        <video
          className="xl:max-h-[850px] lg:max-h-[650px] w-auto bg-blend-multiply opacity-60"
          src="/globe_animation.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <Image
        src="/banner_bg.png"
        className="object-cover opacity-30 object-top"
        size="100%"
        fill={true}
        alt="background-lines"
      />
      <Image
        src="/banner_gradient.png"
        className="object-cover object-top opacity-50"
        size="100%"
        fill={true}
        alt="background-light"
      />

      <div className="xl:h-[800px] lg:h-[720px] md:h-[750px] h-[550px] grid items-end justify-center lg:pt-52 pt-40 pb-20 relative z-10">
        <div className="grid md:gap-8 gap-5">
          <h1
            className="lg:text-7xl md:text-5xl text-3xl font-extrabold leading-normal text-center md:leading-normal lg:leading-normal tracking-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hey! You <br className="md:hidden" />
            <button className="bg-primary px-5 inline-block  py-2 rounded-2xl text-black font-bold">
              $FOUND
            </button>{" "}
            Us
          </h1>
          <p
            className="lg:max-w-2xl md:max-w-lg max-w-xs text-center mx-auto lg:text-xl text-sm lg:leading-normal text-white/50 mt-3"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            Merging{" "}
            <Link
              className="underline underline-offset-4"
              href="https://twitter.com/search?q=%23Edufi&src=hashtag_click"
            >
              #Edufi
            </Link>{" "}
            and{" "}
            <Link
              className="underline underline-offset-4"
              href="https://twitter.com/search?q=%23Marketfi&src=hashtag_click"
            >
              #Marketfi
            </Link>{" "}
            to onboard the next billion users. Lay the foundation of your crypto
            journey with us. Education is the key
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
