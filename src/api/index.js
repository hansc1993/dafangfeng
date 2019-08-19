import Axios from './config'

const get = (url, params, config={})=> {
    let defaultConfig = {
        url,
        method: "get",
        params
    }
    return Axios({...defaultConfig, ...config}).then(res=> {
        return res;
    }, err=> {
        return err;
    })
}

const post = (url, data, config={})=> {
    let defaultConfig = {
        url,
        method: "post",
        data
    }
    return Axios({...defaultConfig, ...config}).then(res=> {
        return res;
    }, err=> {
        return err;
    })
}

export const install = (Vue, config={})=> {
    Vue.prototype._get = get
    Vue.prototype._post = post
}