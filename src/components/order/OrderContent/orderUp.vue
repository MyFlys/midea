<template>
  <router-link to="addressoutone">
    <div class="section_address">
      <div class="address_one">
          <span>
            <img src="../../../../static/img/address.jpg" alt="">
             <a href="javascript:;">选择地址</a>
          </span>

        <a href="javascript:;"><i class="iconfont icon-jianyou"></i></a>
      </div>
      <div class="address_two">
        <p id="addCon">
          {{stri}}
        </p>
      </div>
    </div>
  </router-link>

</template>

<script>
    export default {
      name: "orderUp",
      data(){
        return{
          stri:'(由于您选择的地址可能会造成商品价格变化，请确认后再付款)'
        }
      },
      methods:{
       getInfo(){
         let val = window.localStorage.getItem('n')
         // console.log(val);
         this.stri = val;

        // $("#addCon").text();
       }
      },
      created(){
        this.getInfo();

      }
    }
</script>

<style scoped lang="scss">
      .section_address{
        width:100%;
        height:0.7rem;
        background:#fff;

        div{
          width:100%;

          display: -webkit-flex;
          -webkit-justify-content: space-between;
        }
        .address_one{
          :nth-child(1){
              display: block;
              height:0.3rem;
              display: -webkit-flex;
              -webkit-justify-content: center;
              -webkit-align-items: center;
            a{
              font-size: 0.16rem;
              font-style: normal;
              padding-left: 0.15rem;
              line-height: 0.3rem;
              color:black;
            }
            img{
              padding-left: 0.1rem;
            }
          }

          :nth-child(2){
              display: -webkit-flex;
            display: block;
              padding-right: 0.15rem;
              height:0.3rem;
            -webkit-align-items:center;
            -webkit-justify-content:center ;


          }
        }
        .address_two{
          -webkit-justify-content: center;
          -webkit-align-items: center;
          p{
            width: 2.75rem;
            height:0.4rem;
            font-size: 0.14rem;
            color:#e18a13;
          }
        }
  }

</style>
