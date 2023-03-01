import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'src/sections/Hero';
import Navbar from 'src/sections/Navbar';
import Footer from 'src/sections/Footer';
import Info from 'src/sections/Info';
import Projects from 'src/sections/Projects';
import Education from 'src/sections/Education';
import Contact from 'src/sections/Contact';

export default function Home() {    
  return (
    <main className='bg-[#34495E] overflow-hidden'>

      <Navbar />
      <Hero />

      <Info />
      <Projects />

      <Education />
      <Contact />

      <Footer />      
      <div>
        <p>Color schemes</p>
        <div className='bg-[#2E3A59]'>Nav</div>
        <div className='bg-[#F5F5F5]'>Body</div>
        <div className='bg-[#34495E]'>Text</div>
        <div className='bg-[#E5E5E5]'>Borders</div>
        <div className='bg-[#F8D1CC]'>CTA</div>
        <div className='bg-[#18BC9C]'>Accent</div>
      </div>
    </main>
  )
}
