import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://midas-mutantdna.herokuapp.com/'
});