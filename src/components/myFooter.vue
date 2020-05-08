<template>
    <div class="footer">
        <div class="tip-left" >
          <span class="text">{{isConnected}}</span>
        </div>
        <div>
          <span class="text">{{l}}</span>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
//import {mapState} from 'vuex'
export default {
    name:'MyFooter',
    props: {
        l:{
            type:String,
            required:true
        },
    },
    components:{

    },
    data(){
        return{
            isConnected:'连接失败',
            isReady:'',
        }
    },
    methods:{

    },
    computed:{
      //...mapState(['isconnected']),   可以直接使用
      ...mapGetters([
        'isconnected'
      ])
    },
    watch: {
      isconnected: function(val) { //li就是改变后的wifiList值
        if(val == 0){
          this.isConnected = '连接失败'
        }else{
          this.isConnected = '连接成功'
        }
      }
    }
}
</script>
<style scoped>

.footer {
  background-color: #545c64;
  color: #ffffff;
  width: 100%;
  float: left;
}
.text{
  float: left;
}
.tip-left {
  position: relative;
  float: left;
  padding-left: 20px;
  width: 50%;
  border-right: 1px solid #ffffff;
  margin-right: 20px;
  height: 20px;
}

</style>