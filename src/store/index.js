import { configureStore } from "@reduxjs/toolkit";
import { articleSlice, booksSlice, categorySlice, modalSlice, moviesSlice } from '../slice'

export default configureStore({
    reducer:{
        article : articleSlice,
        category : categorySlice,
        movies : moviesSlice,
        books : booksSlice,
        modal : modalSlice,
    }
})