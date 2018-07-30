<template>
  <header>
    <router-link to="addressoutone">

       <span>
      <i class="iconfont icon-jianzuo"></i>
    </span>
    </router-link>

    <h3>确认订单</h3>
    <p></p>
  </header>
</template>

<script>
    export default {
        name: "addrheader"
    }
</script>

<style scoped lang="scss">
  header{
    width:100%;
    height:0.44rem;
    background:#0092d8;
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
        font-size: 0.22rem;
        color:#fff;
      }
    }
    h3{
      font-size: 0.2rem;
      color:#fff;

    }
    p{
      width:0.3rem;
      height:0.44rem;
    }

  }
</style>
