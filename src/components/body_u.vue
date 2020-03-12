<template>
        <el-tabs type="border-card">
            <el-tab-pane label="通道1A">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="A1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="A1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="A1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A1Form.vox" class="in_put" disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="A1Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="A1Form.baudRate" class="in_put" size="small">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集点:</span>
                        <el-input v-model="A1Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="A1Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    placeholder="请输入16进制数"
                    v-model="A1Form.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道1B">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="B1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="B1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="B1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B1Form.vox" class="in_put" disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="B1Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="B1Form.baudRate" class="in_put" size="small">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集点:</span>
                        <el-input v-model="B1Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="B1Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    placeholder="请输入16进制数"
                    v-model="B1Form.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道2A">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="A2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="A2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="A2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A2Form.vox" class="in_put" disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="A2Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="A2Form.baudRate" class="in_put" size="small">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集点:</span>
                        <el-input v-model="A2Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="A2Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    placeholder="请输入16进制数"
                    v-model="A2Form.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道2B">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="B2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="B2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="B2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B2Form.vox" class="in_put" disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="B2Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="B2Form.baudRate" class="in_put" size="small">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集点:</span>
                        <el-input v-model="B2Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="B2Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    placeholder="请输入16进制数"
                    v-model="B2Form.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通用选项">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="allForm.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="allForm.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="allForm.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="allForm.vox" class="in_put" disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="allForm.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="allForm.baudRate" class="in_put" size="small">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集点:</span>
                        <el-input v-model="allForm.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="allForm.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    placeholder="请输入16进制数"
                    v-model="allForm.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="wk日志">
                <el-input type="textarea" :rows="10" v-model="wiki.text"></el-input>
            </el-tab-pane>
        </el-tabs>
</template>
<script>
export default {
    name:'Body_u',
    components:{

    },
    data(){
        return{
            options:[{
                    value:600,
                    lable:'600'
                },{
                    value:1200,
                    lable:'1200'
                },{
                    value:2400,
                    lable:'2400'
                },{
                    value:9600,
                    lable:'9600'
                },{
                    value:2000000,
                    lable:'2000000'
                },{
                    value:4000000,
                    lable:'4000000'
                },{
                    value:8000000,
                    lable:'8000000'
                },{
                    value:12000000,
                    lable:'12000000'
                },{
                    value:16000000,
                    lable:'16000000'
                },{
                    value:26000000,
                    lable:'26000000'
                },{
                    value:40000000,
                    lable:'40000000'
                }
            ],
            A1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameCount:null,
                boudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            B1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameCount:null,
                boudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            A2Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameCount:null,
                boudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            B2Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameCount:null,
                boudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            allForm:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameCount:null,
                boudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            wiki:{
                text:'',
            },
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
    margin-right: 5px;
    float:left;
}
.in_put{
    width: 120px;
}

</style>