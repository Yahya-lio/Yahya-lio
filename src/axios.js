import axios from 'axios'

export const Axios = axios.create({
    baseURL:proccess.env.REACT_APP_BACKEND_URL
})