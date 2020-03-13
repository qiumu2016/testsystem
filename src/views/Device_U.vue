<template>
  <el-container direction = "vertical">
   <menu_u></menu_u>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14"><div >
            <el-card>
              <body_u></body_u>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
              <right_u></right_u>            
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
// @ is an alias to /src
import t from '../api/test'
import menu_u from '../components/menu_u.vue'
import body_u from '../components/body_u.vue'
import right_u from '../components/right_u.vue'
export default {
  name: 'device_u',
  components:{
    menu_u,
    body_u,
    right_u,
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