import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
var download  = function (data) {
    if (!data) {
      return
    }
    let url = window.URL.createObjectURL(new Blob([data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', 'config.txt')
  
    document.body.appendChild(link)
    link.click()
}
// get请求
export default{
    /*-------------------------操作---------------------------*/ 
    connect(){
        return http.get('/api/sys/connect')
    },
    disconnect(){
        return http.get('/api/sys/disconnect')
    },
    outPutFile(){
        var data = http.get('/api/config/download')
        download(data.data)
    },
    showState(){
        return http.get('/api/command/state')
    },
    saveState(){
        return http.get('api/saveInDevice')
    },
    /*-------------------------监控参数-------------------------*/ 
    monitor(data){
        return http.post('/api/config/monitor',data)
    },
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
    /*-------------------------测评参数-------------------------*/ 
    evaluate(data){
        return http.post('/api/config/evaluate',data)
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
