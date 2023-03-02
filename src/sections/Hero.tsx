import styles from 'styles';
import Link from "next/link";

function Hero() {
  return (
    <section className={`${styles.sections}`} id='hero'>
      <h1 className="font-extrabold my-8 md:my-24 text-[40px] md:text-[65px] lg:text-[90px] leading-[50px] md:leading-[70px] lg:leading-[100px] text-[#18BC9C]">Hi, <br/> I´m Paul. <br/> blockchain developer.</h1>
      <br/>

      <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/paul-simroth/" target="_blank">
              <p className='py-2 cursor-pointer font-bold text-[23px] md:text-[26px] leading-[30px] text-[#F8D1CC] hover:scale-110'>LinkedIn</p>
            </Link>
            <Link href="https://github.com/PaulSimroth" target="_blank">
              <p className='py-2 cursor-pointer font-bold text-[23px] md:text-[26px] leading-[30px] text-[#F8D1CC] hover:scale-110'>GitHub</p>
            </Link>
          </div>
      <h2 className="font-extrabold md:my-12 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Solidity / JavaScript / TypeScript / React.js / CSS / HTML</h2>  
      <br/>
    </section>
  )
};

export default Hero;