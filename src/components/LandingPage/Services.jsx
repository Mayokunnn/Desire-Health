import Slider from "react-slick";
import { servicesArray } from "../../utils/helpers";
import ServicesCard from "./ServicesCard";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  
  ],
};

export default function Services() {
  return (
    <Section>
      <SectionTitle title={"our services"} side={"right"} />
      <div className="xl:hidden w-[90vw] mx-auto">
        <Slider {...settings}>
          {servicesArray.map((serv, i) => (
            <ServicesCard
              key={i}
              icon={serv.icon}
              title={serv.title}
              content={serv.content}
            />
          ))}
        </Slider>
      </div>
      <div className="hidden xl:grid xl:grid-cols-3 gap-6 xl:gap-2 m-2 md:m-5">
        {servicesArray.map((serv, i) => (
          <ServicesCard
            key={i}
            icon={serv.icon}
            title={serv.title}
            content={serv.content}
          />
        ))}
      </div>
      {/* 
      <div className="hidden lg:block h-[80vh] ">
        <div className="grid grid-cols-3 justify-center gap-6">
          {servicesArray.map((serv, i) => (
            <ServicesCard
              key={i}
              icon={serv.icon}
              title={serv.title}
              content={serv.content}
            />
          ))}
        </div>
        </div> */}
    </Section>
  );
}
