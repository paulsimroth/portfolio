import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Hero from 'sections/Hero';
import Navbar from 'sections/Navbar';
import Footer from 'sections/Footer';
import Info from 'sections/Info';
import Projects from 'sections/Projects';
import Education from 'sections/Education';
import Contact from 'sections/Contact';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {    
  return (
    <main>
      <div>
        <p>Color schemes</p>
        <div className='bg-[#2E3A59]'>Nav</div>
        <div className='bg-[#F5F5F5]'>Body</div>
        <div className='bg-[#34495E]'>Text</div>
        <div className='bg-[#E5E5E5]'>Borders</div>
        <div className='bg-[#F8D1CC]'>CTA</div>
        <div className='bg-[#18BC9C]'>Accent</div>
      </div>
      <Navbar />
      <Hero />

      <Info />
      <Projects />

      <Education />
      <Contact />

      <Footer />
    </main>
  )
}
