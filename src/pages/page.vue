<template>
    <div>
      <router-view></router-view>
      <common-foot></common-foot>
    </div>
</template>

<script type="text/ecmascript-6">
  import CommonFoot  from "../components/CommonFoot/CommonFoot.vue"
    export default {
      name:"page",
      components: {
        CommonFoot,
      },
    }
</script>

<style scoped>

</style>
