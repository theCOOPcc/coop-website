import React from 'react';
import css from './intro.module.css'

const Intro = () => {
    return ( 
            <div className={css.intro}>
                <img className={css.logoimage} src='/images/coopLogo.svg' alt='The Coop Logo, where the word "Coop" is a stylized avian with glasses' />
                <p className={css.mission}> is a collective intent on helping career changers accelerate their transition into the Engineering and Design fields by providing them with real-world experience.</p>
                <p >In addition to building real products, theCOOP aims to provide mentorship, resources, and networking opportunities for individual growth.</p>
                <img className={css.workingimage} src='/images/hero-image.svg' alt='a chicken sits in a coup cum desk, their face illuminated by the laptop they are working on' />
                <button className={css.button}> Learn More </button>
            </div>
     );
}
 
export default Intro
