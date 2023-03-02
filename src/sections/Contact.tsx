import styles from 'styles';

function Contact() {
  return (
    <section className={`${styles.sections}`} id='contact'>
      <div className=''>
                <h1 className="font-extrabold my-8 text-[25px] md:text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Contact Me!</h1>
                <p>
                    I am open to opportunities and projects in the blockchain space.
                    Also, if you have any other questions do not hesitate to contact me using the form below.
                    Let me know how we can work together!
                </p>
                <p>By clicking the send button you confirm that you have seen and accepted the Privacy Policy!</p>
                <div className=''>
                    <form>
                        <ul>
                            <li className=''>
                                <input 
                                name = "user_name" 
                                type = "text" 
                                placeholder = "Name" 
                                required>
                                </input>
                            </li>
                            <li className='half'>
                                <input 
                                name = "user_email"
                                type = "email"  
                                placeholder = "Email" 
                                required>
                                </input>
                            </li>
                            <li>
                                <input 
                                name = "subject" 
                                type = "text" 
                                placeholder = "Subject" 
                                required>
                                </input>
                            </li>
                            <li>
                                <textarea
                                name = "message" 
                                placeholder = "Message" 
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input
                                className=''
                                type = "submit"
                                value = "Send">
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