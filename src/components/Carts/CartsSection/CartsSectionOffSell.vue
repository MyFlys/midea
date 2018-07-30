<template>
  <div class="offSell" v-if="List.goods" >
    <div class="sell_bar" >
        <div class="sell_bar_left">
            <div>去换购</div>
            <p>商品满购100.00元,即可加换1件商品</p>
        </div>
        <div class="sell_bar_right">
            <span>去凑单</span>
          <i class="iconfont icon-jianyou"></i>
        </div>
    </div>
    <div class="normalSell" :sss="List" >
      <div class="normalSell_left_s">
        <i class="iconfont icon-xuanzhong2"  @click="getIt"></i>
        <div class="normalSell_gift">
          <div class="normalSell_img">
            <img :src="List.goods.sell.pic" />
          </div>
          <div class="normalSell_imf">
            <p>{{List.goods.sell.title}}</p>
            <span>{{List.goods.sell.color}}</span>
            <div class="normalSell_count">
              <span>－</span>
              <input type="text" :value="List.goods.sell.qal">
              <span>＋</span>
            </div>
          </div>
        </div>
      </div>
      <div class="normalSell_right">
        <p>￥{{List.goods.sell.price}}</p>
        <div class="normalSell_more" @click="getMore">
          <span>更多活动</span> <i class="iconfont icon-zhankai1"></i>
        </div>
        <div class="normalSell_num">
          ×<span>{{List.goods.sell.qal}}</span>
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
  </div>



</template>

<script type="text/ecmascript-6">
  export default {
        props:["List"],
        data(){
            return{
              loading: false,
            }
        },
        methods:{
        getMore(){
              $('.promotion').css('display','block')
        },
        closeprom(){
          $('.promotion').css('display','none')
        },
        getIt(){
          $('.normalSell_left_s i').toggleClass("icon-xuanzhong active")
        }
    },
  }
</script>

<style scoped lang="scss">
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
      background:rgba(0,0,0,.4);
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
</style>
