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
	upchannel(params){
		return http.post('/api/config/channel',params)
	},
	startTest(){
		return http.get('/api/command/startTest')
	},
	endTest(){
		return http.get('/api/command/endTest')
	},
	response(){
		return http.get('/api/response')
	},
	test(){
		return http.get('/test/response')
	}
	 

}
