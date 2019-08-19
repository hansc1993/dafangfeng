const Tools = {

    // 获取URL参数
    getUrlParamsString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    // 时间戳
    fromatDate(timestemp) { 
        if (timestemp == null) {        
            return '';    
        }        
        var time = new Date(timestemp);    
        var y = time.getFullYear(); //年
        var m = time.getMonth() + 1; //月
        var d = time.getDate(); //日
        var h = time.getHours(); //时
        var mm = time.getMinutes(); //分
        var s = time.getSeconds(); //秒
        if (m < 10) {        
            m = '0' + m;    
        }    
        if (d < 10) {        
            d = '0' + d;    
        }    
        if (h < 10) {        
            h = '0' + h;    
        }    
        if (mm < 10) {        
            mm = '0' + mm;    
        }    
        if (s < 10) {        
            s = '0' + s;    
        }    
        return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
    }

    


}

/**
 * 使用方法
 * this.Tools.getUrlParamsString
 * 
 */
export default Tools;