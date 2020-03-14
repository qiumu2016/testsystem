<template>
    <el-card body-style = "padding: 10px 15px 15px 15px">
         <el-row style="margin-bottom: 6px">
            <span class = "text">设备1监控命令/响应:</span>
         </el-row>
         <el-row style="margin-bottom: 6px">
            <el-input type="textarea" :rows="7" v-model="device_1"></el-input>
         </el-row>
         <el-row style="margin-bottom: 6px">
             <span class = "text">设备2监控命令/响应:</span>
         </el-row>
         <el-row style="margin-bottom: 2px">
            <el-input type="textarea" :rows="7" v-model="device_2"></el-input>
         </el-row>
    </el-card>
</template>
<script>
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
    methods:{

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