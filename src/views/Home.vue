<template>
  <div class="home">
    <el-card class = "title">
      <span class="title-text">U/UV设备测试系统</span>
    </el-card>
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
      sessionStorage.setItem("url",'http://101.11.1.1')
      this.$router.push('/device_u');
    },
    to_device_uv(){
      sessionStorage.setItem("url",'http://101.11.1.1')
      this.$router.push('/device_uv');
    }
  }
}
</script>
<style scoped>
.title-text{
  font-size: 60px;
  letter-spacing:15px
}
.home{
  text-align:center;
}
.text{
  font-size:26px
}
.title{
  width: 80%;
  display:inline-block;
  position: relative;
  margin-top:3%
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
