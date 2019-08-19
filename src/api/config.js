import axios from 'axios'
import { Loading } from 'element-ui';

let tempAxios = 0;
const Axios = axios.create({
    baseURL: process.env.VUE_APP_API,
    // timeout: 5000                  // 超时
})



Axios.interceptors.request.use(config => {
    config.data.token = sessionStorage.getItem("token");
    let ret = new FormData();
    for (let it in config.data) {
        ret.append(it, config.data[it]);  
    }

    tempAxios ++;
    let loading = Loading.service({
        fullscreen: true,
    });
    config.data = ret;
    return config;
}, error => {
        console.log("发送失败");
        let loading = Loading.service({});
        loading.close();    
        return Promise.reject(error);
    });


Axios.interceptors.response.use(response => {
    tempAxios -- ;
    if(tempAxios == 0){
        let loading = Loading.service({});
        loading.close();
    }
    
    if(response.data.errorCode == 2){
        alert("系统异常");
    } else if(response.data.errorCode == 3){     // 返回信息
        alert(response.data.errorMsg)
    } else {
        return response;
    }
},error => {
    let loading = Loading.service({});
        loading.close();  
    alert('系统异常')
    console.log(22)
})



export default Axios