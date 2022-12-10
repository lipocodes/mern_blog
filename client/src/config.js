import axios from 'axios';

export const axiosInstance = axios.create({
    basrURL:"http://blog751.herokuapp.com/api/"
});