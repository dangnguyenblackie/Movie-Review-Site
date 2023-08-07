import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:12000/",
    timeout: 1000,
    headers: {"Access-Control-Allow-Origin": "http://localhost:12000/"}
})

