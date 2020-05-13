<template>
        <el-tabs type="border-card">
            <el-tab-pane label="通道1A">
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text">长度:</span>
                        <el-input :disabled="disableall" type="number" step="0.1" min="0.1" max="8000" @change= "check_length_1A" v-model="A1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input :disabled="disableall" type="number" step="1" min="1" max="2000000000" @change= "check_frame_1A" v-model="A1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input :disabled="disableall" type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_1A" v-model="A1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A1Form.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input  :disabled="disableall" v-model="A1Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select :disabled="disableall" v-model="A1Form.baudRate" class="in_put" size="small">
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
                        <el-input :disabled="disableall" v-model="A1Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input :disabled="disableall" v-model="A1Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    :disabled="disableall"
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
                        <el-input :disabled="disableall" type="number" step="0.1" min="0.1" max="8000" @change= "check_length_1B" v-model="B1Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input :disabled="disableall" type="number" step="1" min="1" max="2000000000" @change= "check_frame_1B" v-model="B1Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input :disabled="disableall" type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_1B" v-model="B1Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B1Form.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input :disabled="disableall" v-model="B1Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select :disabled="disableall" v-model="B1Form.baudRate" class="in_put" size="small">
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
                        <el-input :disabled="disableall" v-model="B1Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input :disabled="disableall" v-model="B1Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    :disabled="disableall"
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
                        <el-input :disabled="disableall" type="number" step="0.1" min="0.1" max="8000" @change= "check_length_2A" v-model="A2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input :disabled="disableall" type="number" step="1" min="1" max="2000000000" @change= "check_frame_2A" v-model="A2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input :disabled="disableall" type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_2A" v-model="A2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="A2Form.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input :disabled="disableall" v-model="A2Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select :disabled="disableall" v-model="A2Form.baudRate" class="in_put" size="small">
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
                        <el-input :disabled="disableall" v-model="A2Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input :disabled="disableall" v-model="A2Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :rows=8
                    :disabled="disableall"
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
                        <el-input :disabled="disableall" type="number" step="0.1" min="0.1" max="8000" @change= "check_length_2B" v-model="B2Form.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input :disabled="disableall" type="number" step="1" min="1" max="2000000000" @change= "check_frame_2B" v-model="B2Form.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input :disabled="disableall" type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_2B" v-model="B2Form.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="B2Form.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input :disabled="disableall" v-model="B2Form.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select :disabled="disableall" v-model="B2Form.baudRate" class="in_put" size="small">
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
                        <el-input :disabled="disableall" v-model="B2Form.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input :disabled="disableall" v-model="B2Form.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :disabled="disableall"
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
                        <el-input :disabled="disableall" type="number" step="0.1" min="0.1" max="8000" @change= "check_length_all" v-model="allForm.length" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">帧数:</span>
                        <el-input :disabled="disableall" type="number" step="1" min="1" max="2000000000" @change= "check_frame_all" v-model="allForm.frameCount" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">误码:</span>
                        <el-input :disabled="disableall" type="number" step="0.00000001" min="0.00000003" max="0.9999" @change= "check_err_all" v-model="allForm.errorRadio" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text">VOX:</span>
                        <el-input v-model="allForm.vox" class="in_put" :disabled="true" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="6">
                        <span class="text2">帧间隔:</span>
                        <el-input :disabled="disableall" @change="check_frameSpace_all" v-model="allForm.frameSpace" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">波特率:</span>
                        <el-select :disabled="disableall" @change="check_baudRate_all" v-model="allForm.baudRate" class="in_put" size="small">
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
                        <el-input :disabled="disableall" @change="check_MVStart_all" v-model="allForm.MVStart" class="in_put" size="small"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <span class="text2">采集量:</span>
                        <el-input :disabled="disableall" @change="check_MVcount_all" v-model="allForm.MVcount" class="in_put" size="small" placeholder="单位：字节"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px">
                    <span class="text">明文：</span>
                    <el-input
                    type="textarea"
                    :disabled="disableall"
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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import parameter from '../api/parameter'
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
                confirmData:'',
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
                confirmData:'',
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
                confirmData:'',
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
                confirmData:'',
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
                confirmData:'',
            },
            wiki:{
                text:'',
            },
            body_mode:true,
            disableMIwen:true,
            disableJieMI:true,
            disableMing:false,
            disableall:false,
        }
    },
    computed:{
      //...mapState(['isconnected']),   可以直接使用
      ...mapGetters([
        'setChannel',
        'setChanneled',
        'flashConfig',
        'isTesting',

        'flashPlain_c1',
        'flashPlain_c2',
        'flashPlain_c3',
        'flashPlain_c4',

        'flashPlain_text_c1',
        'flashPlain_text_c2',
        'flashPlain_text_c3',
        'flashPlain_text_c4',

        'flashMi_c1',
        'flashMi_c2',
        'flashMi_c3',
        'flashMi_c4',

        'flashMi_text_c1',
        'flashMi_text_c2',
        'flashMi_text_c3',
        'flashMi_text_c4',
      ])
    },
    methods:{
        ...mapMutations(["connect",
                         "disconnect",
                         "set_interface_type",
                         "set_device1_state",
                         "et_device2_state",
                         "set_ismonitorConfig",
                         "set_isevaluateConfig",
                         "set_ischannelConfig",
                         "set_isIP",
                         "set_setChannel",
                         "set_setChanneled",
                         "set_flashConfig",

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
                         "set_flashMi_text"
                         ]),
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
        },
        uploadChannel(){
            this.global.channel1A.length = this.A1Form.length
            this.global.channel1A.frame = this.A1Form.frameCount
            this.global.channel1A.frameInterval = this.A1Form.frameSpace
            this.global.channel1A.errorRate = this.A1Form.errorRadio
            this.global.channel1A.baudRate = this.A1Form.baudRate
            this.global.channel1A.startLocation = this.A1Form.MVStart
            this.global.channel1A.bytes = this.A1Form.MVcount
            this.global.channel1A.vox = this.A1Form.vox
            this.global.channel1A.text = this.A1Form.confirmData

            this.global.channel1B.length = this.B1Form.length
            this.global.channel1B.frame = this.B1Form.frameCount
            this.global.channel1B.frameInterval = this.B1Form.frameSpace
            this.global.channel1B.errorRate = this.B1Form.errorRadio
            this.global.channel1B.baudRate = this.B1Form.baudRate
            this.global.channel1B.startLocation = this.B1Form.MVStart
            this.global.channel1B.bytes = this.B1Form.MVcount
            this.global.channel1B.vox = this.B1Form.vox
            this.global.channel1B.text = this.B1Form.confirmData

            this.global.channel2A.length = this.A2Form.length
            this.global.channel2A.frame = this.A2Form.frameCount
            this.global.channel2A.frameInterval = this.A2Form.frameSpace
            this.global.channel2A.errorRate = this.A2Form.errorRadio
            this.global.channel2A.baudRate = this.A2Form.baudRate
            this.global.channel2A.startLocation = this.A2Form.MVStart
            this.global.channel2A.bytes = this.A2Form.MVcount
            this.global.channel2A.vox = this.A2Form.vox
            this.global.channel2A.text = this.A2Form.confirmData

            this.global.channel2B.length = this.B2Form.length
            this.global.channel2B.frame = this.B2Form.frameCount
            this.global.channel2B.frameInterval = this.B2Form.frameSpace
            this.global.channel2B.errorRate = this.B2Form.errorRadio
            this.global.channel2B.baudRate = this.B2Form.baudRate
            this.global.channel2B.startLocation = this.B2Form.MVStart
            this.global.channel2B.bytes = this.B2Form.MVcount
            this.global.channel2B.vox = this.B2Form.vox
            this.global.channel2B.text = this.B2Form.confirmData

            this.global.channelAll.length = this.allForm.length
            this.global.channelAll.frame = this.allForm.frameCount
            this.global.channelAll.frameInterval = this.allForm.frameSpace
            this.global.channelAll.errorRate = this.allForm.errorRadio
            this.global.channelAll.baudRate = this.allForm.baudRate
            this.global.channelAll.startLocation = this.allForm.MVStart
            this.global.channelAll.bytes = this.allForm.MVcount
            this.global.channelAll.vox = this.allForm.vox
            this.global.channelAll.text = this.allForm.confirmData
        },
        updateChannel(){
            let config = this.global.getAllConfig()

            this.allForm.length = config.channelAll.length
            this.allForm.frameCount = config.channelAll.frame
            this.allForm.frameSpace = config.channelAll.frameInterval
            this.allForm.errorRadio = config.channelAll.errorRate
            this.allForm.baudRate = config.channelAll.baudRate
            this.allForm.MVStart = config.channelAll.startLocation
            this.allForm.MVcount = config.channelAll.bytes
            this.allForm.vox = config.channelAll.vox
            this.allForm.confirmData = config.channelAll.text

            this.A1Form.length = config.channel1A.length
            this.A1Form.frameCount = config.channel1A.frame
            this.A1Form.frameSpace = config.channel1A.frameInterval
            this.A1Form.errorRadio = config.channel1A.errorRate
            this.A1Form.baudRate = config.channel1A.baudRate
            this.A1Form.MVStart = config.channel1A.startLocation
            this.A1Form.MVcount = config.channel1A.bytes
            this.A1Form.vox = config.channel1A.vox
            this.A1Form.confirmData = config.channel1A.text

            this.B1Form.length = config.channel1B.length
            this.B1Form.frameCount = config.channel1B.frame
            this.B1Form.frameSpace = config.channel1B.frameInterval
            this.B1Form.errorRadio = config.channel1B.errorRate
            this.B1Form.baudRate = config.channel1B.baudRate
            this.B1Form.MVStart =  config.channel1B.startLocation
            this.B1Form.MVcount = config.channel1B.bytes
            this.B1Form.vox = config.channel1B.vox
            this.B1Form.confirmData = config.channel1B.text

            this.A2Form.length = config.channel2A.length
            this.A2Form.frameCount = config.channel2A.frame
            this.A2Form.frameSpace = config.channel2A.frameInterval
            this.A2Form.errorRadio = config.channel2A.errorRate
            this.A2Form.baudRate = config.channel2A.baudRate
            this.A2Form.MVStart = config.channel2A.startLocation
            this.A2Form.MVcount = config.channel2A.bytes
            this.A2Form.vox = config.channel2A.vox
            this.A2Form.confirmData = config.channel2A.text

            this.B2Form.length = config.channel2B.length
            this.B2Form.frameCount = config.channel2B.frame
            this.B2Form.frameSpace = config.channel2B.frameInterval
            this.B2Form.errorRadio = config.channel2B.errorRate
            this.B2Form.baudRate = config.channel2B.baudRate
            this.B2Form.MVStart = config.channel2B.startLocation
            this.B2Form.MVcount =  config.channel2B.bytes
            this.B2Form.vox = config.channel2B.vox
            this.B2Form.confirmData = config.channel2B.text

            
        },
        decode(str){
            let arr = str.split(" ")
            let result = ''
            for(let i  = 0;i<arr.length;i++){
                result +=  ((parseInt(arr[i],16)+1).toString(16) +' ')
            }
            return result.toUpperCase()
        }
    },
    watch:{ //监听value的变化，进行相应的操作即可
        m: function(a,b){     //a是value的新值，b是旧值
            this.modeChange(a);
        },
        setChannel: function(val) { //li就是改变后的wifiList值
            if(val){
                this.uploadChannel()
                this.set_setChanneled(1)
            }else{
                //console.log(this.setChannel)
            }
       },
       flashConfig: function(val){
           if(val){
               this.updateChannel()
               this.set_flashConfig(0)
           }
       },
       isTesting: function(val){
           if(val == 1){
               this.disableall = true
           }else{
               this.disableall = false
           }
       },
       flashPlain_c1: function(val){
           if(val == 0) return 
           this.A1Form.confirmData += (this.global.response.plain_revd_1A +'\n')
           this.set_flashPlain_c1(0)
       },
       flashPlain_c2: function(val){
           if(val == 0) return 
           this.B1Form.confirmData += (this.global.response.plain_revd_1B +'\n')
           this.set_flashPlain_c2(0)
       },
       flashPlain_c3: function(val){
           if(val == 0) return 
           this.A2Form.confirmData += (this.global.response.plain_revd_2A +'\n')
           this.set_flashPlain_c3(0)
       },
       flashPlain_c4: function(val){
           if(val == 0) return 
           this.B2Form.confirmData += (this.global.response.plain_revd_2B +'\n')
           this.set_flashPlain_c4(0)
       },

       flashPlain_text_c1: function(val){
           if(val == 0) return 
           this.A1Form.confirmData += (this.global.response.plain_revd_text_1A +'\n')
           this.set_flashPlain_text_c1(0)
       },
       flashPlain_text_c2: function(val){
           if(val == 0) return 
           this.B1Form.confirmData += (this.global.response.plain_revd_text_1B +'\n')
           this.set_flashPlain_text_c2(0)
       },
       flashPlain_text_c3: function(val){
           if(val == 0) return 
           this.A2Form.confirmData += (this.global.response.plain_revd_text_2A +'\n')
           this.set_flashPlain_text_c3(0)
       },
       flashPlain_text_c4: function(val){
           if(val == 0) return 
           this.B2Form.confirmData += (this.global.response.plain_revd_text_2B +'\n')
           this.set_flashPlain_text_c4(0)
       },

       flashMi_c1: function(val){
           if(val == 0) return 
           this.A1Form.MIwen += (this.global.response.crypto_rcvd_1A +'\n')
           this.set_flashMi_c1(0)
       },
       flashMi_c2: function(val){
           if(val == 0) return 
           this.B1Form.MIwen += (this.global.response.crypto_rcvd_1B +'\n')
           this.set_flashMi_c2(0)
       },
       flashMi_c3: function(val){
           if(val == 0) return 
           this.A2Form.MIwen += (this.global.response.crypto_rcvd_2A +'\n')
           this.set_flashMi_c3(0)
       },
       flashMi_c4: function(val){
           if(val == 0) return 
           this.B2Form.MIwen += (this.global.response.crypto_rcvd_2B +'\n')
           this.set_flashMi_c4(0)
       },

       flashMi_text_c1: function(val){
           if(val == 0) return 
           this.A1Form.MIwen += (this.global.response.crypto_rcvd_text_1A +'\n')
           this.A1Form.decode_MIwen += (this.decode(this.global.response.crypto_rcvd_text_1A)+'\n')
           this.set_flashMi_text_c1(0)
       },
       flashMi_text_c2: function(val){
           if(val == 0) return 
           this.B1Form.MIwen += (this.global.response.crypto_rcvd_text_1B +'\n')
           this.B1Form.decode_MIwen += (this.decode(this.global.response.crypto_rcvd_text_1B)+'\n')
           this.set_flashMi_text_c2(0)
       },
       flashMi_text_c3: function(val){
           if(val == 0) return 
            this.A2Form.MIwen += (this.global.response.crypto_rcvd_text_2A +'\n')
           this.A2Form.decode_MIwen += (this.decode(this.global.response.crypto_rcvd_text_2A)+'\n')
           this.set_flashMi_text_c3(0)
       },
       flashMi_text_c4: function(val){
           if(val == 0) return 
           this.B2Form.MIwen += (this.global.response.crypto_rcvd_text_2B +'\n')
           this.B2Form.decode_MIwen += (this.decode(this.global.response.crypto_rcvd_text_2B)+'\n')
           this.set_flashMi_text_c4(0)
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
.text2{
    font-size:17px;
    margin-right: 5px;
    float:left;
}
.in_put{
    width: 120px;
}

</style>