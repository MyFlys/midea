<template>
    <div class="goods"v-if="List.goods">
        <div class="LocationTop">
          <div class="CartsLocation">
            <div class="CartsLocation_left">
              <i class="iconfont icon-weizhi"></i>
              <span>广州市天河区</span>
            </div>
            <p @click="bian">编辑全部</p>
          </div>
          <div class="CartsTitle">
            <div class="CartsTitle_left">
              <i class="iconfont icon-xuanzhong2" @click="allChoses"></i>
              <i class="iconfont icon-guan"></i>
              <span>美的官方商城</span>
            </div>
            <p @click="bian">编辑</p>
          </div>
        </div>
        <div class="sell" v-for="(kind,index) in  List.goods.normal">
            <div class="normalSell">
          <div class="normalSell_left">
            <i class="iconfont icon-xuanzhong2" @click="getIte;goodCheck(index)" ref="ll"></i>
            <div class="normalSell_gift">
              <div class="normalSell_img">
                <img :src="kind.pic" />
              </div>
              <div class="normalSell_imf">
                <p>{{kind.title}}</p>
                <span>{{kind.color}}</span>
                <div class="normalSell_count" v-show="sure">
                  <span @click="minNum(index)">－</span>
                  <input type="text" :value="kind.qal">
                  <span @click="addNum(index)">＋</span>
                </div>
              </div>
            </div>
          </div>
          <div class="normalSell_right">
            <p>￥{{kind.price}}</p>
            <div class="normalSell_more" @click="getMore">
              <span>更多活动</span> <img src="../../../../static/img/xia.jpg"/>
            </div>
            <div class="normalSell_num">
              ×<span>{{kind.qal}}</span>
            </div>
          </div>
        </div>
        </div>
         <div class="promotion">
        <div class="hide" @click="closeprom"></div>
        <div class="promotion_cu">
          <h1>促销活动</h1>
          <div class="promotion_cux">
            <div>
              <i class="iconfont icon-xuanzhong2"></i>
            </div>
            <p>换购：满100、200、300、400、500元即可换购商品</p>
          </div>
          <div class="promotion_noUse">
            <div>
              <i class="iconfont icon-xuanzhong2"></i>
            </div>
            <p>不使用优惠</p>
          </div>
        </div>
        <div class="makeSure" @click="closeprom">确定</div>
      </div>
        <!--<div class="offSell"  >-->
            <!--<div class="sell_bar" >-->
            <!--<div class="sell_bar_left">-->
              <!--<div>去换购</div>-->
              <!--<p>商品满购100.00元,即可加换1件商品</p>-->
            <!--</div>-->
            <!--<div class="sell_bar_right">-->
              <!--<span>去凑单</span>-->
              <!--<i class="iconfont icon-jianyou"></i>-->
            <!--</div>-->
        <!--</div>-->
            <!--<div class="normalSell" >-->
              <!--<div class="normalSell_left_s">-->
                <!--<i class="iconfont icon-xuanzhong2"  @click="getIts"></i>-->
                <!--<div class="normalSell_gift">-->
                  <!--<div class="normalSell_img">-->
                    <!--<img src="../../../../static/image/0001.jpg" />-->
                  <!--</div>-->
                  <!--<div class="normalSell_imf">-->
                    <!--<p></p>-->
                    <!--<span></span>-->
                    <!--<div class="normalSell_count" v-show="sure">-->
                      <!--<span>－</span>-->
                      <!--<input type="text" value="1">-->
                      <!--<span>＋</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="normalSell_right">-->
                <!--<p>￥</p>-->
                <!--<div class="normalSell_more" @click="getMore">-->
                  <!--<span>更多活动</span> <i class="iconfont icon-zhankai1"></i>-->
                <!--</div>-->
                <!--<div class="normalSell_num">-->
                  <!--×<span></span>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="promotion">-->
              <!--<div class="hide" @click="closeprom"></div>-->
              <!--<div class="promotion_cu">-->
                <!--<h1>促销活动</h1>-->
                <!--<div class="promotion_cux">-->
                  <!--<div>-->
                    <!--<i class="iconfont icon-xuanzhong2"></i>-->
                  <!--</div>-->
                  <!--<p>换购：满100、200、300、400、500元即可换购商品</p>-->
                <!--</div>-->
                <!--<div class="promotion_noUse">-->
                  <!--<div>-->
                    <!--<i class="iconfont icon-xuanzhong2"></i>-->
                  <!--</div>-->
                  <!--<p>不使用优惠</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="makeSure" @click="closeprom">确定</div>-->
            <!--</div>-->
         <!--</div>-->
        <!--<div class="offLimit">-->
            <!--<div class="normalSell">-->
          <!--<div class="normalSell_le">-->
            <!--<i class="iconfont icon-xuanzhong2" @click="getIti"></i>-->
            <!--<div class="normalSell_gift">-->
              <!--<div class="normalSell_img">-->
                <!--<img src="../../../../static/image/0001.jpg" />-->
              <!--</div>-->
              <!--<div class="normalSell_imf">-->
                <!--<p>花洒 除氯花洒 内置滤芯 SF 1570-C15</p>-->
                <!--<span>白色</span>-->
                <!--<div class="normalSell_off">-->
                  <!--已降价￥<span>50:00</span>-->
                <!--</div>-->
                <!--<div class="normalSell_count" v-show="sure">-->
                  <!--<span>－</span>-->
                  <!--<input type="text" >-->
                  <!--<span>＋</span>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="normalSell_right">-->
            <!--<p>￥299</p>-->
            <!--<div class="normalSell_more">-->
              <!--<span>限时特惠</span>-->
            <!--</div>-->
            <!--<div class="normalSell_num">-->
              <!--×<span>1</span>-->
            <!--</div>-->

          <!--</div>-->
        <!--</div>-->
         <!--</div>-->
        <div class="bottom">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
      export default {
        props:["bian","List","sure","cartCounter"],
        data(){
            return{
            }
        },
        methods:{
          allChoses(){
            if(this.List.cartsChecked){
              $('.icon-xuanzhong2').addClass("icon-xuanzhong active");
              this.List.goods.normal.forEach((good)=>{
                good.goodChecked = this.List.cartsChecked;
              })
              this.cartCounter(this.List.goods.normal)
              this.List.cartsChecked = false;
            }else {
              $('.icon-xuanzhong2').removeClass("icon-xuanzhong active");
              this.List.goods.normal.forEach((good)=>{
                good.goodChecked = this.List.cartsChecked;
              })
              this.cartCounter(this.List.goods.normal)
              this.List.cartsChecked = true;
            }
          },
          addNum(gid){
            this.List.goods.normal[gid].qal++
              this.cartCounter(this.List.goods.normal)
          },
          minNum(gid){
                if( this.List.goods.normal[gid].qal <=1){
                  this.List.goods.normal[gid].qal=1;
                }else {
                  this.List.goods.normal[gid].qal--
                  this.cartCounter(this.List.goods.normal)
             }
          },
          goodCheck(gid){
            this.List.goods.normal[gid].goodChecked = !this.List.goods.normal[gid].goodChecked;
            if(this.List.goods.normal[gid].goodChecked ){
              $(".sell").find("i").each(function (k,v) {
                  if(k==gid){
                      $(v).addClass("icon-xuanzhong active");
                  }
              })
              console.log($(this))
            }else {
                $(".sell").find("i").each(function (k,v) {
                  if(k==gid){
                    $(v).removeClass("icon-xuanzhong active");
                  }
                })
            }
            let flag = this.List.goods.normal[gid].goodChecked
            this.List.cartsChecked = flag;
            this.cartCounter(this.List.goods.normal)
            if(!this.List.cartsChecked){
              $(".footer_left").find("i").removeClass("icon-xuanzhong active");
              $(".CartsTitle_left").find("i").removeClass("icon-xuanzhong active");
              this.cartCounter(this.List.goods.normal)
            }
          },
          allChose(){
            if(this.List.cartsChecked){
              this.List.goods.normal.goodChecked = this.List.cartsChecked;
              $('.icon-xuanzhong2').addClass("icon-xuanzhong active")
              this.List.cartsChecked = false;

            }else {
              $('.icon-xuanzhong2').removeClass("icon-xuanzhong active")
              this.List.goods.normal.goodChecked = this.List.cartsChecked;
              this.List.cartsChecked = true;
              console.log(this.List.goods.normal.goodChecked)
            }
          },
          getMore(){
            $('.promotion').css('display','block')
          },
          closeprom(){
            $('.promotion').css('display','none')
          },
          getIts(){
            $('.normalSell_left_s .icon-xuanzhong2').toggleClass("icon-xuanzhong active")
          },
          getIte(){
            $('.normalSell_left .icon-xuanzhong2').toggleClass("icon-xuanzhong active");
          },
          getIti(){
            $('.normalSell_le .icon-xuanzhong2').toggleClass("icon-xuanzhong active")
          },
        },
      }
</script>

<style scoped lang="scss">
  .goods{
      width: 100%;
  }
  .LocationTop{
    width: 100%;
    height: 0.88rem;
    border: 1px solid #e3e3e3;
    border-left:none ;
    border-right: none;
  .CartsLocation{
    width: 100%;
    height: 0.43rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.14rem;
    background: #f4f4f4;
    color: #999;
    font-size: 0.13rem;
  .CartsLocation_left{
    height: 100%;
    display: flex;
    align-items: center;
  i{
    font-size: 0.18rem;
  }
  }
  }
  .CartsTitle{
    height: 0.45rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.12rem;
  .CartsTitle_left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #999;
  i{
    color: #dcdce6;
    font-size: 0.16rem;
    display: block;
    border-radius: 0.08rem;
    height: 0.16rem;
    width: 0.16rem;
  }
  .icon-xuanzhong2{
    color: #dcdce6;
    margin-right: 0.08rem;
  }
  .icon-xuanzhong{
    color: #fff;
    background: rgb(27,137,201);
  }
  .icon-guan{
    background: #fff;
    color: #1b89c9;
    margin-right: 0.08rem;
  }
  }
  p{
    color: #999;
  }
  }
  }
  .sell{
    width: 100%;
    .normalSell{
      width: 100%;
      height: 1.24rem;
      padding: 0.12rem;
      box-sizing: border-box;
      display: flex;
      border-bottom:1px solid #f6f6f6 ;
      justify-content: space-between;
      align-items: center;
      .normalSell_left{
        width: 2.8rem;
        height: 100%;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        i{
          color: #dcdce6;
          font-size: 0.16rem;
          display: block;
          border-radius: 0.08rem;
          height: 0.16rem;
        }
        .active{
          color: #fff;
          background: rgb(27,137,201);
        }
        .normalSell_gift{
          width: 2.34rem;
          height: 100%;
          margin-left: 0.08rem;
          display: flex;
          justify-content: flex-start;
          .normalSell_img{
            width: 0.8rem;
            height: 0.8rem;
            border: 1px solid #f6f6f6;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height: 0.8rem;
            }
          }
          .normalSell_imf{
            margin-left: 0.1rem;
            width: 100%;
            height: 100%;
            p{
              width: 1.46rem;
              height: 0.32rem;
              line-height: 0.16rem;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            span{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #999;
            }
            .normalSell_off{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #ff6600;
            }
            .normalSell_count{
              height: 0.28rem;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              span{
                display: block;
                width: 0.3rem;
                height: 0.26rem;
                border: 1px solid #c8c8c8;
                text-align: center;
                line-height: 0.26rem;
                font-size:0.24rem ;
                color: #999;
              }
              input{
                width: 60px;
                height: 0.26rem;
                border: none;
                border-top: 1px solid #c8c8c8;
                border-bottom: 1px solid #c8c8c8;
                outline: none;
                text-align: center;
                color: #999;
              }
            }
          }
        }
      }
      .normalSell_right{
        width: 0.72rem;
        height: 100%;
        .normalSell_more{
          width: 0.7rem;
          height: 0.18rem;
          border: 1px solid #ff6600;
          line-height: 0.18rem;
          text-align: center;
          color: #ff6600;
          margin: 0.04rem 0;
          i{
            font-size: 0.12rem;
          }
        }
        p{
          height: 0.16rem;
          line-height: 0.16rem;
          color: #ff6600;
          text-align: right;
        }
        .normalSell_num{
          text-align: right;
          color: #999;
          height: 0.2rem;
          line-height: 0.2rem;
        }
        .normalSell_more{
          width: 0.7rem;
          height: 0.18rem;
          border: 1px solid #ff6600;
          line-height: 0.18rem;
          text-align: center;
          color: #ff6600;
          img{
            display:inline-block;
          }
        }
      }
    }
  }
  .offSell{
    width: 100%;
    .sell_bar{
      width: 100%;
      height: 0.4rem;
      border-bottom: 1px dotted #f6f6f6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sell_bar_left{
        display: flex;
        justify-content: flex-start;
        div{
          border: 1px solid #ff6600;
          text-align: center;
          height: 0.18rem;
          line-height: 0.18rem;
          color: #ff6600;
          margin-left: 0.04rem;
        }
        p{
          width: 2.1rem;
          height: 0.18rem;
          line-height: 0.18rem;
          margin-left: 0.04rem;
          text-overflow:ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .sell_bar_right{
        width: 1rem;
        height: 0.18rem;
        color: #ff6600;
        text-align: right;
        margin-right: 0.1rem;
      }
    }
    .normalSell{
      width: 100%;
      height: 1.24rem;
      padding: 0.12rem;
      box-sizing: border-box;
      display: flex;
      border-bottom:1px solid #f6f6f6 ;
      justify-content: space-between;
      align-items: center;
      .normalSell_left_s{
        width: 2.8rem;
        height: 100%;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        i{
          color: #dcdce6;
          font-size: 0.16rem;
          display: block;
          border-radius: 0.08rem;
          height: 0.16rem;
        }
        .active{
          color: #fff;
          background: rgb(27,137,201);
        }

        .normalSell_gift{
          width: 2.34rem;
          height: 100%;
          margin-left: 0.08rem;
          display: flex;
          justify-content: flex-start;
          .normalSell_img{
            width: 0.8rem;
            height: 0.8rem;
            border: 1px solid #f6f6f6;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height: 0.8rem;
            }
          }
          .normalSell_imf{
            margin-left: 0.1rem;
            width: 100%;
            height: 100%;
            p{
              width: 1.46rem;
              height: 0.32rem;
              line-height: 0.16rem;
              overflow:hidden;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            span{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #999;
            }
            .normalSell_off{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #ff6600;
            }
            .normalSell_count{
              height: 0.28rem;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              span{
                display: block;
                width: 0.3rem;
                height: 0.26rem;
                border: 1px solid #c8c8c8;
                text-align: center;
                line-height: 0.26rem;
                font-size:0.24rem ;
                color: #999;
              }
              input{
                width: 60px;
                height: 0.26rem;
                border: none;
                border-top: 1px solid #c8c8c8;
                border-bottom: 1px solid #c8c8c8;
                outline: none;
                text-align: center;
                color: #999;
              }
            }
          }
        }
      }
      .normalSell_right{
        width: 0.72rem;
        height: 100%;
        p{
          height: 0.2rem;
          line-height: 0.2rem;
          color: #ff6600;
          text-align: right;
        }
        .normalSell_num{
          text-align: right;
          color: #999;
          height: 0.2rem;
          line-height: 0.2rem;
        }
        .normalSell_more{
          width: 0.7rem;
          height: 0.18rem;
          border: 1px solid #ff6600;
          line-height: 0.18rem;
          text-align: center;
          color: #ff6600;
          margin: 0.04rem 0;
          i{
            font-size: 0.12rem;
          }
        }
      }
    }
  }
  .promotion{
    display: none;
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .hide{
      height: 3.4rem;
      background:rgba(0,0,0,.6);
      width: 100%;
    }
    .promotion_cu{
      width: 100%;
      height: 2.8rem;
      background:#fff ;
      h1{
        width: 100%;
        height: 0.44rem;
        text-align: center;
        line-height: 0.44rem;
        border-bottom: 1px solid #ececec;
      }
      .promotion_cux,.promotion_noUse{
        width: 100%;
        height: 0.64rem;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #ececec;
        div{
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
        }
        p{
          color: #ff6600;
        }
      }
      .promotion_noUse{
        p{
          color: #333;
        }
      }

    }
    .makeSure{
      width: 100%;
      height: 0.48rem;
      line-height: 0.48rem;
      text-align: center;
      background: #ff6600;
      color: #fff;
      font-size: 0.2rem;
    }
  }
  .offLimit{
    width: 100%;
    .normalSell{
      width: 100%;
      height: 1.24rem;
      padding: 0.12rem;
      box-sizing: border-box;
      display: flex;
      border-bottom:1px solid #f6f6f6 ;
      justify-content: space-between;
      align-items: center;
      .normalSell_le{
        width: 2.8rem;
        height: 100%;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        i{
          color: #dcdce6;
          font-size: 0.16rem;
          display: block;
          border-radius: 0.08rem;
          height: 0.16rem;
        }
        .active{
          color: #fff;
          background: rgb(27,137,201);
        }
        .normalSell_gift{
          width: 2.34rem;
          height: 100%;
          margin-left: 0.08rem;
          display: flex;
          justify-content: flex-start;
          .normalSell_img{
            width: 0.8rem;
            height: 0.8rem;
            border: 1px solid #f6f6f6;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height: 0.8rem;
            }
          }
          .normalSell_imf{
            margin-left: 0.1rem;
            width: 100%;
            height: 100%;
            p{
              width: 1.46rem;
              height: 0.32rem;
              line-height: 0.16rem;
              overflow:hidden;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            span{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #999;
            }
            .normalSell_off{
              display: block;
              height: 0.2rem;
              line-height: 0.2rem;
              color: #ff6600;
              span{
                display: inline;
                color: #ff6600;
              }
            }
            .normalSell_count{
              height: 0.28rem;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              span{
                display: block;
                width: 0.3rem;
                height: 0.26rem;
                border: 1px solid #c8c8c8;
                text-align: center;
                line-height: 0.26rem;
                font-size:0.24rem ;
                color: #999;
              }
              input{
                width: 60px;
                height: 0.26rem;
                border: none;
                border-top: 1px solid #c8c8c8;
                border-bottom: 1px solid #c8c8c8;
                outline: none;
                text-align: center;
                color: #999;
              }
            }
          }
        }
      }
      .normalSell_right{
        width: 0.72rem;
        height: 100%;
        p{
          height: 0.2rem;
          line-height: 0.2rem;
          color: #ff6600;
          text-align: right;
        }
        .normalSell_num{
          text-align: right;
          color: #999;
          height: 0.2rem;
          line-height: 0.2rem;
        }
        .normalSell_more{
          width: 0.6rem;
          height: 0.18rem;
          background: #ff6600;
          line-height: 0.18rem;
          text-align: center;
          color: #fff;
          margin: 0.04rem 0 0.04rem 0.14rem;
        }
      }
    }
  }
  .bottom{
    width: 100%;
    height: 1rem;
    background: #f4f4f4;
  }
</style>
