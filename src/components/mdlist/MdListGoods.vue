<template>
  <div class="goods">
    <md-list-goodtop></md-list-goodtop>
    <md-list-goodslist :goodsli="goodslist" ></md-list-goodslist>
  </div>
</template>

<script type="text/ecmascript-6">
  import MdListGoodtop from "./MdListGoodtop.vue";
  import MdListGoodslist from "./MdListGoodslist.vue";

    export default {
        components:{
          MdListGoodtop,
          MdListGoodslist
        },
      props:{
        goodslist:{
          type:Array,
          default:[]
        },
      }
    }
</script>

<style scoped>

</style>
