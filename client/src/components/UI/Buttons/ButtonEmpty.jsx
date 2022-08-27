import React from 'react';
import styles from './Button.module.scss'

const ButtonEmpty = ({children, className, ...props}) => {
   return (
      <button className={`${styles.btn} ${styles.empty} ${className}`} {...props}>
         {children}
      </button>
   );
};

export default ButtonEmpty;