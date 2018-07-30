<template>
  <div class="torder">
    <orderHeader></orderHeader>
    <orderContent :goo="stri"></orderContent>
    <orderFooter></orderFooter>

  </div>

</template>

<script>
  import orderHeader from "../components/order/OrderHeader/orderHeader"
  import orderContent from "../components/order/OrderContent/orderContent"
  import orderFooter from "../components/order/OrderFooter/orderFooter"

    export default {
        name: "order",
      components:{
          orderHeader,
        orderContent,
        orderFooter

      },
      data(){
        return{
            stri:[]
        }
      },
      methods:{
        getInfo(){
          let val = window.localStorage.getItem('fromCarts')

          this.stri = JSON.parse(val);

console.log(this.stri)
        }
      },
      created(){
        this.getInfo();


      }
    }
</script>

<style scoped lang="scss">
  .torder{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    background:#eee;
}
</style>
