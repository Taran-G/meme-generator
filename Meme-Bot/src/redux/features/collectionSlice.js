import { createSlice } from "@reduxjs/toolkit";
// import { toast, Zoom } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            console.log('removed');
            
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            console.log(state.items);
            
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            alert('Added to Collection ✅');
        },
        removeToast: () => {
            alert('Removed from Collection');
        }
    }
})


export const {
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast,
} = collectionSlice.actions;


export default collectionSlice.reducer;