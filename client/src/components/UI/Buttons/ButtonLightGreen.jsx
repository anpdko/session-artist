import React from 'react';
import styles from './Button.module.scss'

const ButtonLightGreen = ({children, className, ...props}) => {
   return (
      <button className={`${styles.btn} ${styles.light_green} ${className}`} {...props}>
         {children}
      </button>
   );
};

export default ButtonLightGreen;