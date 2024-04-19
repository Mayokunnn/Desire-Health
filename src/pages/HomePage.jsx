import Hero from "../components/LandingPage/Hero";
import Main from "../components/LandingPage/Main";
import Navbar from "../components/LandingPage/Navbar";
import SectionTitle from "../components/LandingPage/SectionTitle";
import Section from "../components/LandingPage/Section";
import About from "../components/LandingPage/About";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import Footer from "../components/LandingPage/Footer";
import Services from "../components/LandingPage/Services";


export default function HomePage() {

  return (
    <Main>
      <div>
        <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-hero-desktop bg-cover bg-center bg-no-repeat ">
          <Navbar pageType="header" />
          <Hero />
        </div>
        <Services/>
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
