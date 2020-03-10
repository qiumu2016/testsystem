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
                <el-menu-item v-for="(value, index) in menu.monitorCommand" :key="index" :index="2 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">异步监控命令</template>
                <el-menu-item v-for="(value, index) in menu.asynMonitorCommand" :key="index" :index="2 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">wk</template>
                <el-menu-item v-for="(value, index) in menu.wk" :key="index" :index="3 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">测评参数</el-menu-item>
            <el-submenu index="7">
                <template slot="title">测评命令</template>
                <el-menu-item v-for="(value, index) in menu.testCommand" :key="index" :index="5 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">帮助</template>
                <el-menu-item v-for="(value, index) in menu.help" :key="index" :index="6 + '_' + index">{{value}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'menu_uv',
    components:{

    },
    data(){
        return{
            monitorParaVisible:false,
            testParaVisible:false,
            uploadVisible:false,
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
                    break
            }
        }
    }
}
</script>