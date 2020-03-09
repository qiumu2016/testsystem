<template>
  <div class="home">
    <div id="Layer1" style="position:absolute; width:100%; height:100%; z-index:-1">  
  <img src="../assets/back.jpg" height="100%" width="100%"/>  
  </div>
    <el-card class="box-card"  shadow="always">
      <div class = "text">请选择设备类型:</div>
      <div class = "btn-style">
        <el-button class = "btn" @click="to_device_u()">U设备</el-button>
        <el-button class = "btn" @click="to_device_uv()">UV设备</el-button>
      </div>
       
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  methods:{
    to_device_u(){
      this.$router.push('/device_u');
    },
    to_device_uv(){
      this.$router.push('/device_uv');
    }
  }
}
</script>
<style scoped>
.text{
  font-size:26px
}
.box-card{
  width: 480px;
  margin: auto;
  position: absolute;
  left: 35%;
  top:30%;
  opacity: 0.985;
}
.btn-style{
  margin-top:10%;
}
.btn{
  width: 30%;
}
</style>
