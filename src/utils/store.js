import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //全局数据
    isconnected: 0,      // 0:未连接，1：连接，2：断开
    interface_type:'',    //设备类型，为U,K,T
    device1_state:0,      // 0 表示down,为灰色，1表示up，为绿色
    device1_state:0

  },

  getters:{//对state数据的包装、处理
    isconnected : state => state.isconnected
  },

  mutations: {//使用mutations来更改state数据,引用传参  this.$store.commit('disconnect')调用
              //import { mapMutations } from 'vuex' 后，在method中...mapMutations(["connect","disconnect"]),可直接this调用
    connect(state){
      state.isconnected = 1
    },
    disconnect(state){
      state.isconnected = 0
    }
  },

  actions: {//单纯的业务逻辑，不涉及页面行为

  }
})
