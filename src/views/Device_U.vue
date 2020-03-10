<template>
  <div class="about">
    <menu_u></menu_u>
    <el-button @click="test_api()"> test </el-button>
    <el-button @click="test_api_post()"> test_post </el-button>
  </div>
</template>


<script>
// @ is an alias to /src
import t from '../api/test'
import menu_u from '../components/menu_u.vue'
export default {
  name: 'device_u',
  components:{
    menu_u,
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