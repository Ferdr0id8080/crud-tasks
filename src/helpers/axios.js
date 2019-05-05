import axios from 'axios'

const dotenv = require('dotenv')
dotenv.config()

const axiosInstance = axios.create({
    baseURL: 'http://localhost:' + process.env.REACT_APP_API_PORT
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance