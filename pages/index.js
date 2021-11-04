import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/dog.jpg'

export default function Home() {
  return (
     <>
     <h1>MontiDogs</h1>
     <Image
       src={profilePic}
       alt="Picture of the author"
     />
     <p>Hello and Welcome!</p>
     <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
   </>
  )
}
