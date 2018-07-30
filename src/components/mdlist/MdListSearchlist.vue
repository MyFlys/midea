<template>
    <router-link :to="{ path: 'MdListli/', query: { dataObj: item.son ,id:item.id }}" tag="a" >{{item.title}}</router-link>
    <!--<router-link :to="'MdListli?'+'id='+item.id" tag="a" @click.native="chu">{{item.title}}</router-link>-->

</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return {
          it:this.item
        }
      },
      props:{
        item:{
          type:Object,
          default:{}
        }
      },
      methods:{
        chu:function (event) {
            console.log(this.item.title)
            console.log(this.item.id)
            console.log(this.item)

          console.log(9)
        }
      }
    }
</script>

<style scoped>

  a{
    font-size: 0.11rem;
    color:#404040;
    display: inline-block;
    border:1px solid #dbdbdb;
    padding:0.07rem 0.09rem;
    border-radius: 5px;
    margin:0.04rem 0.08rem 0rem 0rem;
  }
</style>
