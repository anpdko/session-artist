import React from 'react'
import styles from './Footer.module.scss'
import logoImg from '../../static/images/logo.png'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer_menu}>
            <ul className={`${styles.menu} ${styles.left}`}>
               <li>Modile App</li>
               <li>Community</li>
               <li>Company</li>
            </ul>
            <img src={logoImg} alt="logo" />
            <ul className={`${styles.menu} ${styles.right}`}>
               <li>Help desk</li>
               <li>Blog</li>
               <li>Resources</li>
            </ul>
         </div>
         <p className={styles.bottom_p}>© 2022 Session artist All rights reserved</p>
      </footer>
   );
};
export default Footer