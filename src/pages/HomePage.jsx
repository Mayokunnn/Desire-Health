import Hero from '../components/Hero'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import Section from '../components/Section'
import {servicesArray} from '../utils/helpers'
import ServicesCard from '../components/ServicesCard'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'



export default function HomePage() {
    
  return (
    <Main styles='bg-organizational-bg-desktop bg-contain bg-no-repeat '>
        <Navbar/>
        <div>
            <Hero/>
            <Section>
                <SectionTitle title={'our services'} side={'right'}/>
                <div className='grid grid-cols-3 gap-2 m-5'>
                    {servicesArray.map((serv, i) => <ServicesCard key={i} icon={serv.icon} title={serv.title} content={serv.content} /> )}
                </div>
            </Section>
            <Section color={'grey'} type='about'>
                <SectionTitle title={'about us'} side={'left'}/>
                <About/>
            </Section>
            <Section>
                <SectionTitle title={'why choose us'} side={'right'}/>
                <WhyChooseUs/>
            </Section>
            <Section color={'grey'} type={'footer'} >
                <Footer/>
            </Section>
        </div>
    </Main>
  )
}
