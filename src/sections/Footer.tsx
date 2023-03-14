'use client';

import Link from 'next/link';
import styles from 'styles';
import { footerVariants } from 'utils/motion';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className='p-12 relative bg-[#2E3A59]'
    >

      <div className='mx-auto flex flex-col gap-8'>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <a href="/#contact">
            <button type="button" className="flex items-center h-fit border-2 border-[#E5E5E5] py-4 px-6 bg-[#18BC9C] rounded-[32px] gap-[12px] hover:scale-110">
              <span className="font-bold text-[12px] md:text-[16px] text-[#F8D1CC]">|CONTACT ME!</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4 md:gap-8">

            <div className="flex gap-4 md:gap-8">
              <Link href="https://www.linkedin.com/in/paul-simroth/" target="_blank">
                <img alt="linkedin" src="linkedin.svg" className='py-2 md:w-[40px] md:h-[40px] object-contain cursor-pointer hover:scale-110' />
              </Link>
              <Link href="https://github.com/PaulSimroth" target="_blank">
                <img alt="github" src="github.svg" className='py-2 md:w-[40px] md:h-[40px] object-contain cursor-pointer hover:scale-110' />
              </Link>
            </div>

            <p className="font-normal text-[14px] text-[#18BC9C] opacity-50">Copyright © 2023, Paul Simroth</p>

            <div className="md:flex items-center justify-around font-bold space-x-6">
              <Link href="/imprint" className="text-[12px] lg:text-[20px] text-[#18BC9C] hover:scale-110">Imprint</Link>
              <Link href="/data" className="text-[12px] lg:text-[20px] text-[#18BC9C] hover:scale-110">Data Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
};

export default Footer;