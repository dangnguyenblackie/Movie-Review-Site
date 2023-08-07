import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:12000/",
    timeout: 1000
})

