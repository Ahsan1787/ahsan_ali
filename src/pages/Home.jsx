import React,{useEffect} from 'react'
import PortfolioCard from '../component/PortfolioCard'
import HomeCard from '../component/HomeCard'
import AboutCard from '../component/AboutCard'
import SkillSection from '../component/SkillSection'
import ProjectSection from '../component/ProjectSection'
import ContactSection from '../component/ContactSection'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../component/Footer'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])
  
  return (
    <div className='w-[80vw]  m-auto relative'>
     <PortfolioCard/>
     <HomeCard/>
     <AboutCard/>
     <SkillSection/>
     <ProjectSection/>
     <ContactSection/>
     <Footer/>
    </div>
  )
}

export default Home
