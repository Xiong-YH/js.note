
//工具函数
import {serialize,addURLData} from './utill';
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

        xhr.open(this.options.method,tihs.url+this.addparam(),true);


        //设置responseType
        tihs.addresponseType();


        //设置跨域是否携带cookie
        this.setcooike();

        xhr.send()
    };
    //绑定响应事件处理程序
    bindEvent(){
        // const xhr = this.xhr
        const{success,httpCodeError,error,abort,timeout} = this.options;

        //load事件
        this.xhr.addEventListener('load',()=>{
            if(this.ok()) {
                success(this.xhr.response,this.xhr)
            }else{
                httpCodeError(xhr.status,this.xhr);
            }
        },false);

        //error事件
        xhr.addEventListener('error',()=>{
           error(this.xhr);
        },false);

        //abort事件
        xhr.addEventListener('abort',()=>{
            abort(this.xhr);
         },false);

         //timeout事件
         xhr.addEventListener('timeout',()=>{
            timeout(this.xhr);
         },false);



    };
    //检测响应的http状态码是否正常
    ok(){
        return(xhr.status >=200 && xhr.status<300)||xhr.status === 304;
    };

    //在地址获取数据
    addparam(){
        const {params} = this.options;

        if(!params) return '';
        
        return addURLData (this.url,serialize(params));
    };

    addresponseType(){
        this.xhr.responseType = this.options.responseType;

    };

    setcooike() {
        this.xhr.withCredentials = true;
    };



}


export default Ajax;