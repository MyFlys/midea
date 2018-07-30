<template>
    <div class="orderMoney">
        <div class="money_top">
            <p class="top_up">
              <span class="first">商品金额</span>
              <span  class="second">￥{{totalMon}}</span>
            </p>
            <p class="top_down">
              <span class="third">运费</span>
              <span  class="fourth">+ ￥10.00</span>
            </p>
        </div>
        <div class="money_bottom">

            <p>
              共{{totalNum}}件，合计：<span>￥{{totalMon}}</span>
            </p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "orderMoney",
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
  .orderMoney{
    height:1.05rem;
    width:100%;
    margin: 0.1rem 0;
    /*background:#fff;*/

    .money_top{
      height:0.6rem;
      background: #fff;
      margin-bottom: 0.05rem;
      .top_up{
        height:0.3rem;
        display: -webkit-flex;
        -webkit-align-items: flex-end;
        -webkit-justify-content: space-between;
        span{
          font-size: 0.16rem;
          color:#c8c8cd;
        }
        .first{
          margin-left: 0.1rem;
        }
        .second{
          margin-right: 0.1rem;
        }
      }
      .top_down{
        height:0.3rem;
        height:0.3rem;
        display: -webkit-flex;
        -webkit-align-items: flex-end;
        -webkit-justify-content: space-between;
        span{
          font-size: 0.16rem;
          color:#c8c8cd;
        }
        .third{
          margin-left: 0.1rem;
        }
        .fourth{
          margin-right: 0.1rem;
        }
      }

    }
    .money_bottom{
      height:0.4rem;
      background:#fff;

      p{
        height:0.4rem;
        float:right;
        font-size: 0.18rem;
        margin-right: 0.1rem;
        span{

          line-height: 0.5rem;
          color:#ffaa69;
        }
      }
    }
  }
</style>
