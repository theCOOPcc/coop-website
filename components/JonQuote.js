import React from 'react';
import styles from '../styles/Main.module.css';

const JonQuote = () => {
    return ( 
        <h2> Quote from Jon </h2>
     );
}
 
export default JonQuote

//     < div className = { styles.slide - 2 } role="presentation/none">
//     <div className={styles.slide-container} role="presentation/none">
//         <div className={styles.quote-block} role="presentation/none">
//             <div className={styles.quote-mark} role="presentation/none">
//                 <img src="./resources/quoteMarks.svg" alt="quotation marks">
//             </div>
//             <q className={styles.quote-body}>
//                 <h2>theCOOP offers a way to get to the next level</h2>
//                 <p>Bootcamps provide a solid starting point for a career in tech, but most employers are looking for deeper levels of experience than someone can get in a 3 or 4 month course. theCOOP offers a way to get to the next level, with longer term projects and larger codebases for new engineers to gain experience with. A cross-functional team approach prepares contributors for the collaborative environments found at most leading companies.</p>
//             </q>
//             {/* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Role_Img */}
//             <div role="presentation/none" className={styles.quote-icon-group}>
//                 <img src="./resources/jon_photo.png" alt="" />
//                 <h2> Jon Thorton</h2>
//                 <p>Engineering Manager, Squarespace</p>
//             </div>
//         </div>
//     </div>
// </div> 