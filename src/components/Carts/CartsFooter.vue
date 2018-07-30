<template>
    <footer >
        <div class="footer_left">
            <i class="iconfont icon-xuanzhong2"  @click="allChose"></i>
            <span>全选</span>
        </div>
        <div class="footer_right">
            <div class="getMoney">
                <div>合计： <span>￥{{totalMoney }}</span></div>
            </div>
          <router-link to="order"  >
              <div class="getNumber" @click="send">
                结算(<span>{{totalCount}}</span>)
              </div>
          </router-link>
        </div>
    </footer>
</template>

<script type="text/ecmascript-6">
      export default {
        props:["totalMoney","totalCount","List","cartCounter"],
        methods:{
          allChose(){
            if(this.List.cartsChecked){
               $('.icon-xuanzhong2').addClass("icon-xuanzhong active");
              this.List.goods.normal.forEach((good)=>{
                    good.goodChecked = this.List.cartsChecked;
              });
              this.cartCounter(this.List.goods.normal);
              this.List.cartsChecked = false;
            }else {
              $('.icon-xuanzhong2').removeClass("icon-xuanzhong active");
              $(".CartsTitle_left").find("i").removeClass("icon-xuanzhong active");
              this.List.goods.normal.forEach((good)=>{
                good.goodChecked = this.List.cartsChecked;
              });
              this.cartCounter(this.List.goods.normal);
              this.List.cartsChecked = true;
            }
          },
          change(){
              if(this.totalCount>0){
                $(".getNumber").css({ color: "#fff", background: "#ff6600" });
              }else {
                $(".getNumber").css({ color: "#fff", background: "#999" });
              }
          },
          send(){
            var cartsGood=[]
            this.List.goods.normal.forEach((good)=>{
              if(good.goodChecked ){
                cartsGood.push(good)
              }
            });
               var  cartsGood = JSON.stringify(cartsGood)
                window.localStorage.setItem("fromCarts",cartsGood)
                window.localStorage.setItem("AllNum",this.totalCount)
                window.localStorage.setItem("AllMon",this.totalMoney)
          }
        },
        updated(){
          this.change()
        },
      }
</script>

<style scoped lang="scss">
    footer{
        z-index: 2;
        background: #fff;
        width: 100%;
        height: 0.4rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left:  0.12rem;
         color: #333;
        position: fixed;
        left: 0;
        bottom: 0.58rem;
        .footer_left{
          display: flex;
          span{
            font-size: 0.14rem;
          }
          i{
            color: #dcdce6;
            display: block;
            text-align: center;
            height: 0.16rem;
            font-size: 0.16rem;
            width: 0.16rem;
            margin-right: 0.08rem;
            border-radius: 0.08rem;
          }
          .active{
            color: #fff;
            background: rgb(27,137,201);
          }
        }
        .footer_right{
            width: 2.2rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .getMoney{
                width: 1.2rem;
                height: 100%;
                 display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                div,p{
                    width: 100%;
                    height: 0.22rem;
                    line-height: 0.22rem;
                    font-size: 0.14rem;
                    span{
                        color: #ff6600;
                    }
                }
                p{
                  color: #999;
                }
            }
            a{
              width: 1rem;
              height: 100%;
              display: block;
              .getNumber{
                width: 1rem;
                height: 100%;
                text-align: center;
                line-height: 0.4rem;
                background: #999;
                font-size: 0.18rem;
                color: #fff;
              }
            }
        }
    }
</style>
