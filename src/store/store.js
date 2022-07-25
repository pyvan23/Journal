import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    journal:journalSlice.reducer,
  },
})