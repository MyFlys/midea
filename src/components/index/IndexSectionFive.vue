<template>
 <ul class="section-five">
     <h2><i class="iconfont icon-jingpin"></i>精选单品</h2>
     <index-section-fivelist :fififiList="p" v-for="(p,index) of fifiList" :key="index"></index-section-fivelist>
 </ul>
</template>

<script>
import IndexSectionFivelist from "./IndexSectionFivelist";
 export default {
   data () {
     return {

     }
   },
   components: {
       IndexSectionFivelist
   },
   props:{
       fifiList:{
           default:[]
       }
   }
 }
</script>

<style scoped lang="scss">
    .section-five{
        display: -webkit-flex;
        margin-bottom: 0.15rem;
        flex-wrap: wrap;
        h2{
            width: 100%;
            font-size: 0.18rem;
            line-height: 0.49rem;
            display: flex;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            background: #fff;
            text-indent: 0.12rem;
            .iconfont{
                color:#ff6600;
                font-size: 0.23rem;
                margin-right: 5px;
            }
        }
    }
    
</style>
