<template>
  <el-container direction = "vertical">
   <menu_uv></menu_uv>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14"><div >
            <el-card>
              <body_uv @changeTab="changeTab" :m_ab="m_ab" :m_c = "m_c"></body_uv>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <div>
              <right_uv></right_uv>            
            </div>        
          </div>
        </el-col>
      </el-row>
      <el-row>
        <lower_uv  @changeMode="changeMode" :tab="tab"> </lower_uv>
        <!-- <el-button @click="change()">test</el-button> -->
      </el-row>
    </el-main>
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
// @ is an alias tvo /src
import t from '../api/test'
import menu_uv from '../components/menu_uv.vue'
import body_uv from '../components/body_uv.vue'
import right_uv from '../components/right_uv.vue'
import lower_uv from '../components/lower_uv.vue'
export default {
  name: 'device_uv',
  components:{
    menu_uv,
    body_uv,
    right_uv,
    lower_uv
  },
  data() {
      return{
        url:'',
        m_ab:1,
        m_c:1,
        tab:1,
      }
  },
  methods:{
    changeTab(para){
      this.tab = para;
    },
    changeMode(para){
      if(this.tab<=4){
        switch(para){
          case 2:case 5:case 6:case 10:case 11:case 12:case 13:case 14:
            this.m_ab = 1;
            break;
          case 1:case 3:case 4:case 7:case 8:case 15:
            this.m_ab = 2;
            break;
          case 9:
            this.m_ab = 3
            break;
        }
      }else if(this.tab == 5||this.tab == 6){
        switch(para){
          case 1:case 3:
            this.m_c = 2;
            break;
          case 2:case 4:
            this.m_c = 1;
            break;
        }
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