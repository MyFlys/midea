<template>
  <router-link :to="{ name: 'classify', params: { sss:indexs }}" tag="li">
        <a href="javascript:;">
            <img :src="oooList.img" alt="">
            <span>{{oooList.title}}</span>
        </a>
  </router-link>
</template>

<script>
 export default {
   components: {

   },
   props:{
       oooList:{
           type:Object,
           default:{}
       },
     indexs:{
       type:Number,
       default:0
     }
   },
 }
</script>

<style scoped lang="scss">
    li{
        padding: 0.05rem 0 0.14rem 0;
        width: 25%;
        height: 1.05rem;
        box-sizing: border-box;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        a{

            text-align: center;
            img{
               width: 0.7rem;
               height: 0.7rem;
               margin: 0 auto;
            }
            span{
                display: block;
               font-size: 0.12rem;
               color: #000;
               line-height: 0.2rem;
            }
        }
    }
    li:nth-child(4n){
        border-right: none;
        // border-bottom: none;
    }

</style>
