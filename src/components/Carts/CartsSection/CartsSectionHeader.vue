<template>
     <div class="LocationTop">
         <div class="CartsLocation">
             <div class="CartsLocation_left">
               <i class="iconfont icon-weizhi"></i>
               <span>广州市天河区</span>
             </div>
             <p @click="bian">编辑全部</p>
         </div>
          <div class="CartsTitle">
              <div class="CartsTitle_left">
                <i class="iconfont icon-xuanzhong2" @click="getIt"></i>
                <i class="iconfont icon-guan"></i>
                <span>美的官方商城</span>
              </div>
              <p @click="bian">编辑</p>
          </div>
     </div>
</template>

<script type="text/ecmascript-6">
      export default {
        props:["bian"],
        methods:{
          getIt(){
            $('.CartsTitle_left .icon-xuanzhong2').toggleClass("icon-xuanzhong active")
          }
        },
      }
</script>

<style scoped lang="scss">
  .LocationTop{
      width: 100%;
      height: 0.88rem;
      border: 1px solid #e3e3e3;
      border-left:none ;
      border-right: none;
      /*position: fixed;*/
    .CartsLocation{
      width: 100%;
      height: 0.43rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.14rem;
      background: #f4f4f4;
      color: #999;
      font-size: 0.13rem;
      .CartsLocation_left{
        height: 100%;
        display: flex;
        align-items: center;
        i{
          font-size: 0.18rem;
        }
      }
    }
    .CartsTitle{
        height: 0.45rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.12rem;
        .CartsTitle_left{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #999;
          i{
            color: #dcdce6;
            font-size: 0.16rem;
            display: block;
            border-radius: 0.08rem;
            height: 0.16rem;
            width: 0.16rem;
          }
          .icon-xuanzhong2{
            color: #dcdce6;
            margin-right: 0.08rem;
          }
          .icon-xuanzhong{
            color: #fff;
            background: rgb(27,137,201);
          }
          .icon-guan{
            background: #fff;
            color: #1b89c9;
            margin-right: 0.08rem;
          }
        }
        p{
          color: #999;
        }
    }
  }

</style>
