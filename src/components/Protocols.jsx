import ProtocolCard from "./ui/ProtocolCard";


function Protocols() {
  return (
    <section className="lg:pt-36 md:pt-24 pt-20">
      <h3 className="lg:text-6xl text-3xl md:text-5xl lg:leading-tight md:leading-tight font-medium" data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-offset="0">
        Connect with Web3 <br />
        brands through our <br />
        permissionless protocol
      </h3>
      <div className="grid md:gap-8 gap-5 lg:mt-36 md:mt-24 mt-20">
        <div className="grid gap-5 md:gap-8 lg:grid-cols-3">
          {contentRowOne.map((items, idx) => (
            <ProtocolCard
              styleAttribute={`${idx === 1 ? "lg:col-span-2" : "col-span-1"} ${
                idx === 2 ? "lg:col-span-2" : "col-span-1"
              }`}
              glass={`${idx === 0 && "-top-10 rotate-180"} ${
                idx === 1 && "-top-10  rotate-90"
              } ${idx === 2 && "hidden"} ${
                idx === 3 && "-bottom-10 right-0 rotate-180"
              }`}
              title={items.title}
              length={idx}
              description={items.description}
              key={idx}
            ></ProtocolCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Protocols;

const contentRowOne = [
  {
    title: "Spaces",
    description:
      "Projects are welcome to create spaces and host campaigns tailored to their needs",
  },
  {
    title: "Regular Tasks",
    description:
      "We welcome all web3 tutors and content creators that will be working with us to provide the best educational content. We only want the best, doesnt matter if you have 0 followers on X, if you are good people will connect with you",
  },
  {
    title: "Airdrops",
    description:
      "We take every project coming onboard seriously, as every Airdrops provide means four our users to generate liquidty they can use to start their journey in the crypto sector",
  },
  {
    title: "Impressions",
    description: (
      <span>
        We will be introducing a pro version of farming, to support project
        leveraging our platform. <br /> <br /> “It's fine to “Engagement farm”
        with Compelling content, but not with spam - By Elon Musk
      </span>
    ),
  },
];

const contentRowTwo = [];
