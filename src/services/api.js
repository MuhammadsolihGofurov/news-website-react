import axios from "axios";

// constants for api
export const API_KEY = process.env.REACT_APP_API_KEY;
export const baseUrl = "https://api.nytimes.com/svc";

axios.defaults.baseURL = baseUrl ;

export default axios ;