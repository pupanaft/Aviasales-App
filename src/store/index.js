import { configureStore } from '@reduxjs/toolkit'

import checkboxReduser from './checkboxSlice'

export default configureStore({
  reducer: {
    checkbox: checkboxReduser,
  },
})
