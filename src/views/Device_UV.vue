<template>
  <el-container direction = "vertical">
   <menu_uv></menu_uv>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14"><div >
            <el-card>
              <body_uv></body_uv>
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
export default {
  name: 'device_uv',
  components:{
    menu_uv,
    body_uv,
    right_uv
  },
  data() {
      return{
        url:'',
      }
  },
  methods:{
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