import React from 'react';
import logoImg from '../../static/images/logo.png'
import styles from './Navbar.module.scss'
import { ButtonEmpty, ButtonGreen, InputSearch } from '../../components/UI';

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <img src={logoImg} alt="logo" />
         <InputSearch/>
         <div className="btns">
            <ButtonEmpty>Login in</ButtonEmpty>
            <ButtonGreen>Register</ButtonGreen>
         </div>
      </nav>
   );
};

export default Navbar;