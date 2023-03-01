import Image from 'next/image';
import Footer from 'src/sections/Footer';
import Navbar from 'src/sections/Navbar';

export default function Home() {    
  return (
    <main className='bg-[#2E3A59] overflow-hidden'>
      <Navbar />
      <div className='p-12 relative'>
            <div className='text-[#18BC9C]'>
                <h1 className="font-extrabold my-8 text-[25px] md:text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">DATA POLICY.</h1>

            </div>
        </div>
      <Footer />
    </main>
  )
};
