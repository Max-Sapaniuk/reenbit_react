import {configureStore} from '@reduxjs/toolkit'
import mainReducer from "./mainSlice"

const store = configureStore({
    reducer: {
        main: mainReducer,
    },
})

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
