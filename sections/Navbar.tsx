'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from "next/link";

function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='p-8 relative bg-[#2E3A59]'
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className='mx-auto flex justify-between items-center gap-8'>
      <img
        src="/logo.png"
        alt="logo"
        className="w-[50px] h-[50px] object-contain"
      />
      <h2 className="font-extrabold text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">
        Paul´s Portfolio
      </h2>
      <button type="button" className="flex items-center h-fit border-2 border-[#E5E5E5] py-4 px-6 bg-[#F8D1CC] rounded-[32px] gap-[12px] hover:scale-110">
        <Link href="/" className="font-bold text-[16px] text-[#18BC9C]">|CONTACT ME!</Link>
      </button>
    </div>
  </motion.nav>
  )
};

export default Navbar;