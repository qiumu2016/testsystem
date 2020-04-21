<template>
        <el-tabs type="border-card">
            <el-tab-pane label="通道1A">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input type="number" step="0.1" min="0.1" max="8000" @change= "check_length_1A" v-model="A1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input type="number" step="1" min="1" max="2000000000" @change= "check_frame_1A" v-model="A1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_1A" v-model="A1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A1Form.vox" class="in_put" :disabled="true" size="small"></el-input>
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
                    v-if="body_mode"
                    v-model="A1Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMing" 
                            v-model="A1Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="A1Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="A1Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道1B">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input type="number" step="0.1" min="0.1" max="8000" @change= "check_length_1B" v-model="B1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input type="number" step="1" min="1" max="2000000000" @change= "check_frame_1B" v-model="B1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input Atype="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_1B" v-model="B1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B1Form.vox" class="in_put" :disabled="true" size="small"></el-input>
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
                    v-if="body_mode"
                    v-model="B1Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :disabled="disableMing" 
                            :rows=1
                            v-model="B1Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="B1Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="B1Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道2A">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input type="number" step="0.1" min="0.1" max="8000" @change= "check_length_2A" v-model="A2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input type="number" step="1" min="1" max="2000000000" @change= "check_frame_2A" v-model="A2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input Btype="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_2A" v-model="A2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A2Form.vox" class="in_put" :disabled="true" size="small"></el-input>
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
                    v-if="body_mode"
                    v-model="A2Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :disabled="disableMing" 
                            :rows=1
                            v-model="A2Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="A2Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="A2Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道2B">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input type="number" step="0.1" min="0.1" max="8000" @change= "check_length_2B" v-model="B2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input type="number" step="1" min="1" max="2000000000" @change= "check_frame_2B" v-model="B2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_2B" v-model="B2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B2Form.vox" class="in_put" :disabled="true" size="small"></el-input>
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
                    v-if="body_mode"
                    v-model="B2Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :disabled="disableMing" 
                            :rows=1 
                            v-model="B2Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="B2Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="B2Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通用选项">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input type="number" step="0.1" min="0.1" max="8000" @change= "check_length_all" v-model="allForm.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input type="number" step="1" min="1" max="2000000000" @change= "check_frame_all" v-model="allForm.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_all" v-model="allForm.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="allForm.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input @change="check_frameSpace_all" v-model="allForm.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select @change="check_baudRate_all" v-model="allForm.baudRate" class="in_put" size="small">
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
                        <el-input @change="check_MVStart_all" v-model="allForm.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input @change="check_MVcount_all" v-model="allForm.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    @change="check_confirmData_all"
                    :rows=8
                    v-model="allForm.confirmData">
                    </el-input>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="WK日志">
                <el-row style="margin-bottom: 12px">
                    <el-input type="textarea" :rows="13" v-model="wiki.text"></el-input>
                </el-row>
            </el-tab-pane>
        </el-tabs>
</template>
<script>
import check from '../utils/check'
export default {
    name:'Body_u',
    props: {
        m:{
            type:Number,
            required:true
        }
    },
    components:{

    },
    data(){
        return{
            options:[{
                    value:600,
                    label:'600'
                },{
                    value:1200,
                    label:'1200'
                },{
                    value:2400,
                    label:'2400'
                },{
                    value:9600,
                    label:'9600'
                },{
                    value:2000000,
                    label:'2000000'
                },{
                    value:4000000,
                    label:'4000000'
                },{
                    value:8000000,
                    label:'8000000'
                },{
                    value:12000000,
                    label:'12000000'
                },{
                    value:16000000,
                    label:'16000000'
                },{
                    value:26000000,
                    label:'26000000'
                },{
                    value:40000000,
                    label:'40000000'
                }
            ],
            A1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameSpace:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            B1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameSpace:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            A2Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameSpace:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            B2Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameSpace:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            allForm:{
                length:null,
                errorRadio:null,
                vox:null,
                frameCount:null,
                frameSpace:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
            },
            wiki:{
                text:'',
            },
            body_mode:true,
            disableMIwen:true,
            disableJieMI:true,
            disableMing:false,
        }
    },
    methods:{
        modeChange(a){
           if(a == 1){
               this.body_mode = true;
           }else if(a == 2){
               this.body_mode = false;
               this.disableMing = false;
               this.disableMIwen = true;
               this.disableJieMI = true;
           }else if(a == 3){
               this.body_mode = false;
               this.disableMing = true;
               this.disableMIwen = false;
               this.disableJieMI = true;
           }
        },
        check_length_1A(value){
            var l = check.check_length(value)
            this.A1Form.length = l
        },
        check_frame_1A(value){
            var l = check.check_frame(value)
            this.A1Form.frameCount = l
        },
        check_err_1A(value){
            var l = check.check_err(value)
            this.A1Form.errorRadio = l
        },
        check_length_1B(value){
            var l = check.check_length(value)
            this.B1Form.length = l
        },
        check_frame_1B(value){
            var l = check.check_frame(value)
            this.B1Form.frameCount = l
        },
        check_err_1B(value){
            var l = check.check_err(value)
            this.B1Form.errorRadio = l
        },
        check_length_2A(value){
            var l = check.check_length(value)
            this.A2Form.length = l
        },
        check_frame_2A(value){
            var l = check.check_frame(value)
            this.A2Form.frameCount = l
        },
        check_err_2A(value){
            var l = check.check_err(value)
            this.A2Form.errorRadio = l
        },
        check_length_2B(value){
            var l = check.check_length(value)
            this.B2Form.length = l
        },
        check_frame_2B(value){
            var l = check.check_frame(value)
            this.B2Form.frameCount = l
        },
        check_err_2B(value){
            var l = check.check_err(value)
            this.B2Form.errorRadio = l
        },
        check_length_all(value){
            var l = check.check_length(value)
            this.allForm.length = l
            this.A1Form.length = this.allForm.length
            this.A2Form.length = this.allForm.length
            this.B1Form.length = this.allForm.length
            this.B2Form.length = this.allForm.length
        },
        check_frame_all(value){
            var l = check.check_frame(value)
            this.allForm.frameCount = l
            this.A1Form.frameCount = this.allForm.frameCount
            this.A2Form.frameCount = this.allForm.frameCount
            this.B1Form.frameCount = this.allForm.frameCount
            this.B2Form.frameCount = this.allForm.frameCount
        },
        check_err_all(value){
            var l = check.check_err(value)
            this.allForm.errorRadio = l
            this.A1Form.errorRadio = this.allForm.errorRadio
            this.A2Form.errorRadio = this.allForm.errorRadio
            this.B1Form.errorRadio = this.allForm.errorRadio
            this.B2Form.errorRadio = this.allForm.errorRadio
        },
        check_frameSpace_all(value){
            this.A1Form.frameSpace = this.allForm.frameSpace
            this.A2Form.frameSpace = this.allForm.frameSpace
            this.B1Form.frameSpace = this.allForm.frameSpace
            this.B2Form.frameSpace = this.allForm.frameSpace
        },
        check_baudRate_all(value){
            this.A1Form.baudRate = this.allForm.baudRate
            this.A2Form.baudRate = this.allForm.baudRate
            this.B1Form.baudRate = this.allForm.baudRate
            this.B2Form.baudRate = this.allForm.baudRate
        },
        check_MVStart_all(value){
            this.A1Form.MVStart = this.allForm.MVStart
            this.A2Form.MVStart = this.allForm.MVStart
            this.B1Form.MVStart = this.allForm.MVStart
            this.B2Form.MVStart = this.allForm.MVStart
        },
        check_MVcount_all(value){
            this.A1Form.MVcount = this.allForm.MVcount
            this.A2Form.MVcount = this.allForm.MVcount
            this.B1Form.MVcount = this.allForm.MVcount
            this.B2Form.MVcount = this.allForm.MVcount
        },
        check_confirmData_all(value){
            this.A1Form.confirmData = this.allForm.confirmData
            this.A2Form.confirmData = this.allForm.confirmData
            this.B1Form.confirmData = this.allForm.confirmData
            this.B2Form.confirmData = this.allForm.confirmData
        }
    },
    watch:{ //监听value的变化，进行相应的操作即可
        m: function(a,b){     //a是value的新值，b是旧值
            this.modeChange(a);
    }
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