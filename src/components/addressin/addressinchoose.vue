<template>
  <div class="addrchoose">
    <router-link to="addressoutone">
       <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
    </router-link>

    <h3>选择地址</h3>
    <p></p>
  </div>
</template>

<script>
    export default {
        name: "addressinchoose"
    }
</script>

<style scoped lang="scss">
  .addrchoose{
    width:100%;
    height:0.44rem;
    background:#fff;
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content: space-between;
    span{
      width:0.3rem;
      height:0.44rem;
      display: -webkit-flex;
      -webkit-align-items:center;
      justify-content:center ;
      padding-left: 0.1rem;
      i{
        font-size: 0.24rem;
        color:#0092d8;
      }
    }
    h3{
      font-size: 0.2rem;
      color:#000;
      font-weight: normal;

    }
    p{
      width:0.3rem;
      height:0.44rem;
    }


  }
</style>
