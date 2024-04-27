import Image from "next/image";
import AppDownload from "./ui/AppDownload";

function AppDemo() {
  return (
    <section className="pt-5">
      <div className="w-full grid justify-center text-center border border-white/10 bg-white/[1%] pt-24 pb-16 rounded-3xl px-4">
        <button className="border border-white/20 rounded-full flex items-center w-fit mx-auto py-4 px-8 bg-gradient-to-b from-white/15 to-white/0 mb-12">
          <span className="opacity-80">Happy Mining!!!</span>
        </button>
        <h2
          className="text-2xl md:text-4xl xl:text-5xl font-bold xl:leading-snug md:leading-snug leading-snug"
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          {" "}
          Download and Participate in <br />
          our Airdrop Mining
        </h2>
        <div
          className="max-w-3xl md:h-[500px] h-[300px] relative md:my-5 grid grid-cols-3 gap-5 items-center"
          id="download"
        >
          <div className="h-full relative">
            <Image
              src="/left.png"
              className="object-contain"
              size="100%"
              fill={true}
              alt="iphone"
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-offset="0"
            />
          </div>
          <div className="h-full relative">
            <Image
              src="/center.png"
              className="object-contain"
              size="100%"
              fill={true}
              alt="iphone"
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-offset="0"
            />
          </div>
          <div className="h-full relative">
            <Image
              src="/right.png"
              className="object-contain"
              size="100%"
              fill={true}
              alt="iphone"
              data-aos="fade-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-offset="0"
            />
          </div>
        </div>
        <AppDownload />
      </div>
    </section>
  );
}

export default AppDemo;
