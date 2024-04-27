const ProtocolCard = ({
  title,
  description,
  styleAttribute,
  glass,
  length,
}) => {
  return (
    <div
      className={` ${styleAttribute} backdrop-blur-3xl bg-[#030303] pt-12 md:pb-16 pb-10 md:px-9 px-6 rounded-3xl before:rounded-3xl relative 
      before:bg-gradient-to-b before:from-black before:to-[rgba(102,102,102,0.53)] before:absolute before:-inset-[1px] before:-z-30 after:absolute after:bg-[#030303] after:inset-0 after:-z-20 after:rounded-3xl`}
      data-aos="fade-up"
      data-aos-easing="ease-in-back"
      data-aos-delay={`${length}00`}
      data-aos-duration="1200"
      data-aos-offset="0"
    >
      <div className="absolute -z-10 h-full w-full rounded-3xl overflow-hidden top-0 left-0">
        <div
          className={` ${glass} absolute flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-[rgba(212,245,0,0.6)] after:via-[rgba(212,245,0,0.6)] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-[#d4f5001d] after:dark:via-[#d4f5004d] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`}
        ></div>
      </div>
      <button className="border border-white/20 rounded-2xl flex items-center w-fit py-3.5 px-8 bg-gradient-to-b from-white/15 to-white/0 mb-12">
        <span className="opacity-80">{title}</span>
      </button>
      <p className="md:text-lg text-white mt-14">{description}</p>
    </div>
  );
};

export default ProtocolCard;
