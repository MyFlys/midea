<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
  import  Index  from"./Index.vue"
  import  Carts  from"./Carts.vue"
  import  classify  from"./classify.vue"

    export default {
        name:"Main",
        components:{
          Index,
          Carts,
          classify
        }
    }
</script>

<style scoped>

</style>
