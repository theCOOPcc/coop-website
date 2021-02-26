import React from 'react';
import bigCss from '../styles/Home.module.css'
import css from './navbar.module.css'
import styles from '../styles/Main.module.css'

const NavBar = () => {
    return ( 
        // <div className={css.navbar}>
        //     <div className={css.wrapper}>
        //         <div className={css.mentor}>
        //             <a href="https://docs.google.com/forms/d/1GWvk2TqNZ5lU7oPqxFcldxlcVW8CUsY2-0-qoxGsfY4/viewform?edit_requested=true">Become a Mentor</a>
        //         </div>
        //         <div>
        //             <a href="https://docs.google.com/forms/d/1LXrZbFKELeey-CYQ2lRoM04PIfXK4faAXObg45jVxyc/edit">
        //             <button className={css.button}>
        //                 Come Join Us!
        //             </button>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        // <nav>
        //     <ul>
        //         <a href="https://docs.google.com/forms/d/1GWvk2TqNZ5lU7oPqxFcldxlcVW8CUsY2-0-qoxGsfY4/viewform?edit_requested=true" target="_blank">
        //             <li className={bigCss.tryIt}>Become A Mentor</li>
        //         </a>
        //         <a href="https://docs.google.com/forms/d/1LXrZbFKELeey-CYQ2lRoM04PIfXK4faAXObg45jVxyc/edit" target="_blank" >
        //             <li> <button  className={css.joinUs}>Come Join Us!</button> </li>
        //         </a>    
        //     </ul>
        // </nav>
        <nav>
            <ul>
                <li>
                <a className={bigCss.tryIt} href="https://docs.google.com/forms/d/1GWvk2TqNZ5lU7oPqxFcldxlcVW8CUsY2-0-qoxGsfY4/viewform?edit_requested=true" target="_blank">
                    Become A Mentor
                </a>
                </li>
                <li>
                <a href="https://docs.google.com/forms/d/1LXrZbFKELeey-CYQ2lRoM04PIfXK4faAXObg45jVxyc/edit" target="_blank" >
                    <button  className={css.joinUs}>Come Join Us!</button>
                </a>
                </li>    
            </ul>
        </nav>
     );
}
 
export default NavBar;





// from http://web-accessibility.carnegiemuseums.org/code/navigation/ 
//   <nav class="primary-nav primary-nav--narrow">
//     <ul>
//       <li><a href="/our-work/">Our work</a></li>
//       <li><a href="/articles/">Articles</a></li>
//       <li><a href="/about/">About us</a></li>
//       <li><a href="/events/">Events</a></li>
//       <li class="primary-nav__active"><a href="/contact/">Contact<span class="visuallyhidden"> (current section)</span></a></li>
//     </ul>
//   </nav>