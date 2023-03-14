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
      className='p-12 relative bg-[#2E3A59] z-10'
    >
      <div className='mx-auto flex justify-between items-center gap-4'>
        <Link href="/" className='flex-1 cursor-pointer'>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[25px] h-[25px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px] object-contain"
          />
        </Link>

        <div className="md:flex items-center justify-around font-bold space-x-12 z-2">
          <a href="/#about" className="text-[12px] md:text-[20px] lg:text-[30px] text-[#18BC9C] hover:scale-110">About me</a>
          <a href="/#projects" className="text-[12px] md:text-[20px] lg:text-[30px] text-[#18BC9C] hover:scale-110">Projects</a>
          <a href="/#education" className="text-[12px] md:text-[20px] lg:text-[30px] text-[#18BC9C] hover:scale-110">Education</a>
          <a href="/#contact">
            <button type="button" className={styles.button}>
              <span className="font-bold text-[12px] md:text-[16px] text-[#F8D1CC]">|CONTACT ME!</span>
            </button>
          </a>
        </div>

      </div>
    </motion.nav>
  )
};

export default Navbar;