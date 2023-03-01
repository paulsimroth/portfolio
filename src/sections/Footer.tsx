'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from 'styles';
import { footerVariants } from 'utils/motion';

function Footer() {
  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className='p-8 relative bg-[#2E3A59]'
  >
    <div className="footer-gradient" />
    <div className='mx-auto flex flex-col gap-8'>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <Link href="/#contact" scroll={false}>
          <button type="button" className="flex items-center h-fit border-2 border-[#E5E5E5] py-4 px-6 bg-[#F8D1CC] rounded-[32px] gap-[12px] hover:scale-110">
            <span className="font-bold text-[12px] md:text-[16px] text-[#18BC9C]">|CONTACT ME!</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-[#18BC9C]">Paul Simroth</h4>
          <p className="font-normal text-[14px] text-[#18BC9C] opacity-50">Copyright © 2023.</p>
          <div className="flex flex-row">
            <Link href='/imprint' target="_blank"><p className='p-2 cursor-pointer font-bold text-[16px] text-[#18BC9C] hover:scale-110'>Imprint</p></Link>
            <Link href="/data" target="_blank"><p className='p-2 cursor-pointer font-bold text-[16px] text-[#18BC9C] hover:scale-110'>Data Policy</p></Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/paul-simroth/" target="_blank">
              <p className='p-2 cursor-pointer font-bold text-[16px] text-[#18BC9C] hover:scale-110'>LinkedIn</p>
            </Link>
            <Link href="https://github.com/PaulSimroth" target="_blank">
              <p className='p-2 cursor-pointer font-bold text-[16px] text-[#18BC9C] hover:scale-110'>GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
};

export default Footer;