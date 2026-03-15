import {configstore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'

export const store = configStore({
    reducers:{
        search :searchReducer,



    }
})

