import { API_KEY } from "./api";
import axios from './api'

export const getMovies  = async () => {
    const { data: {results} } = await axios.get(`movies/v2/reviews/all.json?api-key=${API_KEY}`);
    return results;
}