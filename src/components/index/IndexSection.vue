<template>
 <section>
     <index-section-swiper :ssList="sList"></index-section-swiper>
     <index-section-one :ooList="oList"></index-section-one>
     <index-section-two :ttList="tList"></index-section-two>
     <index-section-three></index-section-three>
     <index-section-four :fofoList="foList"></index-section-four>
     <index-section-five :fifiList="fiList"></index-section-five>
     <index-section-six></index-section-six>
 </section>
</template>

<script>
import IndexSectionSwiper from "./IndexSectionSwiper";
import IndexSectionOne from "./IndexSectionOne";
import IndexSectionTwo from "./IndexSectionTwo";
import IndexSectionThree from "./IndexSectionThree";
import IndexSectionFour from "./IndexSectionFour";
import IndexSectionFive from "./IndexSectionFive";
import IndexSectionSix from "./IndexSectionSix";


 export default {
   data () {
     return {

     }
   },
   components: {
     IndexSectionSwiper,
     IndexSectionOne,
     IndexSectionTwo,
     IndexSectionThree,
     IndexSectionFour,
     IndexSectionFive,
     IndexSectionSix
   },
   props:{
     sList:{
       type:Array,
       default:[]
     },
     oList:{
       type:Array,
       default:[]
     },
     tList:{
       type:Array,
       default:[]
     },
     foList:{
      //  type:Array,
       default:[]
     },
     fiList:{
       type:Array,
       default:[]
     }
   }
 }
</script>

<style scoped lang="scss">
  section{
    background: #f4f4f4;
    height: 100%;
    flex: 1;
    overflow: auto;
  }
 
</style>
