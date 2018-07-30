<template>
 <ul class="section-one">
     <index-section-onelist :oooList="p" v-for="(p,index) in ooList" :indexs="index" :key="index"></index-section-onelist>
 </ul>
</template>

<script>
import IndexSectionOnelist from "./IndexSectionOnelist";
 export default {
   components: {
       IndexSectionOnelist
   },
   props:{
       ooList:{
           type:Array,
           default:[]
       }
   }
 }
</script>

<style scoped lang="scss">
    .section-one{
        display: flex;
        flex-wrap: wrap;
    }

</style>
