import Ajax from "./Ajax";

const ajax = (url, options) => {
    return new Ajax(url, options).getXHR();
};

const get = (url, options) => {
    return ajax(url, { ...options, method: 'get' });
};

const getJSON = (url, options) => {
    return ajax(url, { ...options, method: 'get', responseType: 'json' });
};


const post = (url, options) => {
    return ajax(url, { ...options, method: 'post' })
};


export { ajax, get, getJSON, post };