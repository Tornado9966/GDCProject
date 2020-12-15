import axios from 'axios';
import { store } from 'redux/store/configureStore';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://eatngo.herokuapp.com/',
  responseType: 'json'
});

const redirects = {
  401: '/login',
  404: '/notfound'
};

instance.interceptors.request.use(
  (config) => {
    const AUTH_TOKEN = JSON.stringify(store.getState().auth);
    if (AUTH_TOKEN) {
      config.headers['Authorization'] = AUTH_TOKEN;
    }
    return config;
  }, error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  ({ response = { status: 500 } }) => {
    const { status } = response;
    const redirect = redirects[status];
    if (redirect) document.location = redirect;
    return Promise.reject(response);
  }
);

export function get(path) {
  return instance.get(path);
}

export function patch(url, data) {
  return instance.patch(url, data);
}

export function post(url, data) {
  return instance.post(url, data);
}

export function remove(url, data) {
  return instance.delete(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}
