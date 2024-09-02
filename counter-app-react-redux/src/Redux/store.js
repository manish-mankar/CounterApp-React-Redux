import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})