<template>
<div>
  <div class="header">
    <router-link to="/MdList" tag="a" ><i class="iconfont icon-jianzuo"></i></router-link>
    <div class="headercenter">
      <input type="text" placeholder="请输入搜索商品">
      <i class="iconfont icon-fangdajing"></i>
    </div>
    <!--<input type="button" value="搜索" class="search">-->
  </div>
</div>


</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .header{
    display: -webkit-flex;
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
  .headercenter i{
    position: absolute;
    left:0.07rem;
    top:0.01rem;
  }
</style>
