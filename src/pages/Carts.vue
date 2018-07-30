<template>
    <div class="Carts">
        <carts-header></carts-header>
        <carts-section></carts-section>
        <common-foot2></common-foot2>
    </div>
</template>

<script type="text/ecmascript-6">
  import CartsHeader from '../components/Carts/CartsHeader.vue'
  import CartsSection  from '../components/Carts/CartsSection.vue'
  import CommonFoot2 from"../components/CommonFoot/CommonFoot2.vue"
    export default {

        components:{
          CartsHeader,
          CartsSection,
          CommonFoot2
        }
    }
</script>

<style scoped lang="scss">
    .Carts{
        width: 100%;
        background: #fff;
        font-size: 0.12rem;
        /*border: 1px solid #e1e1e2;*/
        box-sizing: border-box;
        /*height: 100%;*/
    }
</style>
