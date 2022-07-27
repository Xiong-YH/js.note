import { HTTP_GET,CONTENT_TYPE_FORM } from "./constents"


//默认参数
const DEFAULTS = {
    method:HTTP_GET,
    //请求头携带数据
    params:null,
    //有参数情况
    // params:{
    //     username:'alex',
    //     age:18,
    // }
    //请求体携带数据
    data:null,
    //data:formdata数据
    contentType:CONTENT_TYPE_FORM,
    responseType:'text',
    timeoutTime:0,
    withCredentials:false,

    //方法
    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){},
}