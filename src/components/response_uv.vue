<template>
    <el-card body-style = "padding: 7px 15px 15px 15px">
         <el-row style="margin-bottom: 6px">
            <span class = "text">设备1监控命令/响应</span>
         </el-row>
         <el-row style="margin-bottom: 6px">
            <el-input type="textarea" :rows="7" v-model="device_1"></el-input>
         </el-row>
         <el-row style="margin-bottom: 6px">
             <span class = "text">设备2监控命令/响应</span>
             <span class="text2">设备类型:</span>
                        <el-select v-model="device_type" class="in_put" size="mini">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
         </el-row>
         <el-row style="margin-bottom: 2px">
            <el-input type="textarea" :rows="7" v-model="device_2"></el-input>
         </el-row>
    </el-card>
</template>
<script>
export default {
    name:'Right_uv',
    components:{

    },
    data(){
        return{
            options:[{
                value:'新',
                lable:'new'
            },{
                value:'旧',
                lable:'old'
            }],
           device_1:'',
           device_2:'',
           device_type:''
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
.text2{
    font-size:17px;
    margin-right: 10px;
    float:left;
}
.in_put{
    float:left;
    width: 70px;
}


</style>