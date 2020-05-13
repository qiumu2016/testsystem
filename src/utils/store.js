import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //全局数据
    isconnected: 0,      // 0:未连接，1：连接，2：断开
    interface_type:'',    //设备类型，为U,K,T
    device1_state:0,      // 0 表示down,为灰色，1表示up，为绿色
    device2_state:0,
    ismonitorConfig:0,
    isevaluateConfig:0,
    ischannelConfig:0,
    isIP:0,
    messageNumber:0,

    isTesting:0,
    setChannel:0,
    setChanneled:0,
    flashConfig:0,
    flashOperation:0,
    flashResponse:0,
    flashEnd:0,
    startRes:0,


    flashPlain_c1:0,
    flashPlain_c2:0,
    flashPlain_c3:0,
    flashPlain_c4:0,

    flashPlain_text_c1:0,
    flashPlain_text_c2:0,
    flashPlain_text_c3:0,
    flashPlain_text_c4:0,

    flashMi_c1:0,
    flashMi_c2:0,
    flashMi_c3:0,
    flashMi_c4:0,

    flashMi_text_c1:0,
    flashMi_text_c2:0,
    flashMi_text_c3:0,
    flashMi_text_c4:0,

    flashDecode:0,
    flashTimer:0,

    monitor_0:0,
    monitor_1:0,
    monitor_2:0,
    monitor_3:0,
    monitor_4:0,
    monitor_5:0,

    evaluate_0:0,
    evaluate_1:0,
    evaluate_2:0,
    evaluate_3:0,
    evaluate_4:0,
    evaluate_5:0,
    evaluate_6:0,
    evaluate_7:0,

  },

  getters:{//对state数据的包装、处理
    isconnected : state => state.isconnected,
    interface_type : state => state.interface_type,
    device1_state : state => state.device1_state,
    device2_state : state => state.device2_state,
    ismonitorConfig : state => state.ismonitorConfig,
    isevaluateConfig : state => state.isevaluateConfig,
    ischannelConfig : state => state.ischannelConfig,


    isIP : state => state.isIP,
    isTesting : state => state.isTesting,
    setChannel : state => state.setChannel,
    setChanneled : state => state.setChanneled,
    flashConfig : state => state.flashConfig,
    flashResponse:state => state.flashResponse,
    flashEnd:state => state.flashEnd,
    flashOperation:state => state.flashOperation,
    startRes:state => state.startRes,

    flashPlain_c1:state => state.flashPlain_c1,
    flashPlain_c2:state => state.flashPlain_c2,
    flashPlain_c3:state => state.flashPlain_c3,
    flashPlain_c4:state => state.flashPlain_c4,

    flashMi_c1:state => state.flashMi_c1,
    flashMi_c2:state => state.flashMi_c2,
    flashMi_c3:state => state.flashMi_c3,
    flashMi_c4:state => state.flashMi_c4,

    flashPlain_text_c1:state => state.flashPlain_text_c1,
    flashPlain_text_c2:state => state.flashPlain_text_c2,
    flashPlain_text_c3:state => state.flashPlain_text_c3,
    flashPlain_text_c4:state => state.flashPlain_text_c4,

    flashMi_text_c1:state => state.flashMi_text_c1,
    flashMi_text_c2:state => state.flashMi_text_c2,
    flashMi_text_c3:state => state.flashMi_text_c3,
    flashMi_text_c4:state => state.flashMi_text_c4,

    flashDecode:state => state.flashDecode,

    flashTimer:state => state.flashTimer,

    messageNumber:state =>state.messageNumber,

    monitor_0:state => state.monitor_0,
    monitor_1:state => state.monitor_1,
    monitor_2:state => state.monitor_2,
    monitor_3:state => state.monitor_3,
    monitor_4:state => state.monitor_4,
    monitor_5:state => state.monitor_5,

    evaluate_0:state => state.evaluate_0,
    evaluate_1:state => state.evaluate_1,
    evaluate_2:state => state.evaluate_2,
    evaluate_3:state => state.evaluate_3,
    evaluate_4:state => state.evaluate_4,
    evaluate_5:state => state.evaluate_5,
    evaluate_6:state => state.evaluate_6,
    evaluate_7:state => state.evaluate_7,
  },

  mutations: {//使用mutations来更改state数据,引用传参  this.$store.commit('disconnect')调用
              //import { mapMutations } from 'vuex' 后，在method中...mapMutations(["connect","disconnect"]),可直接this调用
    connect(state){
      state.isconnected = 1
    },
    disconnect(state){
      state.isconnected = 0
    },
    set_interface_type(state,val){
      state.interface_type = val
    },
    set_device1_state(state,val){
      state.device1_state = val
    },
    set_device2_state(state,val){
      state.device2_state = val
    },
    set_ismonitorConfig(state,val){
      state.ismonitorConfig = val
    },
    set_isevaluateConfig(state,val){
      state.isevaluateConfig = val
    },
    set_ischannelConfig(state,val){
      state.ischannelConfig = val
    },
    set_isIP(state,val){
      state.isIP = val
    },
    set_isTesting(state,val){
      state.isTesting = val
    },
    set_setChannel(state,val){
      state.setChannel = val
    },
    set_setChanneled(state,val){
      state.setChanneled = val
    },
    set_flashConfig(state,val){
      state.flashConfig = val
    },
    set_flashResponse(state,val){
      state.flashResponse = val
    },
    set_flashEnd(state,val){
      state.flashEnd = val
    },
    set_startRes(state,val){
      state.startRes = val
    },

    set_flashOperation(state,val){
      state.flashOperation = val
    },

    set_flashPlain_c1(state,val){
      state.flashPlain_c1 = val
    },
    set_flashPlain_c2(state,val){
      state.flashPlain_c2 = val
    },
    set_flashPlain_c3(state,val){
      state.flashPlain_c3 = val
    },
    set_flashPlain_c4(state,val){
      state.flashPlain_c4 = val
    },

    set_flashMi_c1(state,val){
      state.flashMi_c1 = val
    },
    set_flashMi_c2(state,val){
      state.flashMi_c2 = val
    },
    set_flashMi_c3(state,val){
      state.flashMi_c3 = val
    },
    set_flashMi_c4(state,val){
      state.flashMi_c4 = val
    },

    set_flashPlain_text_c1(state,val){
      state.flashPlain_text_c1 = val
    },
    set_flashPlain_text_c2(state,val){
      state.flashPlain_text_c2 = val
    },
    set_flashPlain_text_c3(state,val){
      state.flashPlain_text_c3 = val
    },
    set_flashPlain_text_c4(state,val){
      state.flashPlain_text_c4 = val
    },

    set_flashMi_text_c1(state,val){
      state.flashMi_text_c1 = val
    },
    set_flashMi_text_c2(state,val){
      state.flashMi_text_c2 = val
    },
    set_flashMi_text_c3(state,val){
      state.flashMi_text_c3 = val
    },
    set_flashMi_text_c4(state,val){
      state.flashMi_text_c4 = val
    },

    set_flashDecode(state,val){
      state.flashDecode = val
    },
    set_messageNumber(state,val){  //设置处理过的信息编号
      state.messageNumber = val
    },
    set_flashTimer(state,val){
      state.flashTimer = val
    },
    /*********监控*************/
    set_monitor_0(state, val){
      state.monitor_0 = val
    },
    set_monitor_1(state, val){
      state.monitor_1 = val
    },
    set_monitor_2(state, val){
      state.monitor_2 = val
    },
    set_monitor_3(state, val){
      state.monitor_3 = val
    },
    set_monitor_4(state, val){
      state.monitor_4 = val
    },
    set_monitor_5(state, val){
      state.monitor_5 = val
    },
    /**********测评***********/
    set_evaluate_0(state, val){
      state.evaluate_0 = val
    },
    set_evaluate_1(state, val){
      state.evaluate_1 = val
    },
    set_evaluate_2(state, val){
      state.evaluate_2 = val
    },
    set_evaluate_3(state, val){
      state.evaluate_3 = val
    },
    set_evaluate_4(state, val){
      state.evaluate_4 = val
    },
    set_evaluate_5(state, val){
      state.evaluate_5 = val
    },
    set_evaluate_6(state, val){
      state.evaluate_6 = val
    },
    set_evaluate_7(state, val){
      state.evaluate_7 = val
    },

  },

  actions: {//单纯的业务逻辑，不涉及页面行为

  }
})
