<template>
    <div class="head">
        <md-listli-header></md-listli-header>
        <md-listli-headnav></md-listli-headnav>
    </div>
</template>

<script type="text/ecmascript-6">

  import MdListliHeader from "./MdListliHeader.vue"
  import MdListliHeadnav from "./MdListliHeadnav.vue"

  export default {
      components:{
        MdListliHeader,
        MdListliHeadnav
      }
    }
</script>

<style scoped>
  /*.head{*/
    /*height: 0.89rem;*/
  /*}*/
</style>
