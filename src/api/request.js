import axios from 'axios'

let baseURL;
if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000/';
} else if(process.env.NODE_ENV === 'production') {
    baseURL = 'http://124.223.37.254/';
}




// const baseURL = "http://localhost:3000";

// const baseURL = '127.0.0.1'

export function request(config) {
    const install = axios.create({
        baseURL,
        timeOut: 2000
    });
    return install(config)
}