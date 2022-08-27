import './App.scss';
import Router from './Router'
import Navbar from './components/Navbar'
import React from 'react';
import imgLineBg from './static/Vector.svg'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="wrapper">
      <div className='main_bg'>
        <motion.div 
            animate={{
              top: 100,
              scale: 1.05
            }}   
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.2,
                repeatType: 'reverse',
                type: 'tween',
            }}
          >
            <img src={imgLineBg} className="line_bg"/>
            <img src={imgLineBg} className="line_bg line_bg_bottom"/>
          </motion.div>
      </div>
      <div className="container">
        <Navbar/>
        <Router isLogin={true}/>
      </div>
    </div>
  );
}

export default App;
