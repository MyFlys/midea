<template>
  <div class="search">
    <p class="groomsearch">推荐搜索</p>
    <div class="searchbox">
      <md-list-searchlist :item="s"  v-for="(s,t) in sear"  key="t" ></md-list-searchlist>
      <!--<md-list-searchlist></md-list-searchlist>-->
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import MdListSearchlist from "./MdListSearchlist.vue";

    export default {
      name:"MdListSearch",
      components:{
        MdListSearchlist
      },
      props:{
        sear:{
          type:Array,
//          default:[]
        }
      }
    }
</script>

<style scoped>
  /*推荐搜索 开始*/
  .search{
    margin:0rem 0.12rem 0rem 0.22rem;
  }
  .groomsearch{
    line-height: 0.39rem;
    font-size:0.11rem;
    color:#cccccc;
  }
  .searchbox{
    display: -webkit-flex;
    flex-wrap: wrap;
    margin-bottom: 0.14rem;
    /*line-height: 0.36rem;*/
  }
  /*推荐搜索 结束*/
</style>
