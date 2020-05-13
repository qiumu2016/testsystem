<template>
    <el-card style="margin-top:15px" body-style = "padding: 10px 15px 15px 15px">
        <el-row class = 'start-box'>
                <el-button @click="OnBtnStart" size="small"  style="padding-left:10px;float:left;" >启动</el-button>
                <el-button @click="OnStpStart" type="info" size="small" style="padding-left:10px;float:left;" >结束</el-button>
                <el-select v-model="startMode"  :disabled="testing"  size="small" placeholder="请选择" style="padding-left:10px;float:left;" @change="startModeChange">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class = "save">
                    <!-- <span class="text">保存</span>
                    <el-input size="small" placeholder="输入文件路径" v-model="filePath" class="input-box" :disabled="disableSave"></el-input>
                    <el-button size="small" @click="SaveFile" style="margin-left:10px;float:left;">...</el-button> -->
                    <span class="text">IP</span>
                    <el-input class="input-box" size="small" @change="IPChange" v-model="ip"></el-input>
                </div>
                <span class = "signal">
                    <div class="M-start-fleg" v-show="connected == 0">M</div>
                    <div class="M-start-fleg-up" v-show="connected == 1">M</div>
                    <div class="M-start-fleg-down" v-show="connected == 2">M</div>
                    <div class="k-start-fleg">{{deviceType}}</div>
                    <span class="null-num-fleg">
                        <div class="null-1-fleg-up"  v-show="device1_up == 1">1</div>
                        <div class="null-1-fleg-down" v-show="device1_up == 2">1</div>
                        <div class="null-1-fleg" v-show="device1_up == 0">1</div>
                        <div class="null-2-fleg-up"  v-show="device2_up == 1">2</div>
                        <div class="null-2-fleg-down"  v-show="device2_up == 2">2</div>
                        <div class="null-2-fleg"  v-show="device2_up == 0">2</div>
                    </span>
                    <div class="wk-fleg">wk</div>
                </span>
        </el-row>
        <el-row>
            <el-input type="textarea" :rows="6" :disabled="true" v-model="low_text"></el-input>
        </el-row>
         
    </el-card>
</template>
<script>
import { Message } from 'element-ui'
import operation from '../api/operation'
import toolbar from '../api/toolbar'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name:'Lower_u',
    components:{

    },
    data(){
        return{
          t:0,
          Timer:null,
          connected:0,
          testing:false,
          startMode:null,
          filePath:'',
          low_text:'',
          ip:'',
          disableSave:true,
          device1_up:0,
          device2_up:0,
          deviceType:'U',
          options:[
            {value:1,label:'多路自环'},
            {value:2,label:'多路双向设备间交叉'},
            {value:3,label:'模式三'},
            {value:4,label:'单路自环（MW解析）'},
            {value:5,label:'单路单向设备间交叉（MW解析）'},
            {value:6,label:'MW采集'},
            {value:7,label:'MW采集（超长帧）'},
            {value:8,label:'收端一致性测试'},
            {value:9,label:'噪声码采集'},
            {value:10,label:'生产测试'},
            {value:11,label:'F多路自环'},
            {value:12,label:'F多路双向设备间交叉'},
            {value:13,label:'F模式三'},
            {value:14,label:'F单路单向设备间交叉（MW解析）'},
          ],
        }
    },
    computed:{
        ...mapGetters(["isIP",
                        "setChannel",
                        "isTesting",
                        "setChanneled",
                        "isconnected",
                        "device1_state",
                        "device2_state",
                        "interface_type",  
                        "messageNumber",
                        "flashOperation",
                        "flashTimer",
                        "startRes"  
                        ]),
    },
    methods:{
        ...mapMutations(["connect",
                         "disconnect",
                         "set_interface_type",
                         "set_device1_state",
                         "set_device2_state",
                         "set_ismonitorConfig",
                         "set_isevaluateConfig",
                         "set_ischannelConfig",
                         "set_isIP",
                         "set_isTesting",
                         "set_setChannel",
                         "set_setChanneled",
                         "set_messageNumber",
                         "set_flashConfig",
                         "set_flashResponse",
                         "set_flashEnd",
                         "set_flashOperation",
                         "set_flashTimer",
                         "set_startRes",

                         "set_startRes",

                         "set_flashPlain_c1",
                         "set_flashPlain_c2",
                         "set_flashPlain_c3",
                         "set_flashPlain_c4",

                         "set_flashPlain_text_c1",
                         "set_flashPlain_text_c2",
                         "set_flashPlain_text_c3",
                         "set_flashPlain_text_c4",

                         "set_flashMi_c1",
                         "set_flashMi_c2",
                         "set_flashMi_c3",
                         "set_flashMi_c4",

                         "set_flashMi_text_c1",
                         "set_flashMi_text_c2",
                         "set_flashMi_text_c3",
                         "set_flashMi_text_c4",
                         ]),
        
        IPChange(val){
            var re =  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
            if(!re.test(val)){
                console.log(val)
                Message.error('ip地址格式不正确，请修改');
                this.ip = "";
            }else{
                this.global.deviceIP = this.ip
                let data = {
                    deviceIP:this.ip
                }
                operation.changeIP(data).then(res =>{
                        console.log(res.data)
                        this.set_isIP(1)
                    }).catch(err =>{

                    })
            }
        },
        SaveFile(){
           this.get_response()
            // operation.test().then(res =>{
            //     console.log(res)
            // })
            // if(this.t>0){
            //     this.clear_timer()
            // }else{
            //     this.set_timer()
            // }
        },
        OnBtnStart(){
            if(!this.startMode){
                Message.error('请设置启动模式！')
            }else if(!this.isconnected){
                Message.error('请连接设备！')
            }

            else{
                let data = this.global.getAllConfig()
                let mode = this.startMode
                data.channelMode = this.startMode
                if(mode<=5||mode>=10){
                    this.disableSave = true
                }else{
                    this.disableSave = false
                }
                this.$emit('changeMode',mode);
                 console.log(data)
                    toolbar.upload(data).then(res =>{
                        console.log(res.data)
                        if(res.data.code == 0){
                            this.set_flashConfig(1)
                            operation.startTest().then(re =>{
                                if(re.data.code == 0){
                                    Message.success("启动成功")
                                    this.set_setChannel(1)
                                    if(this.startRes == 0)
                                        this.set_startRes(1)
                                }else{
                                    Message.error(re.data.message)
                                }
                            })
                        }else {
                            Message.error(res.data.message)
                        }
                    }).catch( err=>{
                        
                    })
               
                
            }
        },
        OnStpStart(){
            operation.endTest().then(res =>{
                this.set_isTesting(0)
            })
        },
        startModeChange(value){

            this.global.channelMode = value
            let data = this.global.getAllConfig()
            data.channelMode = value
           // console.log(data)
            toolbar.upload(data).then(res =>{
                if(res.data.code){
                    Message.error(res.data.message)
                }
            })
           // console.log(this.global.channelMode)
            if(value<=5||value>=10){
                this.disableSave = true
            }else{
                this.disableSave = false
            }
            this.$emit('changeMode',value);
        },
        channel(){
            let data = {
                channel1A:this.global.channel1A,
                channel1B:this.global.channel1B,
                channel2A:this.global.channel2A,
                channel2B:this.global.channel2B,
                channelAll:this.global.channelAll,
                channelMode:this.startMode
            }
            operation.upchannel(data).then(res =>{
                operation.startTest().then(res =>{
                    this.set_isTesting(1)
                })
                
            }).catch(err =>{

            })
        },
        get_response(){
            operation.response().then(res =>{
                //console.log(res)
                let message = res.data
                let start =  parseInt(message[0])
                let end = parseInt(message[1])
                message.shift()
                message.shift()
                if(start == 0){
                    message.shift()
                    start++
                }
                //console.log(message)
                if(this.messageNumber < start){
                    this.resolve(message)
                }else if(this.messageNumber < end){
                    let len = this.messageNumber - start + 1
                    for(let i = 0;i<len;i++)
                        message.shift()
                    this.resolve(message)
                }
                this.set_messageNumber(end)
            })
        },
        resolve(response){
            let len = response.length
            let channel
            let Plain
            for(let i = 0;i<len;i++){
                let str = response[i]
                let type = this.getType(str)
                //console.log(type)
                let arr = str.split(" ")
                console.log(arr)
                switch(type){
                    case 0: //VERSION  无意义报头
                        break
                    case 1:  //设备类型
                        this.set_interface_type(arr[1])
                        this.deviceType = arr[1]
                        break
                    case 2: //设备状态
                        if(arr[1] == '1'){
                            if(arr[2] == 'UP') this.set_device1_state(1)
                            else if(arr[2] == 'DOWN') this.set_device1_state(0)
                        }else if(arr[1] == '2'){
                            if(arr[2] == 'UP') this.set_device2_state(1)
                            else if(arr[2] == 'DOWN') this.set_device2_state(0)
                        }
                        break
                    case 3:         //右侧监控数据
                        if(arr[1] == '1'){
                            this.global.response.mon_resp_1 = str
                            this.set_flashResponse(1)
                        } else if(arr[1] == '2'){
                            this.global.response.mon_resp_1 = str
                            this.set_flashResponse(2)
                        }
                        break
                    case 4:         //多行数据，针对不同通道的密文，需解密
                        Plain = 0
                        switch(arr[2]){
                            case '1A':
                                channel = 1
                                this.global.response.crypto_rcvd_1A = str
                                this.set_flashMi_c1(1)
                                break
                            case '1B':
                                channel = 2
                                this.global.response.crypto_rcvd_1B = str
                                this.set_flashMi_c2(1)
                                break
                            case '2A':
                                channel = 3
                                this.global.response.crypto_rcvd_2A = str
                                this.set_flashMi_c3(1)
                                break
                            case '2B':
                                channel = 4
                                this.global.response.crypto_rcvd_2B = str
                                this.set_flashMi_c4(1)
                                break
                        }
                        break
                    case 5:         //多行数据，针对不同通道的明文
                        Plain = 1
                        switch(arr[2]){
                            case '1A':
                                channel = 1
                                this.global.response.plain_revd_1A = str
                                this.set_flashPlain_c1(1)
                                break
                            case '1B':
                                channel = 2
                                this.global.response.plain_revd_1B = str
                                this.set_flashPlain_c2(1)
                                break
                            case '2A':
                                channel = 3
                                this.global.response.plain_revd_2A = str
                                this.set_flashPlain_c3(1)
                                break
                            case '2B':
                                channel = 4
                                this.global.response.plain_revd_2B = str
                                this.set_flashPlain_c4(1)
                                break
                        }
                        break
                    case 6:         //多行数据，FILE文本，无意义
                        break
                    case 7:         //底部停止信号
                        this.global.response.end_of_test = str
                        this.low_text += (str+'\n')
                        break
                    case 8:
                        if(Plain == 1){
                            switch(channel){
                                case 1:
                                    console.log(str)
                                    this.global.response.plain_revd_text_1A = str.slice(2)
                                    this.set_flashPlain_text_c1(1)
                                    break
                                case 2:
                                    this.global.response.plain_revd_text_1B = str.slice(2)
                                    this.set_flashPlain_text_c2(1)
                                    break
                                case 3:
                                    this.global.response.plain_revd_text_2A = str.slice(2)
                                    this.set_flashPlain_text_c3(1)
                                    break
                                case 4:
                                    this.global.response.plain_revd_text_2B = str.slice(2)
                                    this.set_flashPlain_text_c4(1)
                                    break
                            }
                        }else if(Plain == 0){
                            switch(channel){
                                case 1:
                                    this.global.response.crypto_rcvd_text_1A = str.slice(2)
                                    this.set_flashMi_text_c1(1)
                                    break
                                case 2:
                                    this.global.response.crypto_rcvd_text_1B = str.slice(2)
                                    this.set_flashMi_text_c2(1)
                                    break
                                case 3:
                                    this.global.response.crypto_rcvd_text_2A = str.slice(2)
                                    this.set_flashMi_text_c3(1)
                                    break
                                case 4:
                                    this.global.response.crypto_rcvd_text_2B = str.slice(2)
                                    this.set_flashMi_text_c4(1)
                                    break
                            }
                        }
                        break

                    
                }
                //setTimeout(function(){}, 1000);
            }
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        getType(str){
           let arr = str.split(" ")
           if(str[0] == '-') //多行数据的下一行
              return 8
           switch(arr[0]){
                case 'VERSION':
                    return 0
                    break
                case 'INTERFACE-TYPE':
                    return 1
                    break
                case 'DEVICE-STATE':
                    return 2
                    break
                case 'MON-RESP':
                    return 3
                    break
                case 'DATA':
                    if(arr[1] == "CRYPTO-RCVD") return 4
                    if(arr[1] == "PLAIN-RCVD") return 5
                    if(arr[1] == "FILE") return 6
                    break
                case 'END-OF-TEST':
                    return 7
                    break
           }
        },
        set_timer(){
            this.Timer = setInterval( () => {
               this.get_response()
　　　　　　}, 3000)
        },
        clear_timer(){
            clearInterval(this.Timer)
        }
    },
    distroyed() {
        clearInterval(this.timer)
    },
    watch:{
        setChanneled: function(val) { //li就是改变后的wifiList值
            if(val){
                this.channel()
                this.set_setChannel(0)
                this.set_setChanneled(0)
            }else{
                //console.log(this.setChannel)
            }
       },
       isTesting: function(val){
           if(val){
               this.testing = true
           }else{
               this.testing = false
           }
       },
       device1_state: function(val){
           this.device1_up = val
       },
       device2_state: function(val){
           this.device2_up = val
       },
       interface_type: function(val){
           this.deviceType = val
       },
       isconnected: function(val){
           this.connected = val
       },
       flashTimer: function(val){
           if(val == 1){
               this.clear_timer()
               //调用一次
               this.set_timer()
               this.set_flashTimer(0)
           }
       },
       flashOperation: function(val){
           if(val == 1){
               let config = this.global.getAllConfig()
               this.ip = config.deviceIP
               this.startMode = config.channelMode
               if(this.startMode<=5||this.startMode>=10){
                this.disableSave = true
                    }else{
                        this.disableSave = false
                    }
                    this.$emit('changeMode',this.startMode);
                    this.set_flashOperation(0)
                }
       },
       startRes: function(val){
           if(val == 1){
               this.set_timer()
               this.set_startRes(0)
           }
       }
    }
}
</script>
<style scoped>
.M-start-fleg-up {
  width: 45px;
  text-align: center;
  padding: 9px 0;
  margin-right: 5px;
  background-color: #67c23a;
  display: inline-block;
}
.M-start-fleg-down {
  width: 45px;
  text-align: center;
  padding: 9px 0;
  margin-right: 5px;
  background-color: #ff0000;
  display: inline-block;
}
.M-start-fleg {
  width: 45px;
  text-align: center;
  padding: 9px 0;
  margin-right: 5px;
  background-color: #7e7e7e;
  display: inline-block;
}
.k-start-fleg {
  width: 40px;
  height: 20px;
  text-align: center;
  padding: 5px 0;
  margin-right: 5px;
  background-color: #67c23a;
  display: inline-block;
}
.null-num-fleg {
  position: relative;
  top: 6px;
  width: 1em;
  display: inline-block;
  height: 30px;
  background-color: #67c23a;
}
.null-1-fleg-up {
  width: 100%;
  height: 14px;
  background-color: #67c23a;
  font-size: 10px;
  border-bottom: 1px solid #ffffff;
}
.null-1-fleg-down {
  width: 100%;
  height: 14px;
  background-color: #ff0000;
  font-size: 10px;
  border-bottom: 1px solid #ffffff;
}
.null-1-fleg {
  width: 100%;
  height: 14px;
  background-color: #7e7e7e;
  font-size: 10px;
  border-bottom: 1px solid #ffffff;
}
.null-2-fleg-up {
  width: 100%;
  height: 14px;
  background-color: #67c23a;
  font-size: 10px;
}
.null-2-fleg-down {
  width: 100%;
  height: 14px;
  background-color: #ff0000;
  font-size: 10px;
}
.null-2-fleg {
  width: 100%;
  height: 14px;
  background-color: #7e7e7e;
  font-size: 10px;
}
.wk-fleg {
  width: 40px;
  height: 20px;
  text-align: center;
  position: relative;
  padding: 5px 0;
  background-color: #ff0000;
  display: inline-block;
  margin-left: 40px;
}
.signal{
    position: absolute;
    left: 76%;
}
.start-box{
    margin-bottom: 10px
}
.input-box{
    width: 150px;
    padding-left:10px;
    float:left;
}
.text{
    font-size: 17px;
    padding-left:10px;
    float:left;
    padding-top: 5px;
}
.save{
    position: absolute;
    right: 30%;
}

</style>