import React from 'react';
import styles from './InputSearch.module.scss'
import { Search } from 'react-bootstrap-icons'

const InputSearch = () => {
   return (
      <div className={styles.box_search}>
         <input type="text" placeholder="Search" className={`${styles.input}`}/>
         <div className={styles.box_icon}>
            <Search className={styles.icon}/>
         </div>
      </div>
   );
};

export default InputSearch;