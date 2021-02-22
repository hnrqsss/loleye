import axios from 'axios'

const { 
    REACT_APP_API_URL,
    REACT_APP_API_KEY
} = process.env

export const api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`
    },
    timeout: 10000,
})