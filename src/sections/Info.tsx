import styles from 'styles';

function Info() {
  return (
    <section className={`${styles.sections}`} id='about'>
      <h1 className="font-extrabold my-8 text-[25px] md:text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">About me.</h1>
      <p>
        I am a passionate self taught blockchain developer from Austria, 
        exploring the world of blockchain and it´s future in our everyday lives.
      </p>
      <p>
        MY core skills are  Smart Contracts  as well as DApps and Websites, just like this one, using JavaScript, HTML, CSS or mostly React.js and Next.js. 
        Besides that I am familiar with other tools, a list of which you can find on this page.
        I am always eager to learn, expand my skillset and keep up with technology.
      </p>
      <p>
        In addition to my technical skills I have an academic background in history and nearly 8 years of working experience in the aviation sector. 
        Those two areas shaped my understanding of technology and give me a unique perspective on it.
        With my interdisciplinary approach to problem-solving and critical thinking skills I am a great asset to any team.
      </p>
      <p>
        If you're looking for a blockchain developer or want to work on a new project, I would love to hear from you! 
        <br/>
        <strong>Reach out to me to discuss how we can work together to explore the possibilities and future of blockchain technology!</strong>
      </p>
    </section>
  )
};

export default Info;