import { configureStore } from '@reduxjs/toolkit'
import categorsSlice from './categors/categorsSlice'

export default configureStore({
   reducer: {
      categors: categorsSlice
   }
})