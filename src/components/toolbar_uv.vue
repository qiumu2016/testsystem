<template>
    <div>
        <el-menu mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">操作</template>
                <el-menu-item v-for="(value, index) in menu.option" :key="index" :index="1 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">控制参数</el-menu-item>
            <el-submenu index="3">
                <template slot="title">监控命令</template>
                <el-menu-item v-for="(value, index) in menu.monitorCommand" :key="index" :index="3 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">异步监控命令</template>
                <el-menu-item v-for="(value, index) in menu.asynMonitorCommand" :key="index" :index="4 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">wk</template>
                <el-menu-item v-for="(value, index) in menu.wk" :key="index" :index="5 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">测评参数</el-menu-item>
            <el-submenu index="7">
                <template slot="title">测评命令</template>
                <el-menu-item v-for="(value, index) in menu.testCommand" :key="index" :index="7 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">帮助</template>
                <el-menu-item v-for="(value, index) in menu.help" :key="index" :index="8 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-dialog class="monitorDialog"
            title="监控命令的参数设置"
            :visible.sync="monitorDialogVisible"
            width="55%"
            center >
            <el-col :span="12">
               <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备1参数</span>
                    </div>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置工作模式 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.workMode" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置/查询工组号 &nbsp;</span>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text4">种类 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.groupType" class="in_put_3" size="small">
                            <el-option
                            v-for="item in groupType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text3">组号 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.groupNumber" class="in_put_3" size="small">
                            <el-option
                            v-for="item in groupNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置区号 &nbsp;</span>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text4">同步 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.synchronous" class="in_put_3" size="small">
                            <el-option
                            v-for="item in areaNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text3">异步 &nbsp;</span>
                        <el-select v-model="monitorDevice_1.asynchronous" class="in_put_3" size="small">
                            <el-option
                            v-for="item in areaNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置集群主组号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-select v-model="monitorDevice_1.mainGroup" class="in_put_2" size="small">
                            <el-option
                            v-for="item in mainGroup"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">本地卫通设备编号 &nbsp;</span>
                        <el-input v-model="monitorDevice_1.localDevice" class="in_put_2" size="small">
                        </el-input>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设备编号(异步) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-input v-model="monitorDevice_1.deviceNumber" class="in_put_2" size="small">
                        </el-input>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备2参数</span>
                    </div>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置工作模式 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.workMode" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置/查询工组号 &nbsp;</span>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text4">种类 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.groupType" class="in_put_3" size="small">
                            <el-option
                            v-for="item in groupType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text3">组号 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.groupNumber" class="in_put_3" size="small">
                            <el-option
                            v-for="item in groupNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置区号 &nbsp;</span>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text4">同步 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.synchronous" class="in_put_3" size="small">
                            <el-option
                            v-for="item in areaNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text3">异步 &nbsp;</span>
                        <el-select v-model="monitorDevice_2.asynchronous" class="in_put_3" size="small">
                            <el-option
                            v-for="item in areaNumber"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设置集群主组号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-select v-model="monitorDevice_2.mainGroup" class="in_put_2" size="small">
                            <el-option
                            v-for="item in mainGroup"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">本地卫通设备编号 &nbsp;</span>
                        <el-input v-model="monitorDevice_2.localDevice" class="in_put_2" size="small">
                        </el-input>
                    </el-row>
                    <el-row style="margin-bottom: 2px">
                        <span class="text3">设备编号(异步) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-input v-model="monitorDevice_2.deviceNumber" class="in_put_2" size="small">
                        </el-input>
                    </el-row>
                </el-card>
            </el-col>
            <el-card class="text-card">
                <span>注：卫通设备编号为2字节，输入示例：1234；异步设备编号为10字节，输入示例：</span>
            </el-card>
            <span slot="footer" class="dialog-footer">
                <el-button @click="monitorDialogCancel()">取 消</el-button>
                <el-button type="primary" @click="monitorDialogSubmit()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog class="monitorDialog"
            title="测评命令的参数设置"
            :visible="testDialogVisible"
            width="45%"
            center >
            <el-col :span="12">
               <el-card class="monitorbox">
                    <div slot="header" class="clearfix">
                        <span>设备1参数</span>
                    </div>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK模式 &nbsp;</span>
                        <el-select v-model="testDevice_1.IKMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in IKMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK参数  &nbsp;</span>
                        <el-input v-model="testDevice_1.IKPara" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                   <el-row style="margin-bottom: 10px">
                        <span class="text">WK模式 &nbsp;</span>
                        <el-select v-model="testDevice_1.WKMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in WKMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text">WK参数  &nbsp;</span>
                        <el-input type="textarea" :rows=3 v-model="testDevice_1.WKPara" class="in_put_1" size="small">
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
                        <el-select v-model="testDevice_2.IKMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in IKMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text2">IK参数 &nbsp;</span>
                        <el-input v-model="testDevice_2.IKPara" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                   <el-row style="margin-bottom: 10px">
                        <span class="text">WK模式 &nbsp;</span>
                        <el-select v-model="testDevice_2.WKMode" class="in_put_1" size="small">
                            <el-option
                            v-for="item in WKMode"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-bottom: 10px">
                        <span class="text"> WK参数 &nbsp;</span>
                        <el-input type="textarea" :rows=3 v-model="testDevice_2.WKPara" class="in_put_1" size="small">
                        </el-input>
                    </el-row>
                </el-card>
            </el-col>
            <span slot="footer" class="dialog-footer">
                <el-button @click="testDialogCancel()">取 消</el-button>
                <el-button type="primary" @click="testDialogCancel()">确 定</el-button>
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
    </div>
</template>

<script>
export default {
    name:'menu_uv',
    components:{

    },
    data(){
        return{
            channelDialogVisible:false,
            monitorDialogVisible:false,
            testDialogVisible:false,
            monitorParaVisible:false,
            testParaVisible:false,
            uploadVisible:false,
            device_1_channel:666,
            device_2_channel:888,
            testDevice_1:{
                IKMode:'',
                IKPara:'',
                WKMode:'',
                WKPara:'',
            },
            testDevice_2:{
                IKMode:'',
                IKPara:'',
                WKMode:'',
                WKPara:'',
            },
            IKMode:[
                {value:'00-Work',label:'00-Work'},
                {value:'01-Tdm',label:'01-Tdm'},
                {value:'02-Aloha',label:'02-Aloha'},
                {value:'03-Kde',label:'03-Kde'},
            ],
            WKMode:[
                {value:'00-Work',label:'00-Work'},
                {value:'01-Tdm',label:'01-Tdm'},
                {value:'02-Aloha',label:'02-Aloha'},
                {value:'03-Kde',label:'03-Kde'},
            ],
            monitorDevice_1:{
                workMode:'',
                groupType:'',
                groupNumber:'',
                synchronous:'',
                asynchronous:'',
                mainGroup:'',
                localDevice:'',
                deviceNumber:'',
            },
            monitorDevice_2:{
                workMode:'',
                groupType:'',
                groupNumber:'',
                synchronous:'',
                asynchronous:'',
                mainGroup:'',
                localDevice:'',
                deviceNumber:'',
            },
            workMode:[
                {value:'01-xx2集中控制',label:'01-xx2集中控制'},
                {value:'02-xx2集群模式',label:'02-xx2集群模式'},
                {value:'03-xx2预案点对点',label:'03-xx2预案点对点'},
                {value:'04-xx2应急模式',label:'04-xx2应急模式'},
                {value:'05-xx2中心站ALOHA解TDM加',label:'05-xx2中心站ALOHA解TDM加'},
                {value:'06-xx2中心站ALOHA',label:'06-xx2中心站ALOHA'},
                {value:'07-xx2中心站TDM',label:'07-xx2中心站TDM'},
            ],
            groupType:[
                {value:'01-WK',label:'01-WK'},
                {value:'02-PTOP',label:'02-PTOP'},
                {value:'03-YJ',label:'03-YJ'},
            ],
            groupNumber:[
                {value:'00-xx00',label:'00-xx00'},
                {value:'01-xx01',label:'01-xx01'},
                {value:'02-xx02',label:'02-xx02'},
                {value:'03-xx03',label:'03-xx03'},
            ],
            areaNumber:[
                {value:'01-A区',label:'01-A区'},
                {value:'02-B区',label:'02-B区'},
            ],
            mainGroup:[
                {value:1,label:'1'},
                {value:2,label:'2'},
                {value:3,label:'3'},
                {value:4,label:'4'},
                {value:5,label:'5'},
                {value:6,label:'6'},
                {value:7,label:'7'},
                {value:8,label:'8'},
                {value:9,label:'9'},
                {value:10,label:'10'},
                {value:11,label:'11'},
                {value:12,label:'12'},
                {value:13,label:'13'},
                {value:14,label:'14'},
                {value:15,label:'15'},
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
                '查询本地处理机编号（新）',
                '本地MY紧急销毁（新）',
                '设置区号（新）',
                '查询区号（新）',
                '设置工作模式',
                '查询工作模式',
                '通知本次呼叫结束',
                '设置工作组号',
                '查询工作组号',
                '分配序号复位（新）',
                '查询分配序号（新）',
                '设置集群组号（新）',
                '查询集群组号（新）',
                '撤销集群（新）',
                '转发通信命令',
                ],
                asynMonitorCommand:[
                '自检',
                'HM',
                '查询区号',
                '设置区号',
                '查询设备编号',
                '设置设备编号',
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
                '发送MF数据...'
                ],
                help: [
                '联机帮助...',
                '关于测试工具'
                ]
           }, 
        }
    },
    methods:{
        monitorDialogCancel(){
            console.log(this.monitorDevice_1)
            this.monitorDialogVisible = false
        },
        monitorDialogSubmit(){
            console.log(this.monitorDevice_2)
            this.monitorDialogVisible = false
        },
        channelDialogCancel(){
            console.log(this.device_1_channel)
            this.channelDialogVisible = false
        },
        channelDialogSubmit(){
            console.log(this.device_2_channel)
            this.channelDialogVisible = false
        },
        testDialogCancel(){
            console.log(this.testDevice_1)
            this.testDialogVisible = false
        },
        testDialogSubmit(){
            console.log(this.testDevice_2)
            this.testDialogVisible = false
        },
        handleSelect (value) {
            switch(value){
                case '1_0':
                    break
                case '1_1':
                    break
                case '1_2':
                    break
                case '1_3':
                    break
                case '1_4':
                    break
                case '1_5':
                    break
                case '2':
                    this.monitorDialogVisible = true;
                    break
                case '5_0':
                    this.channelDialogVisible = true;
                    break
                case '6':
                    this.testDialogVisible = true;
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
    width: 230px;
}
.in_put_3{
    width: 120px;
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
.text3{
    margin-right: 5px;
    padding-left: 5px;
    float:left;
    padding-top: 5px;
}
.text4{
    margin-right: 5px;
    padding-left: 25px;
    float:left;
    padding-top: 5px;
}
.text5{
    margin-right: 5px;
    padding-left: 30%;
    float:left;
    padding-top: 5px;
}
.monitorDialog{
    height: 900px;
    
}
.text-card{
    width: 96%;
    margin-left: 2%;
}
</style>>

</style>