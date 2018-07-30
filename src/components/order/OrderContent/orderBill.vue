<template>
    <div class="Bill">
      <div class="BillUp">
          <p class="upleft">
            <span class="sup">积分抵扣</span>
            <span class="sdown">限官方店铺使用</span>
          </p>
        <a href="javascript:;" class="upright">
          <span class="a1">未使用</span>
          <span class="a2">(可抵0.08元)</span>
          <i class="iconfont icon-jianyou"></i>
        </a>
      </div>
      <router-link to="stampbill">
        <div class="BillDown">
          <span class="BillDown_left">发票信息</span>
          <a href="javascript:;" class="BillDown_right">个人/明细<i class="iconfont icon-jianyou"></i></a>

        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "orderBill"
    }
</script>

<style scoped lang="scss">
  .Bill{
    width:100%;
    height:1.05rem;
   /*background:lemonchiffon;*/
  .BillUp{
        width:100%;
        height:0.6rem;
        margin-bottom: 0.05rem;
        background:#fff;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    .upleft{

      height:0.6rem;
      .sup{
        display: block;
        width:1rem;
        font-size: 0.16rem;
        line-height: 0.3rem;
        color:#3a3635;
        margin-left: 0.1rem;
      }
      .sdown{
        width:1rem;
        display: block;
        font-size: 0.14rem;
        line-height: 0.3rem;
        color:#d6d6d6;
        margin-left: 0.1rem;
      }
    }
    .upright{
      display: -webkit-flex;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      font-size: 0.14rem;
      margin-right: 0.1rem;
      .a1{
        color:#3a3635;
      }
      .a2{
        color:#d6d6d6;
      }
      i{
        font-size: 0.18rem;
        color:#d6d6d6;
      }
    }


    }
    .BillDown{
      display: -webkit-flex;
      height:0.4rem;
      background:#fff;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        font-size:0.16rem;
        color:#000;
      }
      .BillDown_left{
        margin-left: 0.1rem;

      }
      .BillDown_right{
        display: flex;
        font-size:0.16rem;
        color:#c5c5c5;
        margin-right: 0.1rem;
        .iconfont{
          font-size:0.18rem;
          color:#c5c5c5;
        }
      }
    }
  }
</style>
