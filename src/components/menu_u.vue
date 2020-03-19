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
                <el-menu-item v-for="(value, index) in menu.monitorCommand" :key="index" :index="2 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">wk</template>
                <el-menu-item v-for="(value, index) in menu.wk" :key="index" :index="3 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">测评参数</el-menu-item>
            <el-submenu index="6">
                <template slot="title">测评命令</template>
                <el-menu-item v-for="(value, index) in menu.testCommand" :key="index" :index="5 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">帮助</template>
                <el-menu-item v-for="(value, index) in menu.help" :key="index" :index="6 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-dialog class="monitorDialog"
            title="监控命令的参数设置"
            :visible="monitorDialogVisible"
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
                        <el-select v-model="monitorDevice_1.groupType" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text">组号&nbsp;</span>
                        <el-select v-model="monitorDevice_1.groupNumber" class="in_put_2" size="small">
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
                        <el-select v-model="monitorDevice_2.groupType" class="in_put_2" size="small">
                            <el-option
                            v-for="item in workType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="text">组号</span>
                        <el-select v-model="monitorDevice_2.groupNumber" class="in_put_2" size="small">
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
                <el-button type="primary" @click="monitorDialogCancel()">确 定</el-button>
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
    </div>
</template>

<script>
export default {
    name:'menu_u',
    components:{

    },
    data(){
        return{
            monitorDialogVisible:false,
            testDialogVisible:false,
            monitorParaVisible:false,
            testParaVisible:false,
            uploadVisible:false,
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
            },
            monitorDevice_2:{
                workMode:'',
                groupType:'',
                groupNumber:'',
            },
            workMode:[
                {value:'10-XX2JZ',label:'10-XX2JZ'},
                {value:'11-XX2JQ',label:'11-XX2JQ'},
                {value:'12-XX2DD',label:'11-XX2DD'},
                {value:'13-XX2YJ',label:'11-XX2YJ'},
                {value:'14-XX2中心站ALOHA解TDM加',label:'14-XX2中心站ALOHA解TDM加'},
                {value:'15-XX2中心站ALOHA',label:'15-XX2中心站ALOHA'},
                {value:'16-XX2中心站TDM',label:'14-XX2中心站TDM'},
            ],
            workType:[
                {value:'01-NET',label:'01-NET'},
                {value:'06-PTOP',label:'06-PTOP'},
                {value:'07-GROUPW',label:'07-GROUPW'},
                {value:'08-YJ',label:'08-YJ'},
            ],
            workNumber:[
                {value:'00-xx00',label:'00-xx00'},
                {value:'01-xx01',label:'01-xx01'},
                {value:'02-xx02',label:'02-xx02'},
                {value:'03-xx03',label:'03-xx03'},
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
                case '5':
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