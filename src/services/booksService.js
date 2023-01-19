import { API_KEY } from "./api";
import axios from './api'

export const getBooks  = async (year , month , day) => {
    const { data: {results : {lists} } } = await axios.get(`books/v3/lists/overview.json?api-key=${API_KEY}`);
    return lists;
}