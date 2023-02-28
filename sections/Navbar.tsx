'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-[#2E3A59] text-[#18BC9C]`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/logo.svg"
        alt="logo"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[35px] leading-[30px] text-[#18BC9C]">
      Paul´s Portfolio
      </h2>
      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F8D1CC] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[16px] text-white">|CONTACT ME!</span>
        </button>
    </div>
  </motion.nav>
  )
};

export default Navbar;