<template>
    <section>
      <orderUp></orderUp>
      <orderMidea></orderMidea>
      <orderLists :goosp="goo"></orderLists>
      <orderDown></orderDown>
      <orderBill></orderBill>
      <orderMoney></orderMoney>
    </section>
</template>
<script>
  import orderUp  from  "./orderUp"
  import orderMidea from "./orderMidea"
  import orderLists from "./orderLists"
  import orderDown from "./orderDown"
  import orderBill from "./orderBill"
  import orderMoney from "./orderMoney"

    export default {
        name: "orderContent",
      components:{
        orderUp,
        orderMidea,
        orderLists,
        orderDown,
        orderBill,
        orderMoney

      },
      props:["goo"]
    }
</script>

<style scoped lang="scss">
  section {
    width: 100%;
    -webkit-flex:1;
    overflow-y:scroll;
    overflow-x:hidden;

  }
</style>
