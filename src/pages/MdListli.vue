<template>
    <div>
        <md-listli-head></md-listli-head>
        <md-listli-goodslist :listligoodslist="listligoodslists"></md-listli-goodslist>
      <button @click="w">www</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import MdList  from "../apis/DataServiceApi"

  import MdListliHead from "../components/mdlistli/MdListliHead"
  import MdListliGoodslist from "../components/mdlistli/MdListliGoodslist"

    export default {
      components:{
        MdListliHead,
        MdListliGoodslist
      },
      data(){
        return {
          listligoodslists:this.$route.query.dataObj
        }
      },
      methods:{
        w:function (event) {
          console.log(this.$route.query.id)
          console.log(this.$route.query.dataObj)
          console.log(this.listligoodslists)
        },
        __initPage(){
//          MdList.getMdListLi( (data)=>{
//            console.log(data)
////            this.listligoodslists = data.date[this.$route.query.id].son;
//            this.listligoodslists = data.date;
//            console.log(this.listligoodslists)
////            console.log(this.$route)
//            console.log(this.$route.query.dataObj)
//
//          } )
        },
      },
      created(){
        this.__initPage();
      }
    }
</script>

<style scoped>

</style>
