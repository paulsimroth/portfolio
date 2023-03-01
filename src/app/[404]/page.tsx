import Image from 'next/image';
import Link from 'next/link';
import Footer from 'src/sections/Footer';
import Navbar from 'src/sections/Navbar';

export default function Home() {    
  return (
    <main className='bg-[#2E3A59] overflow-hidden'>
      <Navbar />
      <div className='p-12 relative'>
            <div className='flex flex-col items-center text-[#18BC9C]'>
                <h1 className="font-extrabold my-8 text-[35px] md:text-[40px] lg:text-[55px] leading-[30px]">404 | Looks like you took a wrong exit</h1>
                <p className="font-bold my-8 text-[35px] md:text-[40px] lg:text-[55px] leading-[30px]">Click the link to go return</p>
                <div className="my-8 flex flex-col items-center font-bold text-[35px] md:text-[40px] lg:text-[55px]">
                  <Link href="/" className='p-2 cursor-pointer hover:scale-110'>HOME</Link>
                </div>
            </div>
        </div>
      <Footer />
    </main>
  )
};
