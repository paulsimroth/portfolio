'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className='py-8 relative bg-[#2E3A59]'
  >
    <div className="footer-gradient" />
    <div className='mx-auto flex flex-col gap-8'>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F8D1CC] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[16px] text-[#18BC9C]">|CONTACT ME!</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Paul Simroth</h4>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2023.</p>
          <div className="flex gap-4">
            Socials
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
};

export default Footer;