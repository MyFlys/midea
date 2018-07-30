<template>
 <section>
     <div class="order">
         <p><b>全部订单</b><span>查看详情<i class="iconfont icon-jianyou"></i></span></p>
         <a href="javascript:;"><i class="iconfont icon-bank-card"></i><span>待支付</span></a>
         <a href="javascript:;"><i class="iconfont icon-liwu"></i><span>待发货</span></a>
         <a href="javascript:;"><i class="iconfont icon-kuaidi"></i><span>待收货</span></a>
         <a href="javascript:;"><i class="iconfont icon-weibiaoti-"></i><span>评价管理</span></a>
         <a href="javascript:;"><i class="iconfont icon-tuikuan"></i><span>退款/售后</span></a>
     </div>
     <div class="two">
         <a href="javascript:;">0<span>我的收藏</span></a>
         <a href="javascript:;">0<span>我的积分</span></a>
         <a href="javascript:;">8<span>优惠券</span></a>
         <a href="javascript:;">0<b>元</b><span>礼品卡</span></a>
     </div>
     <ul class="three">
         <li>
             <div class="lileft">
                 <i class="iconfont icon-huangguan"></i>
             </div>
             <div class="liright">
                 <span>会员福利舍</span>
                 <div class="Lright">
                     <span>签到送积分</span>
                     <i class="iconfont icon-jianyou"></i>
                 </div>
             </div>
         </li>
         <li>
             <div class="lileft">
                 <i class="iconfont icon-huangguan"></i>
             </div>
             <div class="liright">
                 <span>我的权益</span>
                 <div class="Lright">
                     <span>亲友优惠码</span>
                     <i class="iconfont icon-jianyou"></i>
                 </div>
             </div>
         </li>
         <li>
             <div class="lileft">
                 <i class="iconfont icon-huangguan"></i>
             </div>
             <div class="liright">
                 <span>我的产品库</span>
                 <div class="Lright">
                    <i class="iconfont icon-jianyou"></i>
                 </div>
             </div>
         </li>
         <li>
             <div class="lileft">
                 <i class="iconfont icon-bangzhu"></i>
             </div>
             <div class="liright">
                 <span>帮助中心</span>
                  <div class="Lright">
                    <i class="iconfont icon-jianyou"></i>
                 </div>
             </div>
         </li>
         <li>
             <div class="lileft">
                 <i class="iconfont icon-shezhi"></i>
             </div>
             <div class="liright">
                 <span>设置</span>
                 <div class="Lright">
                    <span>账户设置、地址</span>
                    <i class="iconfont icon-jianyou"></i>
                 </div>
             </div>
         </li>
     </ul>
 </section>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>
<style scoped lang="scss">
    section{
        height: 100%;
        width: 100%;
        flex: 1;
        overflow: auto;
        background: #f4f4f4;
        margin-bottom: 0.58rem;
        .order{
            background: #fff;
            margin-top: 0.15rem;
            display: flex;
            flex-wrap: wrap;
            p{
                width: 100%;
                line-height: 0.43rem;
                font-size: 0.15rem;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 0 0.15rem;
                span{
                    display: block;
                    float: right;
                    display: flex;
                    color: #9a9a9a;
                    .iconfont{
                        margin-left: 0.12rem;
                        font-size: 0.15rem;
                        color: #9a9a9a;
                    }
                    .icon-liwu{
                        margin-left: 0.1rem;
                    }
                }
            }
            a{
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 0.17rem 0;
                width: 20%;
                text-align: center;
                .iconfont{
                    font-size: 0.25rem;
                    color: #000;
                }
                span{
                    margin-top: 0.1rem;
                    display: block;
                    font-size: 0.13rem;
                    color: #000;
                }
            }
        }
        .two{
            margin-top: 0.15rem;
            padding: 0.2rem 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            display: flex;
            background: #fff;
            a{
                font-size: 0.3rem;
                color: #000;
                width: 25%;
                text-align: center;
                b{
                    font-size: 0.15rem;
                }
                span{
                    display: block;
                    font-size: 0.13rem;
                    font-weight: 100;
                    color: #000;
                }
            }
        }
        .three{
            margin-top: 0.15rem;
            border-top: 1px solid #cdcdcd;
            margin-bottom: 0.15rem;
            li{
                width: 100%;
                background: #fff;
                display: flex;
                .lileft{
                    font-size: 0.2rem;
                    line-height: .43rem;
                    margin: 0 0.15rem;
                    .icon-huangguan{
                        color: #ee7352;
                    }
                    .icon-bangzhu{
                        color: #f27e6f;
                    }
                    .icon-shezhi{
                        color: #30c478;
                    }
                }
                .liright{
                     width: 100%;
                     font-size: 0.14rem;
                     line-height: .43rem;
                     padding-right: 0.15rem;
                     display: flex;
                     justify-content: space-between;
                     border-bottom: 1px solid #cdcdcd;
                     .Lright{
                         display: flex;
                         span{
                             color: #9a9a9a;
                             margin-right: 2px;
                         }
                         .icon-jianyou{
                             color: #cdcdcd;
                         }
                     }
                }
            }
            li:nth-child(3),li:last-child{
                margin-bottom: 0.15rem;
                .liright{
                    border-bottom: none;
                }
            }
        }
    }

</style>
