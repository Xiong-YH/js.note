//常量
import { HTTP_GET ,CONTENT_TYPE_FORM,CONTENT_TYPE_JSON} from './constents.js';

//工具函数
import {serialize,addURLData,serializeJSON} from './utill.js';
//默认参数
import DEFAULTS from './defaults.js';


//Ajax类
class Ajax{
    constructor(url,options) {
        this.url = url;
        this.options = Object.assign({},DEFAULTS,options);


        //初始化
        this.init();
    }

    init(){
        const xhr = new XMLHttpRequest();

        this.xhr = xhr;
        this.bindEvent();

        xhr.open(this.options.method,this.url+this.addparam(),true);


        //设置responseType
        this.addresponseType();

        //设置跨域是否携带cookie
        this.setcooike();

        //设置超时
        this.setTimeout();

        //发送请求
        this.setData();
    };
    //绑定响应事件处理程序
    bindEvent(){
        const xhr = this.xhr;
        const{success,httpCodeError,error,abort,timeout} = this.options;

        //load事件
        xhr.addEventListener('load',()=>{
            if(this.ok()) {
                success(xhr.response,xhr)
            }else{
                httpCodeError(xhr.status,xhr);
            }
        },false);

        //error事件
        xhr.addEventListener('error',()=>{
           error(xhr);
        },false);

        //abort事件
        xhr.addEventListener('abort',()=>{
            abort(xhr);
         },false);

         //timeout事件
         xhr.addEventListener('timeout',()=>{
            timeout(xhr);
         },false);



    };
    //检测响应的http状态码是否正常
    ok(){
        const xhr = this.xhr;
        return(xhr.status >=200 && xhr.status<300)||xhr.status === 304;
    };

    //在地址获取数据
    addparam(){
        const {params} = this.options;

        if(!params) return '';
        
        return addURLData (this.url,serialize(params));
    };


    //设置responseType
    addresponseType(){
        this.xhr.responseType = this.options.responseType;

    };


    // 设置跨域是否携带cooike
    setcooike() {
        if(this.options.withCredentials) {
        this.xhr.withCredentials = true;
        }
        
    };

    //设置超时
    setTimeout(){
        const {timeoutTime} = this.options;

        if(timeoutTime>0) {
            this.xhr.timeout=timeoutTime;
        }
    };

    //发送请求
    setData(){
        const xhr = this.xhr;

        if(!this.isSendData()) {
            return xhr.send(null);
        }


        let resultData = null;

        const {data} = this.options;

        //判断是不是发送FormData格式数据
        if(this.isFormData()){
            resultData = data;

        }else if(this.isFormURLEncodeData()){

            this.setContentType(CONTENT_TYPE_FORM);
            resultData = serialize(data);

        }else if(this.isJSONData()) {
            // 发送JSON格式数据
            this.setContentType(CONTENT_TYPE_JSON);
            resultData = serializeJSON(data);

        }else {
            this.setContentType();
            resultData = data;
        }

        xhr.send(resultData);

    };


    //是否需要使用send发送数据
    isSendData(){
        const{data,method} = this.options;

        if(!data) return false;

        if(method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

        return true;
    }

    // 是否发送FormData数据
    isFormData() {
        return this.options.data instanceof FormData;
    };

    //是否发送'application/x-www-form-urlencoded'的数据
    isFormURLEncodeData(){
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM);
    };


    //是否发送json格式数据
    isJSONData(){
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
    };


    //设置ContentType
    setContentType(contentType = this.options.contentType){
        if(!contentType){

           return this.xhr.setRequestHeader('contentType',contentType);
        }
    };

    //获取XHR对象
    getXHR(){
        return this.xhr;
    }
}




export default Ajax;