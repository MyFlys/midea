<template>
  <div class="header">
    <router-link to="/" tag="a"><i class="iconfont icon-jianzuo"></i></router-link>
    <div class="headercenter">
      <input type="text" placeholder="请输入搜索商品">
      <a href=""><i class="iconfont icon-fangdajing"></i></a>
    </div>
    <!--<input type="button" value="搜索" class="search">-->
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  /*header 开始*/
  .header{
    display: -webkit-flex;
    /*-webkit-justify-content: space-around;*/
    background-color: #0092d8;
    height: 0.44rem;
    width:100%;
    line-height: 0.44rem;
  }
  .icon-jianzuo{
    display: block;
    font-size:0.2rem;
    color:#fff;
    margin:0rem 0.1rem;
  }
  .headercenter{
    position: relative;
    float: right;
  }
  .headercenter input{
    width: 2.91rem;
    height:0.3rem;
    border:none;
    outline: none;
    border-radius:3px;
    display: block;
    margin:0.07rem 0rem;
    padding-left: 0.25rem;
  }
  .headercenter a{
    /*diplay:block;*/
    position: absolute;
    left:0.07rem;
    top:0.01rem;
  }
  .headercenter i{
    /*position: absolute;*/
    /*left:0.07rem;*/
    /*top:0.01rem;*/
  }
  /*.search{*/
  /*width:0.4rem;*/
  /*height: 0.3rem;*/
  /*background-color: #0092d8;*/
  /*margin:0.07rem 0rem;*/
  /*border:none;*/
  /*outline: none;*/
  /*border-radius:3px;*/
  /*background: #eee;*/
  /*}*/

  /*header 结束*/
</style>
