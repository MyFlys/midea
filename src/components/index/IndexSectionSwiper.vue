<template>
    <div>
        <p class="apol">【通知】1、新疆部分区域无法快递正常发货，恢复时间待定，给您带来不便，敬请见谅。2、美的商城为美的集团官方渠道，请勿相信任何刷单信息。</p>  
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <index-section-swiperlist :sssList="p" v-for="(p,index) in ssList" :key="index"></index-section-swiperlist>
            </div>
            <div class="swiper-pagination"></div>    
        </div>
    </div>
</template>

<script>
import IndexSectionSwiperlist from "./IndexSectionSwiperlist";
import Swiper from 'swiper'
 export default {
    data () {
        return {

        }
    },
   components: {
       IndexSectionSwiperlist
   },
   props:{
       ssList:{
           default:[]
       }
   },
   updated(){
       var mySwiper = new Swiper('.swiper-container', {
        speed:500,
        loop : true,
        autoplay : {
            delay:3000
        },
        pagination: {
        el: '.swiper-pagination',
        },
     })
   }
 }
</script>

<style scoped lang="scss">
    .apol{
        padding:0.05rem 0.12rem;
        font-size: 0.12rem;
        line-height: 0.15rem;
        background: #003b66;
        color: #fff;
    }
    .swiper-container{
        width: 100%;
        height: 1.75rem;
        .swiper-pagination{
            margin-bottom: -0.2rem;
        }
    }
</style>
