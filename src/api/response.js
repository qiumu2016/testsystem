import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
// get请求
export default{
    /*-------------------------监控命令-------------------------*/ 
    queryDeviceState(){
        return http.get('/api/monitor/queryDeviceState')
    },
    queryWorkMode(){
        return http.get('/api/monitor/queryWorkMode')
    },
    setWorkMode(){
        return http.get('/api/monitor/setWorkMode')
    },
    endCall(){
        return http.get('/api/monitor/endCall')
    },
    queryWorkGroupNum(){
        return http.get('/api/monitor/queryWorkGroupNum')
    },
    setWorkGroupNum(){
        return http.get('/api/monitor/setWorkGroupNum')
    },
    /*-------------------------测评命令-------------------------*/ 
    device1SetIK(){
        return http.get('/api/evaluate/device1SetIK')
    },
    device1SetWK(){
        return http.get('/api/evaluate/device1SetWK')
    },
    device1StartEvaluate(){
        return http.get('/api/evaluate/device1StartEvaluate')
    },
    device1EndEvaluate(){
        return http.get('/api/evaluate/device1EndEvaluate')
    },
    device2SetIK(){
        return http.get('/api/evaluate/device2SetIK')
    },
    device2SetWK(){
        return http.get('/api/evaluate/device2SetWK')
    },
    device2StartEvaluate(){
        return http.get('/api/evaluate/device2StartEvaluate')
    },
    device2EndEvaluate(){
        return http.get('/api/evaluate/device2EndEvaluate')
    },
}