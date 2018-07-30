<template>
  <div class="mydown">
      <div class="one">
        <span>优惠券</span>
        <span class="one_right">无可用优惠券</span>
      </div>
      <div class="two">
        <span class="two_left">有优惠券兑换码？</span>
        <router-link to="duihuan">
          <a href="javascript:;" class="two_right">去兑换<i class="iconfont icon-jianyou"></i></a>
        </router-link>

      </div>
    <div class="three">
      <span class="three_left">礼品卡</span>
      <router-link to="cardmi">
      <span class="three_right">无可用礼品卡，<a href="javascript:;">立即绑定</a></span>
      </router-link>

    </div>
    <div class="four">
      <span class="four_one">买家留言</span>
      <span class="four_two">请勿填写和发票，支付相关的信息</span>
      <span class="four_three"></span>
    </div>
    <div class="five">
      <p>
          共{{totalNum}}件，合计：<span>￥{{totalMon}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "orderDown",
        data(){
            return{
                totalNum:[],
                totalMon:[]
            }
        },
      created(){
            this.totalNum = window.localStorage.getItem("AllNum")
            this.totalMon = window.localStorage.getItem("AllMon")
      }
    }
</script>

<style scoped lang="scss">
  .mydown{
    width:100%;
    margin-bottom:0.1rem;

    .one{
      margin:0.05rem 0;
      display: -webkit-flex;
      height:0.5rem;
      background:#fff;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        font-size:0.14rem;
        margin-left: 0.1rem;
      }
      .one_right{
        color:#afafaf;
        margin-right:0.05rem;
      }

    }
    .two{
      display: -webkit-flex;
      height:0.5rem;
      background:#fff;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        font-size:0.14rem;
      }
      .two_left{
        margin-left: 0.1rem;
      }
      .two_right{
        display: flex;
        font-size:0.14rem;
        color:#000;
        margin-right:0.1rem;
        .iconfont{
          font-size:0.2rem;
        }
      }
    }
    .three{
      margin:0.05rem 0;
      display: -webkit-flex;
      height:0.5rem;
      background:#fff;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        font-size:0.14rem;

      }
      .three_left{
        margin-left: 0.1rem;
      }
      .three_right{
        display: -webkit-flex;
        margin-right:0.05rem;
        color:#979797;
        display: -webkit-flex;
        a{
          color:#368fd2;
        }
      }

    }
    .four{
      display: -webkit-flex;
      height:0.5rem;
      background:#fff;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        font-size:0.14rem;
      }
      .four_one{
        margin-left: 0.1rem;
      }
      .four_two{
        color:#b2afaf;
        padding-right:0.3rem;
      }
    }
  .five{
    height:0.5rem;
    background:#fff;
    margin:0.05rem 0 0.1rem 0;
    p{
      margin-right: 0.1rem;
      height:0.5rem;
      float:right;
      font-size: 0.16rem;
      span{

        line-height: 0.5rem;
        color:#ffaa69;
      }
    }
  }
  }
</style>
