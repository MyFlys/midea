<template>
    <ul class="section-four">
        <index-section-fourlist :fofofoList="p" v-for="(p,index) in fofoList" :key="index"></index-section-fourlist>
    </ul>
</template>

<script>
import IndexSectionFourlist from "./IndexSectionFourlist";
 export default {
   data () {
     return {

     }
   },
   components: {
       IndexSectionFourlist
    },
    props:{
        fofoList:{
            // type:Array,
            default:[]
        }
    }
}

</script>

<style scoped lang="scss">
    // ul{
    //     height: 100%;
    // }
 
</style>
