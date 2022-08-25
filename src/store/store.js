import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "./mainSlice"

const local = localStorage.getItem('state')
    ? JSON.parse(localStorage.getItem('state'))
    : {}

const store = configureStore({
    reducer: {
        main: mainReducer,
    },
    preloadedState: local
})

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
