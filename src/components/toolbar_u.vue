<template>
    <div>
        <el-menu mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">操作</template>
                <el-menu-item v-for="(value, index) in menu.option" :key="index" :index="1 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">监控参数</el-menu-item>
            <el-submenu index="3">
                <template slot="title">监控命令</template>
                <el-menu-item v-for="(value, index) in menu.monitorCommand" :key="index" :index="3 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">wk</template>
                <el-menu-item v-for="(value, index) in menu.wk" :key="index" :index="4 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">测评参数</el-menu-item>
            <el-submenu index="6">
                <template slot="title">测评命令</template>
                <el-menu-item v-for="(value, index) in menu.testCommand" :key="index" :index="6 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">帮助</template>
                <el-menu-item v-for="(value, index) in menu.help" :key="index" :index="7 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-dialog class="monitorDialog"
            title="监控命令的参数设置"
            :visible.sync="monitorDialogVisible"
            width="45%"
            center >
            <el-col :span="12">
               <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备1参数</span>
                    </div>
                    <el-row>
                        <span>3&nbsp; 设置工作模式 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.workMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in workMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span>5&nbsp; 设置/查询工组</span>
                    </el-row>
                    <el-row>
                        <span class="text">种类&nbsp;</span>
                        <el-select v-model="monitorDevice_1.workClass" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workClass"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text">组号&nbsp;</span>
                        <el-select v-model="monitorDevice_1.workNumber" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备2参数</span>
                    </div>
                    <el-row>
                        <span>3 &nbsp;设置工作模式 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.workMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in workMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span>5 &nbsp;设置/查询工组 &nbsp;</span>
                    </el-row>
                    <el-row>
                        <span class="text">种类</span>
                        <el-select v-model="monitorDevice_2.workClass" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workClass"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text">组号</span>
                        <el-select v-model="monitorDevice_2.workNumber" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                </el-card>
            </el-col>
            <span slot="footer" class="dialog-footer">
                <el-button @click="monitorDialogCancel()">取 消</el-button>
                <el-button type="primary" @click="monitorDialogSubmit()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog class="monitorDialog"
            title="测评命令的参数设置"
            :visible.sync="testDialogVisible"
            width="45%"
            center >
            <el-col :span="12">
               <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备1参数</span>
                    </div>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK模式 &nbsp;</span>
                        <el-select v-model="testDevice_1.IKmode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in IKmode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK参数  &nbsp;</span>
                        <el-input v-model="testDevice_1.IKparam" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                   <el-row style="margin-bottom: 10px">
                        <span class="text">WK模式 &nbsp;</span>
                        <el-select v-model="testDevice_1.WKmode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in WKmode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text">WK参数  &nbsp;</span>
                        <el-input type="textarea" :rows=3 v-model="testDevice_1.WKparam" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span >设备2参数</span>
                    </div>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK模式 &nbsp;</span>
                        <el-select v-model="testDevice_2.IKmode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in IKmode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK参数 &nbsp;</span>
                        <el-input v-model="testDevice_2.IKparam" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                   <el-row style="margin-bottom: 10px">
                        <span class="text">WK模式 &nbsp;</span>
                        <el-select v-model="testDevice_2.WKmode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in WKmode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text"> WK参数 &nbsp;</span>
                        <el-input type="textarea" :rows=3 v-model="testDevice_2.WKparam" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                </el-card>
            </el-col>
            <span slot="footer" class="dialog-footer">
                <el-button @click="testDialogCancel()">取 消</el-button>
                <el-button type="primary" @click="testDialogSubmit()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog class ="channelDialog" title="设置信道号"
            :visible.sync="channelDialogVisible"
            width="35%"
            center >
            <el-row style="margin-bottom: 2px">
                <span class="text5">设备1信道号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-input v-model="device_1_channel" class="in_put_1" size="small">
                </el-input>
            </el-row>
            <el-row style="margin-bottom: 2px">
                <span class="text5">设备2信道号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <el-input v-model="device_2_channel" class="in_put_1" size="small">
                </el-input>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="channelDialogCancel()">取 消</el-button>
                <el-button type="primary" @click="channelDialogSubmit()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog class = "" title="导入配置文件"
        :visible.sync="uploadDialogVisible"
        width="35%"
        center>
            <el-upload action="/"
                    ref="upload"
                    accept=".json"			                      
                    :before-upload="beforeUpload"
                    style="text-align: center; "		                         
                    >
            <el-button style="" type="primary" >导入配置文件</el-button>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script>
import toolbar from '../api/toolbar'
import { Message } from 'element-ui'
import { mapMutations } from 'vuex'
export default {
    name:'menu_u',
    components:{

    },
    data(){
        return{
            textData:'',
            fileList:[],
            uploadDialogVisible:false,
            channelDialogVisible:false,
            monitorDialogVisible:false,
            testDialogVisible:false,
            monitorParaVisible:false,
            testParaVisible:false,
            uploadVisible:false,
            device_1_channel:666,
            device_2_channel:888,
            testDevice_1:{
                IKmode:null,
                IKparam:'',
                WKmode:null,
                WKparam:'',
            },
            testDevice_2:{
                IKmode:null,
                IKparam:'',
                WKmode:null,
                WKparam:'',
            },
            IKmode:[
                {value:0,label:'00-Work'},
                {value:1,label:'01-Tdm'},
                {value:2,label:'02-Aloha'},
                {value:3,label:'03-Kde'},
            ],
            WKmode:[
                {value:0,label:'00-Work'},
                {value:1,label:'01-Tdm'},
                {value:2,label:'02-Aloha'},
                {value:3,label:'03-Kde'},
            ],
            monitorDevice_1:{
                workMode:null,
                workClass:null,
                workNumber:null,
            },
            monitorDevice_2:{
                workMode:null,
                workClass:null,
                workNumber:null,
            },
            workMode:[
                {value:10,label:'10-XX2JZ'},
                {value:11,label:'11-XX2JQ'},
                {value:12,label:'11-XX2DD'},
                {value:13,label:'11-XX2YJ'},
                {value:14,label:'14-XX2中心站ALOHA解TDM加'},
                {value:15,label:'15-XX2中心站ALOHA'},
                {value:16,label:'14-XX2中心站TDM'},
            ],
            workClass:[
                {value:1,label:'01-NET'},
                {value:6,label:'06-PTOP'},
                {value:7,label:'07-GROUPW'},
                {value:8,label:'08-YJ'},
            ],
            workNumber:[
                {value:0,label:'00-xx00'},
                {value:1,label:'01-xx01'},
                {value:2,label:'02-xx02'},
                {value:3,label:'03-xx03'},
            ],
            menu: {
                option: [
                '连接',
                '断开连接',
                '导入配置...',
                '导出配置...',
                '查看测试设备状态',
                '保存测试配置状态',
                '退出'
                ],
                monitorCommand: [
                '查询设备状态',
                '查询工作模式',
                '设置工作模式',
                '通知本次呼叫结束',
                '设置工作组号',
                '查询工作组号',
                ],
                wk: [
                '设置信号道...',
                '打开监听',
                '关闭监听',
                '入网申请',
                '退网申请',
                'DD申请建立-单次',
                'DD申请建立-定时打开',
                'JQ预分配申请-单次',
                'JQ预分配申请-定时打开',
                'JZ实时分配申请-单次',
                'JZ实时分配申请-定时打开'
                ],
                testCommand: [
                '设备1设置IK',
                '设备1设置Wk',
                '设备1进入测评状态',
                '设备1退出测评状态',
                '设备2设置IK',
                '设备2设置Wk',
                '设备2进入测评状态',
                '设备2退出测评状态',
                ],
                help: [
                '联机帮助...',
                '关于测试工具'
                ]
           }, 
        }
    },
    beforeCreate() {
			// 读取文件
			FileReader.prototype.reading = function ({encode} = pms) {
				let bytes = new Uint8Array(this.result);    //无符号整型数组
				let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
				return text;
			};
			/* 重写readAsBinaryString函数 */
			FileReader.prototype.readAsBinaryString = function (f) {
				if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
					this.onload = e => {  //在this.onload函数中，完成公共处理
						let rs = this.reading();
						console.log(rs);
					};
				this.readAsArrayBuffer(f);  //内部会回调this.onload方法
			};
    },
    mounted(){
        this.download()
        toolbar.showState().then(res =>{
                        if(res.data.code == 0){
                            Message.success("连接成功")
                            this.connect()
                            this.set_startRes(1)
                        }else{
                            Message.error(res.data.message)
                        }
                    }).catch(err =>{

                    })
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
                         "set_flashConfig",
                         "set_flashOperation",
                         "set_flashTimer",
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
                         "set_startRes"
                         ]),
        beforeUpload(file){
            this.fileList = [file]
            this.read(file);
            return false
        },
        read(f) {
                let rd = new FileReader();
                rd.onload = e => {  
                //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
                try {
                    let text = JSON.parse(rd.reading({encode: 'UTF-8'}))
                    this.global.configSave(text)
                    let data = this.global.getAllConfig()
                    toolbar.upload(data).then(res =>{
                        console.log(res.data)
                        if(res.data.code == 0){
                            this.set_flashConfig(1)
                            this.testDevice_1 = data.device1EC
                            this.testDevice_2 = data.device2EC
                            this.monitorDevice_1 = data.device1MC
                            this.monitorDevice_2 = data.device2MC
                            Message.success("导入成功")
                        }else {
                             Message.error("导入失败")
                        }
                    }).catch( err=>{
                        
                    })
                    this.uploadDialogVisible = false;
                    
                }
                catch(err) {
                    this.uploadDialogVisible = false;
                    Message.error("导入失败，请检查文件内容是否正确")
                }
                };
                rd.readAsBinaryString(f);
        },
        channelDialogCancel(){
            console.log(this.device_1_channel)
            this.channelDialogVisible = false
        },
        channelDialogSubmit(){
            console.log(this.device_2_channel)
            this.channelDialogVisible = false
        },
        monitorDialogCancel(){
            this.monitorDialogVisible = false
        },
        monitorDialogSubmit(){
            this.global.device1MC = this.monitorDevice_1
            this.global.device2MC = this.monitorDevice_2
            let data = {
                device1MC:this.monitorDevice_1,
                device2MC:this.monitorDevice_2
            }
            toolbar.monitor(data).then(res =>{
                Message.success("设置成功")
            }).catch(err=>{
                Message.error("设置失败")
            })
            this.monitorDialogVisible = false
        },
        testDialogCancel(){
            this.testDialogVisible = false
        },
        testDialogSubmit(){
            
            let data = {
                device1EC:this.testDevice_1,
                device2EC:this.testDevice_2,
            }
            toolbar.evaluate(data).then(res =>{

            }).catch(err =>{

            })
            this.testDialogVisible = false
        },
        download(){
            toolbar.outPutFile().then(res =>{
                        if (res.status == 200) {
                            const content = res
                            this.global.configSave(content.data)
                            this.testDevice_1 = content.data.device1EC
                            this.testDevice_2 = content.data.device2EC
                            this.monitorDevice_1 = content.data.device1MC
                            this.monitorDevice_2 = content.data.device2MC
                            this.set_flashConfig(1)
                            this.set_flashOperation(1)
                        }else{
                            Message.error("导出失败")
                        }
                    })
        },
        handleSelect (value) {
            switch(value){
                case '1_0':
                    // if(this.global.deviceIP == "")
                    //     Message.error("请输入正确的IP地址")
                    // else{
                        toolbar.connect().then(res =>{
                            if (res.data.code == 0){
                                 this.connect()
                                 Message.success("连接成功")
                            }else{
                                this.disconnect()
                                Message.error(res.data.message)
                            }   
                        }).catch(err =>{  
                        })
                    //}
                    break
                case '1_1':
                    toolbar.disconnect().then(res =>{
                        console.log(res)
                        this.disconnect()
                        Message.success("已断开连接")
                    }).catch(err =>{
                        console.log(err)
                    })
                    this.disconnect()
                    break
                case '1_2':
                    //console.log("上传")
                    this.uploadDialogVisible = true;
                    break
                case '1_3':
                    toolbar.outPutFile().then(res =>{
                        if (res.status == 200) {
                            const content = res
                            const blob = new Blob([JSON.stringify(content.data)])
                            const fileName = 'config.json'
                            if ('download' in document.createElement('a')) { // 非IE下载
                            const elink = document.createElement('a')
                                elink.download = fileName
                                elink.style.display = 'none'
                                elink.href = URL.createObjectURL(blob)
                                document.body.appendChild(elink)
                                elink.click()
                                URL.revokeObjectURL(elink.href) // 释放URL 对象
                                document.body.removeChild(elink)
                            } else { // IE10+下载
                                navigator.msSaveBlob(blob, fileName)
                            }
                        }else{
                            Message.error("导出失败")
                        }
                    })
                    break
                case '1_4':
                    toolbar.showState().then(res =>{
                        console.log(res)
                    }).catch(err =>{

                    })
                    break
                case '1_5':
                    toolbar.saveState().then(res =>{
                        console.log(res)
                    }).catch(err =>{

                    })
                    break
                case '1_6':
                    break
                case '2':
                    this.monitorDialogVisible = true;
                    break
                case '3_0':
                    this.set_monitor_0(1)
                    break
                case '3_1':
                    this.set_monitor_1(1)
                    break
                case '3_2':
                    this.set_monitor_2(1)
                    break
                case '3_3':
                    this.set_monitor_3(1)
                    break
                case '3_4':
                    this.set_monitor_4(1)
                    break
                case '3_5':
                    this.set_monitor_5(1)
                    break
                case '4_0':
                    this.channelDialogVisible = true;
                    break
                case '5':
                    this.testDialogVisible = true;
                    break
                case '6_0':
                    this.set_evaluate_0(1)
                    break
                case '6_1':
                    this.set_evaluate_1(1)
                    break
                case '6_2':
                    this.set_evaluate_2(1)
                    break
                case '6_3':
                    this.set_evaluate_3(1)
                    break
                case '6_4':
                    this.set_evaluate_4(1)
                    break
                case '6_5':
                    this.set_evaluate_5(1)
                    break
                case '6_6':
                    this.set_evaluate_6(1)
                    break
                case '6_7':
                    this.set_evaluate_7(1)
                    break
            }
        }
    }
}
</script>
<style scoped>
.monitorbox{
    margin: 10px;
}
.in_put_1{
    width: 180px;
}
.in_put_2{
    width: 100px;
    float:left;
}
.text{
    margin-right: 5px;
    padding-left: 5px;
    float:left;
}
.text2{
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 4.5px;
    float:left;
}
.monitorDialog{
    height: 900px;
}
</style>