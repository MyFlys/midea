<template>
 <header>
     <a class="massage" href="javascript:;"><i class="iconfont icon-xiaoxi1"></i></a>
     <div class="icon">
        <router-link to="/MdLogin"><img src="../../../static/img/icon-1.jpg"></router-link>
        <span>18292330828</span>
     </div>
     <div class="right">
        <a href=""><img src="../../../static/img/mysql-1.jpg"><span>会员</span></a>
     </div>
 </header>
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
    header{
        height: 1rem;
        width: 100%;
        background: #0092d8;
        position: relative;
        .massage{
            position: absolute;
            top: 0.11rem;
            right: 0.15rem;
            .iconfont{
                display: block;
                font-size: 0.2rem;
                color: #fff;
            }
        }
        .icon{
            padding: 0.3rem 0 0.18rem 0.17rem;
            display: flex;
            a{
                width: 0.52rem;
                height: 0.52rem;
                border-radius: 50%;
                border: 1px solid #fff;
                overflow: hidden;
                img{
                    width: 0.52rem;
                    height: 0.52rem;
                }
            }
            span{
                margin-left: 0.16rem;
                display: block;
                font-size: 0.16rem;
                color: #fff;
                line-height: 0.52rem;
            }
        }
        .right{
            position: absolute;
            top: 0.45rem;
            right: 0;
            width: 0.54rem;
            height: 0.2rem;
            box-sizing: border-box;
            background: #027db9;
            border-top-left-radius:0.1rem;
            border-bottom-left-radius: 0.1rem;
            a{
                display: flex;
                img{
                    width: 0.14rem;
                    height: 0.16rem;
                    margin: 0.02rem 0.04rem;
                }
                span{
                    display: block;
                    font-size: 0.12rem;
                    color: #fff;
                    line-height: 0.2rem;
                }
            }
        }
    }

</style>
