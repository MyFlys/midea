<template>
    <div>
        <md-list-search :sear="searchlists.date"></md-list-search>
        <md-list-goods :goodslist="goodslists"></md-list-goods>
    </div>
</template>

<script type="text/ecmascript-6">

  import MdListSearch from "./MdListSearch.vue";
  import MdListGoods from "./MdListGoods.vue";

  export default {
    components:{
      MdListSearch,
      MdListGoods
    },
    props:{
      goodslists:{
        type:Array,
        default:[]
      },
      searchlists:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>

</style>
