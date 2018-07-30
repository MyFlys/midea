<template>
 <div class="section-three">
     <a href="javascript:;">
         <img src="../../../static/img/1.16.jpg" alt="">
         <div class="info">
            <p>美的会员日 畅想惊喜福利</p>
            <p>生活好物精选 Pick阿biu周边</p>
         </div>
     </a>
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
    .section-three{
        margin-bottom: 0.15rem;
        a{
            img{
                width: 100%;
                height: 2.46rem;
            }
            .info{
                padding: 0.19rem 0;
                background: #fff;
                p:nth-child(1){
                    font-size: 0.2rem;
                    line-height: 0.37rem;
                    color: #333;
                    text-align: center;
                }
                p:nth-child(2){
                    font-size: 0.13rem;
                    line-height: 0.26rem;
                    color: #999;
                    text-align: center;
                }
            }
        }
    }

</style>
