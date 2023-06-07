import axios from 'axios'

export const VERIFY_NUMBER='/validate'
export const RANDOMIMAGES='/photos/?client_id=nyaN7Ep_ThZwsPB11fXxc9faEnMZI_YhKCAWe8kVtrA'
export const RANDOM_POSTS="/posts"
export const RANDOM_USERS="/users"

const API_KEY='LgCeWP8M6UCigC2XzqZ2a39PQr2U5Oor'

const instance = axios.create({
    baseURL:"https://api.apilayer.com/number_verification",
})

const imageIntance = axios.create({
    baseURL:'https://api.unsplash.com'
})

const adminInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

instance.interceptors.request.use((config)=>{
    config.headers.apikey=API_KEY
    return config
},(error)=>{
    return Promise.reject(error);
})

export default instance 
export {imageIntance,adminInstance}