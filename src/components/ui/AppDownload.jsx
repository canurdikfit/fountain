import Link from "next/link";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppDownload = () => {
  return (
    <div className="grid justify-center" >
      <h4 className="text-[#565656] text-sm md:text-lg lg:text-xl">
        Download App From
      </h4>
      <div className="grid md:grid-cols-2 lg:flex items-center gap-5 md:gap-8 mt-7 md:mt-10">
        <Link
          href="/"
          className="flex items-center gap-4 bg-[#0B0B0B] py-4 px-7 rounded-xl hover:bg-[#34A853] transition-all ease-linear duration-500"
        >
          <FaGooglePlay className="text-2xl md:text-3xl" />
          <div className="grid text-left justify-start">
            <span className="text-xs">Get it on</span>
            <span className="text-base md:text-xl">Google Play</span>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-4 bg-[#0B0B0B] py-4 px-7 rounded-xl  border border-white/0 hover:border-white hover:bg-black transition-all ease-linear duration-500"
        >
          <FaApple className="text-2xl md:text-3xl" />
          <div className="grid text-left justify-start">
            <span className="text-xs">Download on the</span>
            <span className="text-base md:text-xl">Apple Store</span>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-full items-center gap-4 bg-[#0B0B0B] py-4 px-7 rounded-xl  border border-white/0 hover:border-white hover:bg-black transition-all ease-linear duration-500"
        >
          <span className="text-base md:text-xl">Download APK</span>
        </Link>
      </div>
    </div>
  );
};

export default AppDownload;
