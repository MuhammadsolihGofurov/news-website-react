import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    books: [],
    error: null ,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState ,
    reducers: {

        getBooksStart: (state , action) => {
            state.loading = true;
        } ,
        getBooksSuccess: (state , action) => {
            state.loading = false;
            state.books = action.payload;
        },
        getBooksEnd: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },




    }
});

export const {
    getBooksStart,
    getBooksSuccess,
    getBooksEnd ,
} = booksSlice.actions;
export default booksSlice.reducer ;