import React from 'react';
import css from './navbar.module.css'

const NavBar = () => {
    return ( 
        <div className={css.navbar}>
            <div className={css.wrapper}>
                <div className={css.mentor}>
                    <a href="https://docs.google.com/forms/d/1GWvk2TqNZ5lU7oPqxFcldxlcVW8CUsY2-0-qoxGsfY4/viewform?edit_requested=true">Become a Mentor</a>
                </div>
                <div>
                    <button className={css.button}>
                        Come Join Us!
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;

