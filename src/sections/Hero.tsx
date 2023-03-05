import styles from 'styles';
import Link from "next/link";

function Hero() {
  return (
    <section className={`${styles.sections}`} id='hero'>
      
      <h1 className='font-extrabold my-2 md:my-6 text-[44px] sm:text-[60px] md:text-[100px] lg:text-[130px] lg:leading-[159px] md:leading-[115px] sm:leading-[75px] leading-[65px] text-[#18BC9C]'>
        Hi, <br/> I´m Paul.
      </h1>
      <h2 className='font-extrabold md:mb-8 text-[40px] md:text-[65px] lg:text-[90px] leading-[50px] md:leading-[70px] lg:leading-[100px] text-[#18BC9C]'>
        blockchain developer.
      </h2>
      <br/>

      <div className="flex gap-4 md:gap-8">
        <Link href="https://www.linkedin.com/in/paul-simroth/" target="_blank">
            <img alt="linkedin" src="linkedin.svg" className='py-2 md:w-[50px] md:h-[50px] object-contain cursor-pointer hover:scale-110' />
        </Link>
        <Link href="https://github.com/PaulSimroth" target="_blank">
          <img alt="github" src="github.svg" className='py-2 md:w-[50px] md:h-[50px] object-contain cursor-pointer hover:scale-110' />
        </Link>
      </div>

      <h2 className="font-extrabold md:my-12 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Smart Contracts, DApps and more...</h2>  
      <br/>
    </section>
  )
};

export default Hero;