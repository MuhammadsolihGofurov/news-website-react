import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movies: [],
    error: null ,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState ,
    reducers: {

        getMoviesStart: (state , action) => {
            state.loading = true;
        } ,
        getMoviesSuccess: (state , action) => {
            state.loading = false;
            state.movies = action.payload;
        },
        getMoviesEnd: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },




    }
});

export const {
    getMoviesStart,
    getMoviesSuccess,
    getMoviesEnd ,
} = moviesSlice.actions;
export default moviesSlice.reducer ;