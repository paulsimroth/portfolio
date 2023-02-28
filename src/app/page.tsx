import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {    
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is the start of my new portfolio page!
          <code className={styles.code}>Soon I will move everything over here from my old page</code>
        </p>
        <div>
            By{' '}
            me
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <div>
        <p>Color schemes that I will use</p>
        <div className='bg-[#2E3A59]'>Nav</div>
        <div className='bg-[#F5F5F5]'>Body</div>
        <div className='bg-[#34495E]'>Text</div>
        <div className='bg-[#E5E5E5]'>Borders</div>
        <div className='bg-[#F8D1CC]'>CTA</div>
        <div className='bg-[#18BC9C]'>Accent</div>
      </div>
    </main>
  )
}
