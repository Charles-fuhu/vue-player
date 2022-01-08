import axios from 'axios'


const baseURL = 'http://120.26.42.165:3000'

// const baseURL = "http://localhost:3000";

// const baseURL = '127.0.0.1'

export function request(config) {
    const install = axios.create({
        baseURL,
        timeOut: 2000
    });
    return install(config)
}