import React from 'react';
import css from './intro.module.css'
import styles from '../styles/Main.module.css'

const Intro = () => {
    return (
        <>
            <div className={styles.intro} role="presentation/none"> 
                <div className={styles.slideContainer} role="presentation/none">
                    <div className={styles.flexWrapper} role="presentation/none">
                        <section className={styles.mainMessage}>
                            <h1><img className={`${styles.logo} ${styles.paddingBot20}`} src='/images/coopLogo.svg' alt='The Coop' /></h1>
                            <div className={styles.paddingBot20} role="presentation/none"><h2>is an accelerator program focused on helping bootcamp graduates break in to the engineering and design field <span role="presentation/none" className={styles.pinkText}>faster</span> by providing them with real-world experience.</h2></div>
                            <div className={styles.paddingBot20} role="presentation/none"><h3>In addition to building real products, theCOOP aims to provide mentorship, resources, and networking opportunities for individual growth.</h3></div>
                            <a href="mailto: info@thecoop.cc" target="_blank"><button className={styles.learnMore}>Learn More </button></a>
                        </section>
                        <div className={styles.heroImage} role="presentation/none">
                            <img src='/images/hero-image.svg' alt='a chicken sits in a coup cum desk, their face illuminated by the laptop they are working on' />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Intro