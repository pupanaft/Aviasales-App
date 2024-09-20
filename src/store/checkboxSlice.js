import { createSlice } from '@reduxjs/toolkit'


const checkboxSlice = createSlice({
  name:'checkbox',
  initialState:{
    checkboxFlag:0
  },
  reducers:{
    addFlag(state, action){return {...state, checkboxFlag: state.checkboxFlag + action.payload.flagId}},
    delFlag(state, action){return {...state, checkboxFlag: state.checkboxFlag - action.payload.flagId}},
    allFlag(state, action){ return {...state, checkboxFlag: action.payload.flagId}}
  }
})
export const {addFlag,delFlag, allFlag} = checkboxSlice.actions

export default checkboxSlice.reducer