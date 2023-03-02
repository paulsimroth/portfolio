'use client';

import { motion } from 'framer-motion';
import styles from 'styles';
import { navVariants } from 'utils/motion';
import Link from "next/link";

function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='p-12 relative bg-[#2E3A59]'
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className='mx-auto flex justify-between items-center gap-4'>
      <Link href="/" className='cursor-pointer'>
        <img
          src="/logo.png"
          alt="logo"
          className="w-[25px] h-[25px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px] object-contain"
        />
      </Link>
      <Link href="/" className='cursor-pointer'>
        <h2 className="font-extrabold text-[22px] md:text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">
          Paul´s Portfolio
        </h2>
      </Link>
      <a href="/#contact">
        <button type="button" className="flex items-center h-fit border-2 border-[#E5E5E5] py-4 px-6 bg-[#18BC9C] rounded-[32px] gap-[12px] hover:scale-110">
          <span className="font-bold text-[12px] md:text-[16px] text-[#F8D1CC]">|CONTACT ME!</span>
        </button>
      </a>
    </div>
  </motion.nav>
  )
};

export default Navbar;