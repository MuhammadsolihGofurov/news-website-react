import { API_KEY } from "./api";
import axios from './api'

export const getStories  = async (direction) => {
    const { data: {results} } = await axios.get(`topstories/v2/${direction}.json?api-key=${API_KEY}`);
    return results;
}