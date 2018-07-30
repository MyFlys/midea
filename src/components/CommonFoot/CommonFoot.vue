<template>
    <footer class="common_footer">
      <router-link  to="/Index" >
        <li class="active">
          <i class="iconfont icon-home"></i>
          <p>首页</p>
        </li>
      </router-link>
      <router-link  to="classify" >
        <li>
          <i class="iconfont icon-liebiao"></i>
          <p>列表</p>
        </li>
      </router-link>
      <router-link to="/">
        <li><img src="../../../static/img/35a74a4981aa.png@100Q.png"/></li>
      </router-link>
      <router-link  to="Carts">
        <li  >
            <i class="iconfont icon-shangchengicon25"></i>
            <p>购物车</p>
        </li>
      </router-link>
      <router-link  to="mysql">
         <li >
           <i class="iconfont icon-wode"></i>
           <p>我</p>
         </li>
      </router-link>
      <!--<div class="shop_num">2</div>-->
    </footer>
</template>

<script type="text/ecmascript-6">

    export default {
          name:'CommonFoot',
//          methods:{
//              show(){
//                $(".common_footer li").on('click',function () {
//                    $(".common_footer li").removeClass('active')
//                    $(this).addClass('active')
//                })
//              }
//          },
//      mounted(){
//            this.show()
//      }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/font/iconfont.css";
  .common_footer{
      width: 100%;
      height: 0.58rem;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      font-size: 0.11rem;
      color: #999;
      display: flex;
      box-sizing: border-box;
      border: 1px solid #e3e3e3;
       z-index: 9999;
      align-items: center;
      justify-content: flex-start;
      a{
        display: block;
        width: 20%;
        height: 0.5rem;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 0.5rem;
          width: 100%;
          color: #999;
          i{
            display: block;
            font-size: 0.2rem;
            height: 0.2rem;
            margin-top: 0.06rem;
          }
          p{
            height:0.18rem ;
            line-height: 0.18rem;
          }
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
      .shop_num{
          width: 0.13rem;
          height: 0.13rem;
          position: absolute;
          background: #ff6600;
          color: #fff !important;
          font-size: 0.1rem;
          text-align: center;
          line-height: 0.13rem;
          top:0.07rem;
          right: 0.98rem;
          border-radius: 0.06rem;
      }
      .active{
          color:  #0092d8;
      }
  }
</style>
