import axios from 'axios'


const api = axios.create({
    baseURL: 'https://petfood-api-upm.herokuapp.com/'
})

export default api
