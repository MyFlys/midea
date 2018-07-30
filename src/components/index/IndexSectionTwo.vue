<template>
 <ul class="section-two">
     <index-section-twolist :tttList="p"  v-for="(p,index) in ttList" :key="index" ></index-section-twolist>
 </ul>
</template>

<script>
import IndexSectionTwolist from "./IndexSectionTwolist";
 export default {
     data () {
        return {

        }
    },
   components: {
       IndexSectionTwolist
   },
   props:{
       ttList:{
           type:Array,
        //    default:[]
       }
   }
 }
</script>

<style scoped lang="scss">
    .section-two{
        // height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.15rem;
    }
    
</style>
