import React from 'react';
import styles from '../styles/Main.module.css'

const NavBar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <a href="https://docs.google.com/forms/d/1GWvk2TqNZ5lU7oPqxFcldxlcVW8CUsY2-0-qoxGsfY4/viewform?edit_requested=true" target="_blank">
                        Become A Mentor
                    </a>
                </li>
                <li>
                    <a href="https://docs.google.com/forms/d/1LXrZbFKELeey-CYQ2lRoM04PIfXK4faAXObg45jVxyc/edit" target="_blank" >
                        <button  className={styles.greenBackground}>Come Join Us!</button>
                    </a>
                </li>    
            </ul>
        </nav>
     );
}
 
export default NavBar;