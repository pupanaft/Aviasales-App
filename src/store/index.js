import { configureStore } from '@reduxjs/toolkit'

import aviasalesReduser from './aviasalesSlice'

export default configureStore({
  reducer: {
    aviasales: aviasalesReduser,
  },
})
