import React from 'react';
import styles from './Button.module.scss'

const ButtonGreen = ({children, className, ...props}) => {
   return (
      <button className={`${styles.btn} ${styles.green} ${className}`} {...props}>
         {children}
      </button>
   );
};

export default ButtonGreen;