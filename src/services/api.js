import axios from 'axios'


const api = axios.create({
    baseURL: 'https://petfood-api-upm.herokuapp.com'
    //baseURL: 'http://localhost:3000'
})

export default api
