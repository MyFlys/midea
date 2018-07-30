<template>
    <section>
          <!--<carts-section-header :bian="bian"></carts-section-header>-->
          <!--<carts-section-sell :List="goodsList"></carts-section-sell>-->
          <!--<carts-section-off-sell :List="goodsList"></carts-section-off-sell>-->
          <!--<carts-section-off-limit :List="goodsList"></carts-section-off-limit>-->
          <!--<carts-section-bottom></carts-section-bottom>-->
          <carts-section-goods :List="goodsList" :bian="bian" :sure="sure" :cartCounter="cartCounter"></carts-section-goods>
          <carts-footer :totalCount="totalCount" :totalMoney="totalMoney" :List="goodsList" :cartCounter="cartCounter"></carts-footer>
    </section>
</template>

<script type="text/ecmascript-6">
//    import CartsSectionHeader  from  './CartsSection/CartsSectionHeader.vue'
//    import CartsSectionSell from './CartsSection/CartsSectionSell.vue'
//    import CartsSectionOffSell from './CartsSection/CartsSectionOffSell.vue'
//    import CartsSectionOffLimit from './CartsSection/CartsSectionOffLimit.vue'
//    import CartsSectionBottom from './CartsSection/CartsSectionBottom.vue'
    import CartsSectionGoods from './CartsSection/CartsSectionGoods.vue'
    import CartsFooter from './CartsFooter.vue'
    import MdList from "../../apis/DataServiceApi.js"
      export default {
            data(){
              return{
                "goodsList":[],
                "totalMoney":"0",
                "totalCount":"0",
                "data":{
                  "cartsChecked":true,
                  "goods": {
                    "normal": [
                    ],
                  },
                  "totalMoney":0,
                  "totalCount":0
                },
                sure:false,
              }
            },
            components:{
//              CartsSectionHeader,
//              CartsSectionSell,
//              CartsSectionOffSell,
//              CartsSectionOffLimit,
//              CartsSectionBottom,
              CartsSectionGoods,
              CartsFooter
            },
          methods:{
            bian(){
                this.sure = !this.sure;
                var  ss = $('.CartsLocation').children("p");
                var pp = $('.CartsTitle').children("p");
                if(ss.text() == "完成"){
                    ss.text("编辑全部")
                }else {
                   ss.text("完成")
                }
              if(pp.text() == "完成"){
                  pp.text("编辑")
              }else {
                  pp.text("完成")
              }
            },
            cartCounter(goods){
              this.totalMoney = 0;
              this.totalCount = 0
              goods.forEach((good)=>{
                  if(good.goodChecked){
                    this.totalMoney += good.price*good.qal;
                    this.totalCount += good.qal;
                    console.log(this.totalMoney)
                  }
              })
            },
          },
          created(){
//            var  atr= [];
//            var storage=window.localStorage;
//            console.log(storage)
//            for(var i=0;i<storage.length;i++){
//              if(storage.key[i].indexOf("good")){
//                  atr.push(storage[i])
//              }
//            }
//            console.log(atr)
//            MdList.CartsList((data)=>{
//              console.log(this.data)
              this.goodsList = this.data;
              var storage=window.localStorage;
              var  atr = [];
              var  attr = [];
              if(!storage==[]){
                for(var i=0;i<storage.length;i++){
                  if(storage.key(i).indexOf("good")==0){
                    atr.push(storage.key(i))
                  }
                }
                for(var j=0;j<atr.length;j++){
                  attr.push(JSON.parse(storage[atr[j]]))
                }
              }
              this.data.goods.normal  = this.data.goods.normal.concat(attr);
              console.log(this.data.goods.normal)
              this.cartCounter(this.data.goods.normal)
//            })
          },

      }
</script>

<style scoped lang="scss">
      section{
            margin-top:0.43rem ;
            width: 100%;
      }

</style>
