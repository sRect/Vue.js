import axios from "axios";
import qs from "qs";
import { Message, Loading } from "element-ui";

const Axios = axios.create({
  baseURL: "https://easy-mock.com/mock/5aeb2da4d8f9ce513397a497/www.demo.com",
  // baseURL: "http://192.168.1.76",
  // baseURL: "http://192.168.1.76",
  timeout: 5000,
  responseType: "json",
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

let loadingInstance = null;

Axios.interceptors.request.use( // POST传参序列化(添加请求拦截器)
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }

    loadingInstance = Loading.service({
      text: '正在加载...'
    });

    return config;
  },
  error => {
    console.log(error)
    Message({
      showClose: true,
      message: error,
      type: "error"
    });
    loadingInstance.close()
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use( // 响应拦截器
  response => {
    loadingInstance.close()
    // if (res.status != 200) {
    //   alert(res.statusText);
    //   return Promise.reject(res);
    // }
    if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
      try {
        // eslint-disable-next-line no-param-reassign
        response.data = JSON.parse(response.request.responseText);
      } catch (e) {
        // ignored
      }
    }
    return response;
  },
  error => {
    loadingInstance.close()
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      // switch (error.response.status) {
      //   case 400: error.message = '请求错误(400)'; break;
      //   case 401: error.message = '未授权，请重新登录(401)'; break;
      //   case 403: error.message = '拒绝访问(403)'; break;
      //   case 404: error.message = '请求出错(404)'; break;
      //   case 408: error.message = '请求超时(408)'; break;
      //   case 500: error.message = '服务器错误(500)'; break;
      //   case 501: error.message = '服务未实现(501)'; break;
      //   case 502: error.message = '网络错误(502)'; break;
      //   case 503: error.message = '服务不可用(503)'; break;
      //   case 504: error.message = '网络超时(504)'; break;
      //   case 505: error.message = 'HTTP版本不受支持(505)'; break;
      //   default: error.message = `连接出错(${err.response.status})!`; break;
      // }

    } else {
      //一些错误是在设置请求的时候触发
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    Message.error({
      message: error.message,
      duration: 0,
      type: "error",
      showClose: true
    })

    return Promise.reject(error);
  }
);


export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
