import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL 

const initialState = {
   categors: [],
   loading: null,
   error: null
}

export const getCategirs = createAsyncThunk(
   'categors/getCategirs',
   async (_, {rejectWithValue, dispatch}) => {
      axios.get(API_URL + '/api/categoties')
      .then(res => {
         dispatch(setCategirs(res.data))
      })
      .catch(error => {
         return rejectWithValue(error.message)
      })
   }
)

const categorsSlice = createSlice({
   name: 'categors', 
   initialState,
   reducers: {
      setCategirs(state, action) {
         state.categors = action.payload
      }
   },
   extraReducers: {
      [getCategirs.pending]: (state) => {
         state.loading = true
         state.error = ''
      },
      [getCategirs.fulfilled]: (state) => {
         state.loading = false
      },
      [getCategirs.rejected]: (state, action) => {
         state.loading = false;
         state.error = action.payload
      },
   }
}) 

const { setCategirs } = categorsSlice.actions

export default categorsSlice.reducer