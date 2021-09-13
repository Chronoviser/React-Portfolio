import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://abhishek-portfolio-backend.herokuapp.com'
})

export default instance;