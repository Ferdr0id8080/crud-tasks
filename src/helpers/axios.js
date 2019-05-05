import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3131'
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance