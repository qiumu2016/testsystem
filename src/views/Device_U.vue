<template>
  <el-container direction = "vertical">
   <menu_u></menu_u>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14"><div >
            <el-card>
              <body_u :m="m"></body_u>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
              <right_u></right_u>            
          </div>
        </el-col>
      </el-row>
      <el-row>
        <lower_u  @changeMode="changeMode"> </lower_u>
      </el-row>
    </el-main>
    <el-footer height = "40px">
      <myfooter :r="r_message" :l="l_message"></myfooter>
    </el-footer>
  </el-container>
</template>
<style scoped>
   .body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }
</style>

<script>
// @ is an alias to /src
import t from '../api/test'
import menu_u from '../components/menu_u.vue'
import body_u from '../components/body_u.vue'
import right_u from '../components/right_u.vue'
import lower_u from '../components/lower_u.vue'
import myfooter from '../components/myFooter.vue'
export default {
  name: 'device_u',
  components:{
    menu_u,
    body_u,
    right_u,
    lower_u,
    myfooter,
  },
  data() {
      return{
        url:'',
        m:1,
        r_message:"连接失败",
        l_message:"就绪",
      }
  },
  methods:{
    changeMode(para){
      switch(para){
        case 1:case 2:case 9:case 10:case 11:case 12:case 13:
          this.m = 1;
          break;
        case 4:case 5:case 6:case 7:case 17:
          this.m = 2;
          break;
        case 8:
          this.m = 3;
          break;
      }

    },
    test_api(){
      t.test_get().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    test_api_post(){
      let sent = {
              type : 'radio',
              num:123
            }
      t.test_post(sent).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>