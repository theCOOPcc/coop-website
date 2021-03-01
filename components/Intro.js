import React from 'react';
import css from './intro.module.css'
import styles from '../styles/Main.module.css'

const Intro = () => {
    return ( 
            <div 
            className={styles.intro}
            >
                <img 
                // className={css.logoimage} 
                src='/images/coopLogo.svg' alt='The Coop Logo, where the word "Coop" is a stylized avian with glasses' />
                <p 
                // className={css.mission}
                > is a collective intent on helping career changers accelerate their transition into the Engineering and Design fields by providing them with real-world experience.</p>
                <p >In addition to building real products, theCOOP aims to provide mentorship, resources, and networking opportunities for individual growth.</p>
                <img 
                // className={css.workingimage} 
                src='/images/hero-image.svg' alt='a chicken sits in a coup cum desk, their face illuminated by the laptop they are working on' />
                <button 
                // className={css.button}
                > Learn More </button>
            </div>
     );
}
 
export default Intro



// <div class="intro"> 
//     <div class="slide-container">
//         <div class="flex-wrapper">                    
//             <div class="main-message">
//                 <img class="logo padding-bot-20" src="./resources/coopLogo.svg" alt="The Coop Logo"></img>
//                 <div class="padding-bot-20"><h1>is a collective intent on helping career changers accelerate their transition into the Engineering and Design fields by providing them with real-world experience.</h1></div>
//                 <div class="padding-bot-20"><h2>In addition to building real products, theCOOP aims to provide mentorship, resources, and networking opportunities for individual growth.</h2></div>
//                 <a href="mailto: info@thecoop.cc" target="_blank"><button class="learn-more">Learn More </button></a>
//             </div>                        
//             <div class="hero-image">
//                 <img src="./resources/hero-image.svg" alt="theCOOP">
//             </div>                  
//         </div>
//     </div>
// </div>