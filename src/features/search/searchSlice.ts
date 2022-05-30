import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value:"",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
     getSearch:(state:CounterState,{payload})=>{
         state.value=payload;
     }
  },
})

// Action creators are generated for each case reducer function
export const { getSearch   } = searchSlice.actions

export default searchSlice.reducer