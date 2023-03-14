import styles from 'styles';

function Contact() {
    return (
        <section className={`${styles.sections}`} id='contact'>

            <h1 className={styles.sectionHeading}>Contact Me!</h1>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-2/3 h-2/3 m-2'>
                    <p className={styles.text}>
                        I am open to questions, opportunities and collaboration in projects.
                        Please, do not hesitate to contact me using the form below.
                        Let me know how we can work together!
                    </p>
                    <p className={styles.text}>By clicking the SEND button you confirm that you have seen and accepted the Privacy Policy!</p>
                </div>
                <div className='w-full lg:w-2/3 m-2 flex flex-col my-4'>
                    <form>
                        <ul>
                            <li className='m-2'>
                                <div className='flex flex-row justify-between'>

                                    <input
                                        className='w-[49%] h-14 justify-self-start glassmorphism p-3 m-2 rounded-[15px] text-[20px] md:text-[23px]'
                                        name="user_name"
                                        type="text"
                                        placeholder="Name"
                                        required>
                                    </input>

                                    <input
                                        className='w-[49%] h-14 justify-self-end glassmorphism p-3 m-2 rounded-[15px] text-[20px] md:text-[23px]'
                                        name="user_email"
                                        type="email"
                                        placeholder="Email"
                                        required>
                                    </input>

                                </div>

                            </li>

                            <li className='m-2'>
                                <input
                                    className='w-[98%] h-14 m-2 glassmorphism p-3 rounded-[15px] text-[20px] md:text-[23px]'
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    required>
                                </input>
                            </li>

                            <li className='m-2'>
                                <textarea
                                    className='w-[98%] min-h-5/6 glassmorphism p-3 m-2 rounded-[15px] text-[20px] md:text-[23px]'
                                    name="message"
                                    placeholder="Message"
                                    required>
                                </textarea>
                            </li>
                            
                            <li className='m-2'>
                                <input
                                    className={styles.button}
                                    type="submit"
                                    value="Send">
                                </input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;