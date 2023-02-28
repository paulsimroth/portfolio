import Image from 'next/image';
import styles from '../page.module.css';


export default function Home() {    
  return (
    <main className={styles.main}>
      <div className='w-full h-full justify-center items-center'>
        <p>
          404 page not found
        </p>
        <p>
          Click on any link to go somewhere else
        </p>
      </div>
    </main>

  )
}
