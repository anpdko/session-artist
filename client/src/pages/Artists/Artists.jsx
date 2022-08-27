import React from 'react';
import styles from './Artists.module.scss'

const Artist = () => {
   return (
      <div>
         <ul className={styles.categories}>
            <li className={styles.active}>Категория 1</li>
            <li>Категория 2</li>
            <li>Категория 3</li>
            <li>Категория 4</li>
            <li>Категория 5</li>
            <li>Категория 6</li>
         </ul>
         <h2>Guitarists</h2>
      </div>
   );
};

export default Artist;