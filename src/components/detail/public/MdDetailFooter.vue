<template>
    <footer>
      <div class="alarmTip"></div>
      <a href="javascript:;" class="direction">
        <i class="iconfont icon-erji"></i>
        <span>客服</span>
      </a>
      <a href="javascript:;" class="direction">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </a>
      <a href="javascript:;" class="direction">
        <i class="iconfont icon-shangchengicon25"></i>
        <span>购物</span>
        <b class="num" >{{num}}</b>
      </a>
      <div class="operate">
        <a href="javascript:;" class="addcar">加入购物车</a>
        <a href="javascript:;" class="inform">到货通知我</a>
      </div>
      <div class="mask"></div>
    </footer>
</template>

<script>
    export default {
      name: "MdDetailFooter",
      props:["num"],
      methods:{

      }
    }
</script>

<style scoped lang="scss">
  footer{
    width: 100%;
    height: 0.5rem;
    /*background: greenyellow;*/
    display: -webkit-flex;
    .direction{
      border-top: 1px solid #f4f4f4;
      border-right: 1px solid #f4f4f4;
      color:#999999;
      padding: 0.04rem 0.1rem;
      box-sizing: border-box;
      position: relative;
      i{
        font-size:0.2rem;
        text-align:center;
        color:#666;
      }
      span{
        display:block;
        font-size:0.08rem;
        text-align: center;
      }
      b{
        width: 0.15rem;
        height: 0.15rem;
        background: #f60;
        color:#fff;
        font-size:0.06rem;
        position: absolute;
        right: 0.02rem;
        top: -0.01rem;
        border-radius: 50%;
        text-align: center;
      }
    }
    .operate{
      display: -webkit-flex;
      a{
        background:#0092d8;
        font-size: 0.16rem;
        color:#fff;
        text-align: center;
        line-height:0.5rem;
        padding:0 0.2rem;
      }
      .inform{
        background: #f60;
      }
    }
    .alarmTip{

    }
  }

</style>
