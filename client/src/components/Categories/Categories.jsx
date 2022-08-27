import React, { useRef, useEffect, useState } from 'react'
import styles from './Categories.module.scss'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getCategirs } from '../../store/categors/categorsSlice'

const Categories = () => {
   const [width, setWidth] = useState(0);
   const carusel = useRef(null)
   const categors = useSelector((state) => state.categors.categors)
   const dispatch = useDispatch()

   const API_URL_IMG = process.env.REACT_APP_API_URL + process.env.REACT_APP_STATIC_IMG
   
   useEffect(() => {
     setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
   }, [])

   useEffect(()=>{
      dispatch(getCategirs());
    }, [dispatch])

   useEffect(() => {
      console.log(categors)
    }, [categors])

   return (
      <section className={styles.categories}>
         <motion.div 
            ref={carusel} 
            whileTap = {{cursor: "grabbling"}}
            className={styles.carusel}
         >
            <motion.div 
               drag="x" 
               dragConstraints={{right: 0, left: -width }} 
               className={styles.inner_carusel}
            >
               {categors.map((categor, index) => 
                  <motion.div className={styles.item} key={index}>
                     <img src={API_URL_IMG + categor.img} alt="categories" />
                     <dir className={styles.item_bg}>
                        <h3>{categor.title}</h3>
                     </dir>
                  </motion.div>   
               )}
            </motion.div>
         </motion.div>
      </section>
   );
};
export default Categories