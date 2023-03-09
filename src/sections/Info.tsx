import styles from 'styles';

function Info() {
  return (
    <section className={styles.sections} id='about'>
      <h1 className={styles.sectionHeading}>About me.</h1>
      <div className='flex flex-col md:flex-row space-around'>
        <div className=' md:w-7/12'>
          <p className={styles.text}>
            I am a passionate self taught blockchain developer from Austria, 
            exploring the world of blockchain and it´s future in our everyday lives.
            Welcome to my page!
          </p>
          <p className={styles.text}>
            My core skills are  Smart Contracts as well as DApps and Websites, just like this one, using JavaScript, HTML, CSS or mostly React.js and Next.js. 
            Besides that I am familiar with other tools, a list of which you can find on this page.
            I am always eager to learn, expand my skillset and keep up with technology.
          </p>
          <p className={styles.text}>
            In addition to my technical skills I have an academic background in history and nearly 8 years of working experience in the aviation sector. 
            Those two areas shaped my understanding of technology and give me a unique perspective on it.
            With my interdisciplinary approach to problem-solving and critical thinking skills I am a great asset to any team.
          </p>
          <p className={styles.text}>
            If you're looking for a blockchain developer or want to work on a new project, I would love to hear from you! 
            <br/>
            <strong>Reach out to me to discuss how we can work together to explore the possibilities and future of blockchain technology!</strong>
          </p>
        </div>
        <div className=' md:w-5/12 mx-6 p-6 my-8 glassmorphism rounded-[25px]'>
          SKILL ITEMS WILL GO HERE!
        </div>
      </div>
    </section>
  )
};

export default Info;