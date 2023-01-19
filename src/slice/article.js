import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    articles: [],
    error: null ,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState ,
    reducers: {

        getArticleStart: (state , action) => {
            state.loading = true;
        } ,
        getArticleSuccess: (state , action) => {
            state.loading = false;
            state.articles = action.payload;
        },
        getArticleEnd: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },




    }
});

export const {
    getArticleStart,
    getArticleSuccess,
    getArticleEnd ,
} = articleSlice.actions;
export default articleSlice.reducer ;