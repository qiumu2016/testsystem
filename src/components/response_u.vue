<template>
    <el-card body-style = "padding: 10px 15px 15px 15px">
         <el-row style="margin-bottom: 6px">
            <span class = "text">设备1监控命令/响应:</span>
         </el-row>
         <el-row style="margin-bottom: 6px">
            <el-input disabled type="textarea" :rows="7" v-model="device_1"></el-input>
         </el-row>
         <el-row style="margin-bottom: 6px">
             <span class = "text">设备2监控命令/响应:</span>
         </el-row>
         <el-row style="margin-bottom: 2px">
            <el-input disabled type="textarea" :rows="7" v-model="device_2"></el-input>
         </el-row>
    </el-card>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { Message } from 'element-ui'
import response from '../api/response'
export default {
    name:'Right_u',
    components:{

    },
    data(){
        return{
           device_1:'',
           device_2:'' 
        }
    },
    computed:{
        ...mapGetters([
            'monitor_0',
            'monitor_1',
            'monitor_2',
            'monitor_3',
            'monitor_4',
            'monitor_5',
            'evaluate_0',
            'evaluate_1',
            'evaluate_2',
            'evaluate_3',
            'evaluate_4',
            'evaluate_5',
            'evaluate_6',
            'evaluate_7',
            'flashResponse',
            'flashTimer'
        ])
    },
    methods:{
        ...mapMutations([
            "set_monitor_0",
            "set_monitor_1",
            "set_monitor_2",
            "set_monitor_3",
            "set_monitor_4",
            "set_monitor_5",
            "set_evaluate_0",
            "set_evaluate_1",
            "set_evaluate_2",
            "set_evaluate_3",
            "set_evaluate_4",
            "set_evaluate_5",
            "set_evaluate_6",
            "set_evaluate_7",
            "set_flashResponse",
            "set_flashTimer"
        ])
    },
    watch:{
        flashResponse: function(val){
          if(val == 1){
              this.device_1 += (this.global.response.mon_resp_1 +'\n')
          }else if(val == 2){
               this.device_2 += (this.global.response.mon_resp_2 + '\n')
          }
          this.set_flashResponse(0)
        },
        monitor_0: function(val){
            if(val == 1){
                response.queryDeviceState().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_0(0)
            }
        },
        monitor_1: function(val){
            if(val == 1){
                response.queryWorkMode().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_1(0)
            }
        },
        monitor_2: function(val){
            if(val == 1){
                response.setWorkMode().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_2(0)
            }
        },
        monitor_3: function(val){
            if(val == 1){
                response.endCall().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_3(0)
            }
        },
        monitor_4: function(val){
            if(val == 1){
                response.queryWorkGroupNum().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_4(0)
            }
        },
        monitor_5: function(val){
            if(val == 1){
                response.setWorkGroupNum().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_monitor_5(0)
            }
        },
        evaluate_0: function(val){
            if(val == 1){
                response.device1SetIK().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_0(0)
            }
        },
        evaluate_1: function(val){
             if(val == 1){
                response.device1SetWK().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_1(0)
            }
        },
        evaluate_2: function(val){
             if(val == 1){
                response.device1StartEvaluate().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_2(0)
            }
        },
        evaluate_3: function(val){
             if(val == 1){
                response.device1EndEvaluate().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_3(0)
            }
        },
        evaluate_4: function(val){
             if(val == 1){
                response.device2SetIK().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_4(0)
            }
        },
        evaluate_5: function(val){
             if(val == 1){
                response.device2SetWK().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_5(0)
            }
        },
        evaluate_6: function(val){
             if(val == 1){
                response.device2StartEvaluate().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_6(0)
            }
        },
        evaluate_7: function(val){
             if(val == 1){
                response.device2EndEvaluate().then(res =>{
                    if(res.data.code == 0){
                        this.device_1 += res.data.device1
                        this.device_2 += res.data.device2
                        this.set_flashTimer(1)
                    }else{
                        Message.error(res.data.message)
                    }
                })
                this.set_evaluate_7(0)
            }
        },
    }
}
</script>
<style scoped>
.text{
    font-size:17px;
    margin-right: 22px;
    float:left;
}


</style>