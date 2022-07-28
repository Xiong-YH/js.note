//工具函数
const serialize = param => {
    //对象变为字符串 == 对象->数组->字符串
    const result = [];

    for (const [key, value] of Object.entries(param)) {
        result.push(`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`)
    };

    return result.join('&');
};

//数据转换成JSON格式字符串
const serializeJSON = param => {
    return JSON.stringify(param);
}

//给URL添加参数

const addURLData = (url,data) => {
    if(!data) return '';


    const mark = url.includes('?')?'&':'?';


    return `${mark}${data}`;

}


export {serialize,addURLData,serializeJSON};