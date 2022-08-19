import axios from 'axios'

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: 'http://127.0.0.1:7001', // url = base url + request url
    timeout: 5000, // request timeout
})

const token = localStorage.getItem('token')
service.interceptors.request.use(
    config => {
        if (token) {
            // @ts-ignore
            config.headers['X-Token'] = token
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    response => {
        return response

    },
    error => {
        console.log('接口信息报错' + error)
        return Promise.reject(error)
    },
)

export default service
