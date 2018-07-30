<template>
    <footer>
        <p class="p1">
          <span class="span1">合计金额：</span>
          <span class="span2">￥ {{totalMon}}.<i>00</i></span>
        </p>
      <button>订单提交</button>
    </footer>
</template>

<script>
    export default {
        name: "orderFooter",
      data(){
        return{
          totalNum:[],
          totalMon:[]
        }
      },
      created(){
        this.totalNum = window.localStorage.getItem("AllNum")
        this.totalMon = window.localStorage.getItem("AllMon")
      }
    }
</script>

<style scoped lang="scss">
   footer{
     width:100%;
     height:0.5rem;
     display: -webkit-flex;
     .p1{
       width:66.6%;
       height:0.48rem;
       display: -webkit-flex;
       -webkit-justify-content: center;
       -webkit-align-items: center;
       span{
        font-size: 0.18rem;
         line-height:0.48rem;
       }
       .span1{

         color:#444444;
       }
       .span2{

         display: -webkit-flex;
         color:#e47114;
         i{
           font-style: normal;
           font-size: 0.14rem;
           color:#e47114;
         }
       }
     }
     button{
       width:33.3%;
       height:0.48rem;
       background:#f86808;
       border:none;
       font-size: 0.18rem;
       color:#fff;

     }
   }
</style>
