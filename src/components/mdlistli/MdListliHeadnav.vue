<template>
  <div>
    <div class="nav">
      <div class="navlist">
        综合排序
        <i class="iconfont icon-zhankai1"></i>
        <div class="navlistzm">
          <ul class="navlistlist">
            <li>综合排序</li>
            <li>热度</li>
            <li>最高价格</li>
            <li>最低价格</li>
          </ul>
          <div class="navlistbot">

          </div>
        </div>
      </div>
      <div class="navarea">西安市雁塔区</div>
      <div class="navscreen">筛选</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>

  .nav{
    display: -webkit-flex;
    flex: 1;
    justify-content: space-around;
    color:#3c3c3c;
    font-size:0.14rem;
    line-height: 0.45rem;
    height:0.45rem;
  }
  .navlist{
    display: -webkit-flex;
    flex: 1;
    justify-content: center;
    position: relative;
  }
  .navlist i{
    margin-top: 0.02rem;
    font-size:0.07rem;
  }
  .navlistzm{
    position: absolute;
    display: none;
    width: 3.75rem;
    height:5.78rem;
    /*background: red;*/
    top:0.45rem;
    left:0rem;
    /*display: -webkit-flex;*/
    flex-direction: column;
  }
  .navlistlist{
    /*position: absolute;*/
    background: #ffffff;
    left:0rem;
    width:3.75rem;
    z-index: 2;
    height:1.84rem;
    /*display: none;*/
  }
  .navlistlist li{
    padding-left: 0.07rem;
    color:#000000;
    font-size:0.1rem;
    border-top: 1px solid #eeeeee;
  }
  .navlistbot{
    flex:1;
    /*height:2rem;*/
    overflow-y:scroll ;
    opacity: 0.7;
    background: black;
    z-index: 999;
  }
  .navarea{
    flex: 1;
    text-align: center;
  }
  .navscreen{
    flex: 1;
    text-align: center;
  }
</style>
