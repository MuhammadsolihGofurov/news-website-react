import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false ,
    text : ""
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState ,
    reducers: {

        changeModal: (state , action) => {
            state.isOpen = !state.isOpen;
            state.text = action.payload;
        } ,

    }
});

export const {
    changeModal ,
} = modalSlice.actions;
export default modalSlice.reducer ;