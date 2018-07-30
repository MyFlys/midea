<template>
  <ul class="hotgoodslist">
      <md-listli-goodslistli :item="m" v-for="(m,n) in listligoodslist" :key="n"></md-listli-goodslistli>
    <!--<md-listli-goodslistli></md-listli-goodslistli>-->
    <!--<button @click="w">{{this.$route.query.index}}</button>-->
  </ul>
</template>

<script type="text/ecmascript-6">
  import MdListliGoodslistli from "./MdListliGoodslistli"

  export default {
    components:{
      MdListliGoodslistli
    },
    props:{
      listligoodslist:{
        type:Array,
        default:[]
      }
    }
//    methods:{
//      w:function (event) {
//        console.log(this.$route.query.id)
//      }
//    }
  }
</script>

<style scoped>

</style>
