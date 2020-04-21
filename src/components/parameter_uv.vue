<template>
        <el-tabs type="border-card" @tab-click="handleClick">
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
                            :rows=1
                            :disabled="disableMing" 
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
                            :rows=1
                            :disabled="disableMing"
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
                            :rows=1
                            :disabled="disableMing"
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
            <el-tab-pane label="通道1C">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="C1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="C1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="C1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="C1Form.vox" class="in_put" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="C1Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="C1Form.baudRate" class="in_put" size="small">
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
                        <el-input v-model="C1Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="C1Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    v-if="body_mode"
                    v-model="C1Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMing" 
                            v-model="C1Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="C1Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="C1Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="通道2C">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input v-model="C2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input v-model="C2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input v-model="C2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="C2Form.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input v-model="C2Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select v-model="C2Form.baudRate" class="in_put" size="small">
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
                        <el-input v-model="C2Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input v-model="C2Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    v-if="body_mode"
                    v-model="C2Form.confirmData">
                    </el-input>
                    <div v-else>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMing" 
                            v-model="C2Form.confirmData">
                            </el-input>
                        </el-row>
                        <span class="text">MI文：</span>
                        <el-row style="margin-bottom: 12px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="disableMIwen"
                            v-model="C2Form.MIwen">
                            </el-input>
                        </el-row>
                        <span class="text">解MI后明文：</span>
                        <el-row style="margin-bottom: 11px">
                            <el-input
                            type="textarea"
                            :rows=1
                            :disabled="true"
                            v-model="C2Form.decode_MIwen">
                            </el-input>
                        </el-row>
                    </div>
                    
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
                        <el-input v-model="allForm.vox" class="in_put" :disabled="true" size="small"></el-input>
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
            <el-tab-pane label="WK日志">
               <el-row style="margin-bottom: 12px">
                    <el-input type="textarea" :rows="13" v-model="wiki.text"></el-input>
                </el-row>
            </el-tab-pane>
        </el-tabs>
</template>
<script>
export default {
    name:'Body_uv',
    props: {
        m_ab:{
            type:Number,
            required:true
        },
        m_c:{
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
                    value:1000000,
                    label:'1000000'
                }
            ],
            A1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameSpace:null,
                frameCount:null,
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
                frameSpace:null,
                frameCount:null,
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
                frameSpace:null,
                frameCount:null,
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
                frameSpace:null,
                frameCount:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            C1Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameSpace:null,
                frameCount:null,
                baudRate:null,
                MVStart:null,
                MVcount:null,
                confirmData:null,
                MIwen:'',
                decode_MIwen:''
            },
            C2Form:{
                length:null,
                errorRadio:null,
                vox:null,
                frameSpace:null,
                frameCount:null,
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
                frameSpace:null,
                frameCount:null,
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
        m_abChange(a){
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
        m_cChange(a){
            if(a == 1){
               this.body_mode = true;
           }else if(a == 2){
               this.body_mode = false;
               this.disableMing = false;
               this.disableMIwen = true;
               this.disableJieMI = true;
           }
        },
        handleClick(tab, event){
            let index = Number(tab.index) + 1;
            this.$emit('changeTab',index);
        }
    },
    watch:{ //监听value的变化，进行相应的操作即可
        m_ab: function(a,b){     //a是value的新值，b是旧值
            this.m_abChange(a);
        },
        m_c: function(a,b){
            this.m_cChange(a);
        },
    },
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