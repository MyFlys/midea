<template>
  <ul class="hotgoodslist">
    <md-list-goodslistli :item="p" v-for="(p,n) in goodsli" ></md-list-goodslistli>
    <!--<md-list-goodslistli></md-list-goodslistli>-->
  </ul>
</template>

<script type="text/ecmascript-6">
  import MdListGoodslistli from "./MdListGoodslistli.vue";
  export default {
      components:{
        MdListGoodslistli
      },
    props:{
      goodsli:{
//        type:Array,
//        default:[]
      },
    }
  }
</script>

<style scoped>

</style>
