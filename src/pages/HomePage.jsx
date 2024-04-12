import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Section from "../components/Section";
import { servicesArray } from "../utils/helpers";
import ServicesCard from "../components/ServicesCard";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";


export default function HomePage() {



  return (
    <Main>
      <div>
        <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-hero-desktop bg-cover bg-center bg-no-repeat ">
          <Navbar pageType="header" />
          <Hero />
        </div>
        <Section>
          <SectionTitle title={"our services"} side={"right"} />
          <div className="w-full lg:hidden scroll-parent flex gap-3 h-[30vh] ">
            <div className="scroll-element flex primary  gap-6 m-2 lg:m-5">
              {servicesArray.map((serv, i) => (
                <ServicesCard
                  key={i}
                  icon={serv.icon}
                  title={serv.title}
                  content={serv.content}
                />
              ))}
            </div>
            <div className="scroll-element flex secondary lg:grid lg:grid-cols-3 gap-6 lg:gap-2 m-2 md:m-5">
              {servicesArray.map((serv, i) => (
                <ServicesCard
                  key={i}
                  icon={serv.icon}
                  title={serv.title}
                  content={serv.content}
                />
              ))}
            </div>
          </div>

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
          </div>
        </Section>
        <Section color={"grey"} type="about">
          <SectionTitle title={"about us"} side={"left"} />
          <About />
        </Section>
        <Section>
          <SectionTitle title={"why choose us"} side={"right"} />
          <WhyChooseUs />
        </Section>
        <Section color={"grey"} type={"footer"}>
          <Footer />
        </Section>
      </div>
    </Main>
  );
}
