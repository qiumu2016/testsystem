<template>
    <div class="footer">
        <div class="tip-left" >
          <span class="text">{{r}}</span>
        </div>
        <div>
          <span class="text">{{l}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'MyFooter',
    props: {
        r:{
            type:String,
            required:true
        },
        l:{
            type:String,
            required:true
        },
    },
    components:{

    },
    data(){
        return{
            
        }
    },
    methods:{

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