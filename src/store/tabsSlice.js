import { createSlice } from '@reduxjs/toolkit'

const tabsSlice = createSlice({
  name:'tabs',
  initialState:{
    activeTab:'tabs_1'
  },
  reducers:{
    setTab(state, action){return {...state, activeTab: action.payload.newActiveTab}},
  }
})
export const {setTab} = tabsSlice.actions

export default tabsSlice.reducer