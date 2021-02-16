import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import SoundFamiliar from '../components/SoundFamiliar'
import LearnByBreaking from '../components/LearnByBreaking'
import WhatWeAreDoing from '../components/WhatWeAreDoing'
import GetInvolved from '../components/GetInvolved'
import ImageVisuals from '../components/ImageVisuals'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Intro />
      <SoundFamiliar />
      <LearnByBreaking />
      <WhatWeAreDoing />
      <GetInvolved />
      <ImageVisuals />
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        
        
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}
       
        {/* <img src='/images/black-red.svg' alt='regular image tag' /> */}
        {/* <Image src="/images/black-red.svg" alt="Image component from Next" width="64" height="64" /> */}
        {/* <Image 
        style={{
        position: "relative",
        width: "200px",
        height: "200px",
        maxHeight: "200px",
        maxWidth: "200px",
        }} 
        src="/images/black-red.svg" alt="Image component from Next" layout="fill" /> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
