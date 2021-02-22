import axios from 'axios'

const { 
    REACT_APP_API_URL,
    REACT_APP_API_KEY
} = process.env

const api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`
    },
    timeout: 10000,
})

api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
api.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

export { api }
