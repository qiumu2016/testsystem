import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理 
 */

// get请求
export default{
    changeIP(params){
        return http.post('/api/config/IP',params)
    },
 	test_get(params){
    	return http.get('/test_get',params)
	},
	test_post(params){
    	return http.post('/test_post',params)
	}
}
