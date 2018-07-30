<template>
  <div class="box">
    <div class="one">
      <md-list-head></md-list-head>
    </div>
    <div class="two">
      <md-list-section :goodslists="goodslist" :searchlists="searchlist"></md-list-section>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">

  import MdList  from "../apis/DataServiceApi"


  import MdListHead from "../components/mdlist/MdListHead"
  import MdListSection from "../components/mdlist/MdListSection"

  export default {
      components:{
        MdListHead,
        MdListSection
      },
    data(){
        return{
            searchlist:{},
            goodslist:[]
        }
    },
    methods:{
      __initPage(){
        MdList.getMdListli( (data)=>{
            this.goodslist = data;
            console.log(this.goodslist)
        } ),
          MdList.getMdListLi( (data)=>{
//            console.log(data)
            this.searchlist = data;
           console.log(this.searchlist)
          } )
      }
    },
    created(){
      this.__initPage();
    }
  }
</script>

<style scoped>
  .box{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .one{
    height: 0.44rem;
  }
  .two{
    flex: 1;
    overflow-y:scroll;
  }
</style>
