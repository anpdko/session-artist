import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Artists from './pages/Artists'
import Error from './pages/Error'

import Home from './pages/Home'

const Router = ({isLogin}) => {
   if (isLogin){
      return (
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/artists' element={<Artists/>}/>
            
            {/* <Route path='/artists' element={<Artists/>}/>
            <Route path='/artist/:id' element={<Artist/>}/> */}

            <Route path='/error' element={<Error/>}/>
            <Route path="*" element={<Navigate to={'error'}/>} />
         </Routes>
      );
   }
   return (
      <Routes>
         <Route exact path='/' element={<Home/>}/>
      </Routes>
   );
};

export default Router;