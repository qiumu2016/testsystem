<template>
    <el-card style="margin-top:15px" body-style = "padding: 10px 15px 15px 15px">
        <el-row class = 'start-box'>
                <el-button @click="OnBtnStart" size="small"    :disabled="startStatus" style="padding-left:10px;float:left;" >启动</el-button>
                <el-select v-if="showStartMode" v-model="startMode" size="small" placeholder="请选择" style="padding-left:10px;float:left;" @change="startModeChange">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div v-if="showMode" class="save">
                    <span class="text" :v-show="showText">保存</span>
                    <el-input size="small" :v-show="showInput" :disabled="disableSave" placeholder="输入文件路径" v-model="filePath" class="input-box"></el-input>
                </div>
                <div v-else>
                    <div v-if="showMode2">
                    <el-select v-model="type" size="small" placeholder="请选择" style="padding-left:10px;float:left;" 
                    @change="typeChange">
                        <el-option
                        v-for="item in options_type"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="type_value" size="small" placeholder="请选择" style="padding-left:10px;float:left;" 
                    @change="valueChange">
                        <el-option
                        v-for="item in options_value"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    </div>
                </div>
                <div class="right">
                    <el-button size="small" @click="SaveFile" style="margin-left:10px;float:left;">...</el-button>
                    <span class="text">IP</span>
                    <el-input class="input-box" size="small" @change="IPChange" v-model="ip"></el-input>
                </div>
        </el-row>
        <el-row>
            <el-input type="textarea" :rows="6" :disabled="true" v-model="low_text"></el-input>
        </el-row>
         
    </el-card>
</template>
<script>
export default {
    name:'Lower_u',
    props: {
        tab:{
            type:Number,
            required:true
        }
    },
    components:{

    },
    data(){
        return{
          startStatus:false,
          startMode_ab:'',
          startMode_c:'',
          startMode:'',
          filePath:'',
          low_text:'',
          type:'',
          type_value:null,
          ip:'255.255.255.255',
          options_type:[
              {value:1,label:'数据'},
              {value:2,label:'话音'},
          ],
          options_value:[
              {value:'00',label:'00'},
              {value:'ff',label:'ff'},
          ],
          options:[],
          options1:[
            {value:1,label:'单路自环（MW解析）'},
            {value:2,label:'多路自环'},
            {value:3,label:'单路单向设备间交叉'},
            {value:4,label:'单路单向设备间交叉（MW解析）'},
            {value:5,label:'多路双向设备间交叉'},
            {value:6,label:'模式三'},
            {value:7,label:'MW采集'},
            {value:8,label:'MW采集（超长帧）'},
            {value:9,label:'收端一致性测试(MI文)'},
            {value:10,label:'噪声码采集'},
            {value:11,label:'生产阶段设备测试'},
            {value:12,label:'F多路自环'},
            {value:13,label:'F多路双向设备间交叉F'},
            {value:14,label:'F模式三'},
            {value:15,label:'F单路单向设备间交叉'},
          ],
          options2:[
            {value:1,label:'单路自环'},
            {value:2,label:'多路自环'},
            {value:3,label:'单路交叉'},
            {value:4,label:'多路交叉'},
          ],
          options:[],
          showText:true,
          showInput:true,
          showMode:true,
          showMode2:true,
          showStartMode:true,
          flag:1,
          disableSave:true,
        }
    },
    created(){
        this.options = this.options1
    },
    methods:{
        IPChange(){

        },
        SaveFile(){

        },
        OnBtnStart(){
            this.startStatus = !this.startStatus
            this.showMode = !this.showMode
        },
        startModeChange(value){
            if(this.flag == 1){
                this.startMode_ab = this.startMode
            }else{
                this.startMode_c = this.startMode
            }
            if(value<=6||value>=11){
                this.disableSave = true
            }else{
                this.disableSave = false
            }
            this.$emit('changeMode',value);
        },
        tabChange(a){
            if(a==5||a==6){
                this.showMode2 = true
                this.showStartMode = true
                this.showMode = false
                this.options = this.options2
                this.flag = 2
                this.startMode = this.startMode_c
            }
            else if(a>=1&&a<=4){
                this.showStartMode = true
                this.showMode = true
                this.options = this.options1
                this.flag = 1
                this.startMode = this.startMode_ab
            }else{
                this.showStartMode = false
                this.showMode2 = false
            }
        },
        typeChange(value){

        },
        valueChange(value){

        }
    },
    watch:{ //监听value的变化，进行相应的操作即可
        tab: function(a,b){     //a是value的新值，b是旧值
            this.tabChange(a);
        }
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
.right {
    position: absolute;
    left: 60%;
}
.save{
    position: absolute;
    left: 47%;
}

</style>