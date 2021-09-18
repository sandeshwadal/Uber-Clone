import {configureStore } from '@reduxjs/toolkit'
import  navReducer  from './reducers/rootReducer'

export const store = configureStore({
    reducer:{
        nav: navReducer
    }
})