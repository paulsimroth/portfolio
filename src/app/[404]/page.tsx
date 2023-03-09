'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from 'src/sections/Footer';
import Navbar from 'src/sections/Navbar';

export default function Home() {    
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <div className='p-12 relative'>
            <div className='flex flex-col items-center text-[#18BC9C]'>
                <h1 className="font-extrabold my-8 text-[35px] md:text-[40px] lg:text-[55px] leading-[30px]">404 | Looks like you took a wrong exit</h1>
                <p className="font-bold my-6 text-[30px] md:text-[35px] lg:text-[40px] leading-[30px]">Use the Navigation at the Top</p>
                <p className="font-bold my-6 text-[30px] md:text-[35px] lg:text-[40px] leading-[30px]">or click the button below to return</p>
                <div className="my-8 flex flex-col items-center">
                  <Link href="/" className='p-2 cursor-pointer hover:scale-110'>
                    <button type="button" className="flex items-center h-fit border-2 border-[#E5E5E5] py-4 px-6 bg-[#18BC9C] rounded-[25px] hover:scale-105">
                      <span className="font-bold text-[30px] md:text-[35px] text-[#F8D1CC]">HOME</span>
                    </button>
                  </Link>
                </div>
            </div>
        </div>
      <Footer />
    </main>
  )
};
