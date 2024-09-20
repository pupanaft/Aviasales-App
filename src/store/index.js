import { configureStore } from '@reduxjs/toolkit'

import checkboxReduser from './checkboxSlice'
import tabsReduser from './tabsSlice'

export default configureStore({
  reducer:{
    checkbox:checkboxReduser,
    tabs:tabsReduser
  }
})