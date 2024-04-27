import Card from "./ui/Card";
import Star from "../assets/star.svg";
import Triangle from "../assets/Triangles.svg";
import Union from "../assets/Union.svg";

function Transactions() {
  return (
    <section className="pt-20">
      <div className="w-full grid justify-center text-center border border-white/10 bg-white/[1%] pt-20 pb-9 rounded-3xl md:px-10 px-5">
        <h2
          className="bg-gradient-to-br bg-clip-text from-white to-[#71717A] text-transparent text-2xl md:text-4xl xl:text-5xl font-bold xl:leading-snug md:leading-snug leading-snug max-w-4xl mx-auto"
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          LEARN REFER AND EARN
        </h2>
        <p
          className="text-[#A1A1AA]/80 mt-5 md:text-xl text-sm"
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          Each user you invite and their will grow your net worth. Forever
        </p>
        <div className="grid lg:grid-cols-3 gap-5 mt-16">
          {cardTemplate.map((items, idx) => (
            <Card
              key={idx}
              icon={items.icon}
              length={idx}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transactions;

const cardTemplate = [
  {
    icon: Union,
    title: "Learn About Blockchain",
    description:
      "Working with great Tutors and content creators to provide newbies with basic ideas or web3 & Blockchain",
  },
  {
    icon: Triangle,
    title: "Refer new friends",
    description:
      "Refer new friends especially newbies to foundation, where they can learn and understand the basics of blockchain",
  },
  {
    icon: Star,
    title: "Earn and Explore",
    description:
      "Earn liquidity from different airdrops and explore the crypto market",
  },
];
