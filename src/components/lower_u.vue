<template>
    <el-card style="margin-top:15px" body-style = "padding: 10px 15px 15px 15px">
        <el-row class = 'start-box'>
                <el-button @click="OnBtnStart" size="small"    :disabled="startStatus" style="padding-left:10px;float:left;" >启动</el-button>
                <el-select v-model="startMode" size="small" placeholder="请选择" style="padding-left:10px;float:left;" @change="startMenuChange">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span class="text">保存</span>
                <el-input size="small" placeholder="输入文件路径" v-model="filePath" class="input-box"></el-input>
                <el-button size="small" @click="SaveFile" style="margin-left:10px;float:left;">...</el-button>
                <span class="text">IP</span>
                <el-input class="input-box" size="small" @change="IPChange" v-model="ip"></el-input>
        </el-row>
        <el-row>
            <el-input type="textarea" :rows="6" :disabled="true" v-model="low_text"></el-input>
        </el-row>
         
    </el-card>
</template>
<script>
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
          ip:'255.255.255.255',
          options:[
            {value:1,label:'多路自环'},
            {value:2,label:'多路双向设备间交叉'},
            {value:3,label:'模式三'},
            {value:4,label:'单路自环（MW解析）'},
            {value:5,label:'单路单向设备间交叉（MW解析）'},
            {value:6,label:'MW采集'},
            {value:7,label:'MWW采集（超长帧）'},
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
        IPChange(){

        },
        SaveFile(){

        },
        OnBtnStart(){
            this.startStatus = !this.startStatus
        },
        startMenuChange(value){
            this.$emit('changeMode',value);
        },
    }
}
</script>
<style scoped>
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

</style>