import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-71a99.firebaseio.com/'
});

export default instance;