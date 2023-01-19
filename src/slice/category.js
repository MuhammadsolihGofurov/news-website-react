import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory: "Business"
}

export const categorySlice = createSlice({
    name: 'category',
    initialState ,
    reducers: {

        selectedCategory: (state , action) => {
            state.currentCategory = action.payload;
        }

    }
});

export const {
    selectedCategory ,
} = categorySlice.actions;
export default categorySlice.reducer ;