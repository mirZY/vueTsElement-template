import Axios from 'axios';
import store from '../store';
import qs from 'qs';
import {
    AjaxUrl
} from '../configurl'

// 创建axios实例
let baseURL = null;
baseURL = AjaxUrl + '/api/v1/'

const service = Axios.create({
    baseURL: baseURL, // api的base_url
    timeout: 1800000, // 请求超时时间
    transformRequest: [function (data: any) {
       
        return  qs.stringify(data);
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// request拦截
service.interceptors.request.use( (config) => {
    if (store.state.token) {
        config.headers['Authorization'] = 'Bearer ' + store.state.token;
    }
    return config;
}, error => {
    Promise.reject(error);
})
// respone拦截器
service.interceptors.response.use(
    response => {
        
        return response.data;

    },
    error => {

        return Promise.reject(error);
    }
);



export default service
