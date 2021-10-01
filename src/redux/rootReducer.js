import {combineReducers } from '@reduxjs/toolkit'
import authSlice from './redux_auth/authSlice'
const rootReducer = combineReducers({
    authSlice
})

export default rootReducer