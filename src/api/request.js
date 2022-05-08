import axios from 'axios'

const baseURL = "https://netcloud-music.vercel.app/";
// const baseURL = '127.0.0.1'
export function request(config) {
    const install = axios.create({
        baseURL,
        timeOut: 2000
    });
    return install(config)
}