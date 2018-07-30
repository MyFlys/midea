<template>
 <div class="section-six">
     <div class="six-con">
        <a href="javascript:;"><i class="iconfont icon-zhengpin"></i><span>正品保障</span></a>
        <a href="javascript:;"><i class="iconfont icon-tian"></i><span>7天无理由</span></a>
        <a href="javascript:;"><i class="iconfont icon-dianhua"></i><span>4008899315</span></a>
     </div>
     <div class="six-bottom">
         <ul>
             <li><a href="javascript:;">服务条款</a></li>
             <li><a href="javascript:;">企业来购</a></li>
             <li><a href="javascript:;">隐私政策</a></li>
             <li><a href="javascript:;">联系我们</a></li>
         </ul>
         <p>Copyright © 1968-2018 广东美的网络科技有限公司</p>
     </div>
 </div>
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
    .section-six{
        background: #fff;
        .six-con{
            padding: 0.18rem 0 0.1rem;
            border-bottom: 1px solid #ccc;
            display: flex;
            a{
                display: flex;
                width: 33.3%;
                // text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #000;
                .iconfont{
                    font-size: 0.35rem;
                }
                span{
                    display: block;
                    font-size: 0.13rem;
                    line-height: 0.3rem;
                }
            }
        }
        .six-bottom{
            padding: 0.36rem 0.2rem; 
            ul{
                display: flex;
                margin-bottom: 0.38rem;
                li{
                    border-right: 1px solid #929292;
                    padding: 0 0.15rem;
                    // box-sizing: border-box;
                    a{
                       
                        font-size: 0.13rem;
                        line-height: 0.13rem;
                        color: #929292;
                    }
                }
                li:last-child{
                    border-right: none;
                }
            }
            p{
                font-size: 0.11rem;
                line-height: 0.15rem;
                color: #aaa;
                text-align: center;
                margin-bottom: 0.42rem;
            }
        }
    }
 
</style>
