<template>
    <div class="orderMidea">
      <span class="mideaG">官</span>
      <span class="midea">美的官网商城</span>
    </div>
</template>

<script>
    export default {
        name: "orderMidea"
    }
</script>

<style scoped lang="scss">
  .orderMidea{
    margin-top: 0.1rem;
    width:100%;
    height:0.4rem;
    margin-bottom:0.05rem;
    background:#fff;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: flex-start;
    span{
      display: block;
    }
    .mideaG{
      width:0.3rem;
      height:0.3rem;
      background:#1b95c4;
      font-size: 0.2rem;
      color:#fff;
      margin-left: 0.15rem;
      text-align: center;
    }
    .midea{
      width:1.2rem;
      line-height:0.4rem;
      font-size: 0.18rem;
      text-align: center;
    }
  }

</style>
