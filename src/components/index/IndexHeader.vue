<template>
 <header>
     <a href="javascript:;"><i class="iconfont icon-erji"></i></a>
     <a href="javascript:;"><i class="iconfont icon-meidelogo"></i></a>
   <router-link to="/MdList" tag="a"><i class="iconfont icon-fangdajing"></i></router-link>
 </header>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped lang="scss">
header{
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 .12rem;
  background: #0092d8;
  a{
    .iconfont{
      font-size: 0.3rem;
      color: #fff;
    }
  }
}

</style>
