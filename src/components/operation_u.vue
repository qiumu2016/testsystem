<template>
    <el-card style="margin-top:15px" body-style = "padding: 10px 15px 15px 15px">
        <el-row class = 'start-box'>
                <el-button @click="OnBtnStart" size="small"    :disabled="startStatus" style="padding-left:10px;float:left;" >启动</el-button>
                <el-select v-model="startMode" size="small" placeholder="请选择" style="padding-left:10px;float:left;" @change="startModeChange">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class = "save">
                    <span class="text">保存</span>
                    <el-input size="small" placeholder="输入文件路径" v-model="filePath" class="input-box" :disabled="disableSave"></el-input>
                    <el-button size="small" @click="SaveFile" style="margin-left:10px;float:left;">...</el-button>
                    <span class="text">IP</span>
                    <el-input class="input-box" size="small" @change="IPChange" v-model="ip"></el-input>
                </div>
                <span class = "signal">
                    <div class="M-start-fleg">M</div>
                    <div class="k-start-fleg">k</div>
                    <span class="null-num-fleg">
                        <div class="null-1-fleg"  v-if="true">1</div>
                        <div class="null-1-fleg"  v-else>1</div>
                        <div class="null-2-fleg"  v-if="true">2</div>
                        <div class="null-2-fleg"  v-else>2</div>
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
export default {
    name:'Lower_u',
    components:{

    },
    data(){
        return{
          startStatus:false,
          startMode:'',
          filePath:'',
          low_text:'',
          ip:'',
          disableSave:true,
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
    methods:{
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
                        console.log(res)
                    }).catch(err =>{

                    })
            }
        },
        SaveFile(){
            // console.log(this.global.servicePort)
            // this.global.servicePort++
            // console.log(this.global.servicePort)
            
        },
        OnBtnStart(){
            this.startStatus = !this.startStatus
        },
        startModeChange(value){
            if(value<=5||value>=10){
                this.disableSave = true
            }else{
                this.disableSave = false
            }
            this.$emit('changeMode',value);
        },
    }
}
</script>
<style scoped>
.M-start-fleg {
  width: 45px;
  text-align: center;
  padding: 9px 0;
  margin-right: 5px;
  background-color: #67c23a;
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
.null-1-fleg {
  width: 100%;
  height: 14px;
  background-color: #67c23a;
  font-size: 10px;
  border-bottom: 1px solid #ffffff;
}
.null-2-fleg {
  width: 100%;
  height: 14px;
  background-color: #67c23a;
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