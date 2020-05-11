import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
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
        return http.get('/api/config/download')
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
    
    /*-------------------------测评参数-------------------------*/ 
    evaluate(data){
        return http.post('/api/config/evaluate',data)
    },
    
    upload(data){
        return http.post('/api/config/upload',data)
    }
    
}
