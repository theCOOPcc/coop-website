import Head from 'next/head'
import styles from '../styles/Main.module.css'
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
    <>
    <Head>
      {/* Set title for local dev */}
      {/* <title>Local - The Coop</title> */}
      {/* Set title for vercel dev */}
      <title>Vercel - The Coop</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property='og:title' content='theCOOP'/>
      <meta property='og:image' content='https://www.thecoop.cc/resources/theCOOP-linkedIN.jpg' />
      <meta property='og:description' content='theCOOP'/>
      <meta property='og:url' content='https://www.thecoop.cc'/>
    </Head> 
      <header>
      <NavBar />
      </header>
      <Intro />
      <SoundFamiliar />
      <LearnByBreaking />
      <WhatWeAreDoing />
      <GetInvolved />
      <ImageVisuals />
    </main>
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
    </>
  )
}
