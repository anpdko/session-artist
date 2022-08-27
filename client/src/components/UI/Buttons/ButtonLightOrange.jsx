import React from 'react';
import styles from './Button.module.scss'

const ButtonLightOrange = ({children, className, ...props}) => {
   return (
      <button className={`${styles.btn} ${styles.light_orange} ${className}`} {...props}>
         {children}
      </button>
   );
};

export default ButtonLightOrange;