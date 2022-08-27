import React from 'react';
import Categories from '../../components/Categories';
import { ButtonLightGreen, ButtonLightOrange } from '../../components/UI';
import styles from './Home.module.scss';
import { Instagram, Twitter, Youtube } from 'react-bootstrap-icons'
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';

const Home = () => {

   const bottomVariants = {
      offscreen: {
        y: 50,
        opacity: 0
      },
      onscreen: {
        y: 0,
        opacity: 1
      },
   };

   const opacityVatiants = {
      offscreen: {
         opacity: 0
       },
       onscreen: {
         opacity: 1
       },
   }

   return (
      <React.Fragment>
         <header className={styles.header_title}>
            <div className={styles.circles_bg}>
               <motion.div 
                  className={`${styles.circle} ${styles.green}`}
                  animate={{
                     scale: 1.3,
                     opacity: 0.8
                  }}   
                  transition={{
                        delay: 1,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                        repeatType: 'reverse',
                        type: 'tween',
                  }}   
               ></motion.div>
               <motion.div 
                  className={`${styles.circle} ${styles.orange}`}
                  animate={{
                     scale: 1.3,
                     opacity: 0.8
                   }}   
                   transition={{
                       duration: 1,
                       repeat: Infinity,
                       repeatDelay: 0.2,
                       repeatType: 'reverse',
                       type: 'tween',
                   }}   
               ></motion.div>
            </div>
            <motion.div
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.8 }}
               variants={bottomVariants}
               transition={{
                  delay: 0.3, // Задержка в начале в cекундах
                  duration: 0.4,
               }}
            >
               <h1>Session Artists for your dream project.</h1>
               <h3>Select Category</h3>
            </motion.div>
            <motion.div 
               className="btns"
               transition={{
                  delay: 0.1, // Задержка в начале в cекундах
                  duration: 0.5,
               }}
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.8 }}
               variants={opacityVatiants}
            >
               <ButtonLightGreen>Find an srtist</ButtonLightGreen>
               <ButtonLightOrange>Become seller</ButtonLightOrange>
            </motion.div>
         </header>
         <Categories/>
         <section className={styles.social}>
            <h2>Social</h2>
            <div className={styles.social_btns}>
               <div className={styles.circle_box}>
                  <Instagram/>
               </div>
               <div className={styles.circle_box}>
                  <Youtube/>
               </div>
               <div className={styles.circle_box}>
                  <Twitter/>
               </div>
            </div>
         </section>
         <Footer/>
      </React.Fragment>
   );
};

export default Home;