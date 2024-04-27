import Image from "next/image";

const Card = ({ icon, title, description, length }) => {

  return (
    <div
      className="bg-white/5 pt-12 md:pb-16 pb-10 md:px-11 px-6 rounded-3xl"
      data-aos="fade-up"
      data-aos-easing="ease-in-back"
      data-aos-delay={`${length}00`}
      data-aos-duration="1200"
      data-aos-offset="0"
    >
      <div className="relative h-20 mb-16 ">
        <Image
          src={icon}
          alt="icon"
          size="100%"
          fill={true}
          className="object-contain"
        />
      </div>
      <div>
        <h6 className="font-medium text-base md:mb-4 mb-2 text-[#E4E4E7]">
          {title}
        </h6>
        <p className="text-sm text-[#A1A1AA]/80">{description}</p>
      </div>
    </div>
  );
};

export default Card;
