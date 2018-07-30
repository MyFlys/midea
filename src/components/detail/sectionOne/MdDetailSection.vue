<template>
    <section >
      <div class="notice">
        【通知】1、新疆部分区域无法快递正常发货，恢复时间待定，给您带来不便，敬请见谅。2、美的商城为美的集团官方渠道，请勿相信任何刷单信息。
      </div>
      <md-detail-section-swiper :item="list"></md-detail-section-swiper>
      <div class="goodsInfo"  v-if="list.info">
        <p class="title">
          {{list.info.title}}
        </p>
        <span class="keyword">
          {{list.info.keyWords}}
        </span>
        <div class="priceBlock">
          <div class="itemPrice">

            <span class="price">￥{{list.info.price}}</span>
            <span class="oldprice">￥{{list.info.oldPrice}}</span>
          </div>
          <div class="itemInfo">
        <span class="comment">评价
          <span class="commentNum">{{list.info.comment}}</span>
        </span>
            <span class="store">库存
          <span class="storeNum">{{list.info.store}}</span>
        </span>
          </div>
        </div>
      </div>
      <ul class="goodsDetail">
        <li class="promotion">
          <div class="promotion_list js_switch_promo">
            <h3>促销</h3>
            <p class="act_hinter dispear">你可以享受以下优惠</p>
            <div class="act_list option_list">
              <div class="icon_p">送积分</div>
            </div>
            <i class="iconfont icon-zhankai1"></i>
          </div>
          <div class="promotion_list promotion_detail dispear">
            <div class="act_list">
              <div class="option_block">
                <b class="icon_p">送积分</b>
                <span class="icon_text">最高送566积分</span>
              </div>
            </div>
          </div>
        </li>
        <li class="promotion">
          <div class="promotion_list js_switch_promo">
            <h3>分期</h3>
            <p class="act_hinter">该商品支持分期支付</p>
            <i class="iconfont icon-zhankai1"></i>
          </div>
          <div class="promotion_list promotion_detail dispear">
            <div class="act_list">
              <ul class="option_block">
                <li>
                  <span class="fenqi_text">¥1932.11*3期</span>
                  <span>含手续费</span>
                </li>
                <li>
                  <span class="fenqi_text">¥986.83*6期</span>
                  <span>含手续费</span>
                </li>
                <li>
                  <span class="fenqi_text">¥507.58*12期</span>
                  <span>含手续费</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="promotion">
          <div class="promotion_list js_switch_promo">
            <h3>服务</h3>
            <ul class="act_hinter">
              <li>
                <i class="iconfont icon-xuanzhong"></i>
                <span>美的唯一官方商城</span>
              </li>
              <li>
                <i class="iconfont icon-xuanzhong"></i>
                <span>全国联保</span>
              </li>
              <li>
                <i class="iconfont icon-xuanzhong"></i>
                <span>全场包邮</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="mod_detail_info">
        <div class="send_to">
          <div class="send_to_wrap" id="addrTrigger">
            <h3>送至</h3>
            <div class="addr">
              <span id="addrDetail" class="addr_detail">陕西省西安市碑林区</span>
            </div>
            <i class="iconfont icon-jianyou"></i>
            <span class="stock_state J_stock_state">无货</span>
          </div>
        </div>
        <div class="sku_container" v-if="list.info">
          <div class="sku_wrap" id="skuWrap">
            <div class="sku" id="skuColor" >
              <h3>颜色</h3>
              <div class="sku_list">
                <span class="option" :style=list.info.colors>{{list.info.color}}</span>
              </div>
            </div>
            <div class="sku" id="skuSpec" >
              <h3>规格</h3>
              <div class="sku_list">
                <span class="option" v-for="s in list.info.style"  :style=list.info.styles>{{s}}</span>
              </div>
            </div>
            <div class="sku sku_num">
              <h3>数量</h3>
              <div class="num_wrap" id="divEditNum" mtag="30008.6.1">
                <span id="minus" class="minus" @click="minNum">-</span>
                <input id="num" disabled="disabled" class="num" :value="nums">
                <span id="plus" class="plus" @click="addNum" >+</span>
              </div>
              <span class="quota">每个账户限购3件</span>
            </div>
          </div>
        </div>
      </div>
      <md-detail-section-goods-param :lists="list"></md-detail-section-goods-param>
      <md-detail-section-goods-service></md-detail-section-goods-service>
      <div class=" comment ">
        <div class="detail_info_line ">
          <h3>商品评价</h3>
          <i class="iconfont icon-jianyou"></i>
        </div>
        <div class="proTag">
          <span>机器颜值高<b>(58)</b></span>
          <span>服务态度好<b>(52)</b></span>
          <span>机器颜值高<b>(42)</b></span>
        </div>
        <div class="proComment">
          <div class="proUser">
            <div class="user">
              <img src="../../../../static/img/h5_avator.png" alt="">
              <span>木***钱</span>
            </div>
            <div class="time">
              <i class="iconfont icon-jing"></i>
              <span>2018-04-07</span>
            </div>
          </div>
          <p class="comment">美的不错？</p>
          <a class="lookMore" @click="toSet()">
            <span>查看全部70条评论</span>
            <i class="iconfont icon-jianyou"></i>
          </a>
        </div>
      </div>
      <div class="shop">
        <div class="shopName">
          <img src="../../../../static/img/logo_60x60.png" alt="">
          <span>美的官网商城</span>
        </div>
        <a href="javascript:;" class="back">返回商城</a>
      </div>
      <div class="toRecommend">
        <h3 class="recommend">为你推荐</h3>
      </div>
      <div class="tolookMore" >
        <a href="javascript:;" class="lookMore" >
          点击查看图文详情
        </a>
      </div>
    </section>
</template>

<script>
  import MdDetailSectionSwiper from "./sOneComponent/MdDetailSectionSwiper";
  import MdDetailSectionGoodsParam from "./sOneComponent/MdDetailSectionGoodsParam"
  import MdDetailSectionGoodsService from "./sOneComponent/MdDetailSectionGoodsService"

  export default {
    name: "MdDetailSection",
    components: {
      MdDetailSectionSwiper,
      MdDetailSectionGoodsParam,
      MdDetailSectionGoodsService,
    },
    data(){
      return{
        info: this.list.info
      }
    },
    props:["list","nums","addNum","minNum"],
    methods:{
      __xiala(){
        $('.goodsDetail .promotion').on('click',function(){
          // console.log($(this).children('.promotion_list ').children('i'))
          $(this).children('.promotion_list ').children('i').toggleClass('icon-zhankai1').toggleClass('icon-shouqi_m')
          $(this).children('.promotion_detail').toggleClass('dispear')
          // $(this).children('.promotion_list ').children('.act_hinter').removeClass('dispear').next().toggleClass('dispear')
        })
        $('.product_param .detail_info_line').on("click",function(){
          $(this).children('i').toggleClass('icon-zhankai1').toggleClass('icon-shouqi_m')
          $(this).next().toggleClass('dispear')
        })
      },
      toSet(){
        this.$router.push({path: '/MideaDetail/MdDetailComment'});

      }
    },
    mounted(){
      this.__xiala()
    },
    created(){
      console.log(this.list)
    }
  }
</script>

<style scoped lang="scss">
  section{

    .notice{
      background: rgb(0, 59, 102);
      color:#fff;
      font-size: 0.1rem;
      padding: 0.03rem;
    }
    .goodsInfo{
      padding:0 0.15rem;
      border-bottom:1px solid #eee ;
      background: #fff;
      .title{
        padding-top:0.15rem;
        font-size:0.16rem;
        line-height:0.2rem;
      }
      .keyword{
        padding-bottom:0.15rem;
        font-size: 0.14rem;
        line-height: 0.18rem;
        color: #f60;
        display: block;
      }
      .priceBlock{
        display: -webkit-flex;
        justify-content: space-between;
        padding-bottom:0.15rem;
        .itemPrice{
          font-size: 0.14rem;
          color:#f60;
          display: -webkit-flex;
          .price{
            font-size: 0.24rem;
            display: block;
            line-height:0.19rem;
          }
          .oldprice{
            font-size: 0.16rem;
            color:#999;
            text-decoration: line-through;
            display: block;
            margin-top:0.05rem;
            height:0.16rem;
            line-height:0.16rem;
          }
        }
        .itemInfo{
          font-size: 0.12rem;
          color:#999;
          span{
            display: inline-block;
          }
          .comment{
            padding-right:0.1rem;
          }
          .store{
            float:right;
            padding-left:0.1rem;
            border-left:1px solid #ddd;
          }
        }
      }
    }
    .dispear{
      display:none;
    }
    .goodsDetail{
      margin-bottom: 0.1rem;
      li{
        font-size: 0.12rem;

        .promotion_list{
          overflow:hidden;
          background: #fff;
          padding:0.11rem 0.15rem;
          border-bottom: 1px solid #eee;
          h3{
            float:left;
            color:#999;
            font-weight: 100;
          }
          .act_hinter{
            float:left;
            color: #333;
            font-size: 0.13rem;
            padding-left: 0.2rem;
            li{
              height:0.22rem;
              line-height:0.22rem;
              float: left;
              margin-right:0.15rem;
              i{
                font-size: 0.1rem;
                color:#0092d8;
                float:left;
                margin-right:0.03rem;
              }
              span{
                color:#999;
                font-size: 0.11rem;
              }
            }
          }
          .act_list{
            float: left;
            padding-left:0.2rem;
            .icon_p{
              width: 0.52rem;
              height: 0.16rem;
              line-height: 0.16rem;
              background: #f60;
              text-align: center;
              color:#fff;
            }
          }
          i{
            float:right;
          }
        }
        .promotion_detail{
          background: #fafafa;
          .act_list{
            .option_block{
              b{
                display: inline-block;
                margin-right:0.06rem;
                margin-left: 0.25rem;
              }
              .icon_text{
                color:#999;
                font-size: 0.11rem;
              }
              li{
                font-size: 0.14rem;
                padding-left: 0.25rem;
                margin:0.04rem 0;
                color:#666;
                .fenqi_text{
                  display: inline-block;
                  width: 1.66rem;
                }
              }
            }
          }


        }
      }
    }
    .mod_detail_info{
      background: #fff;
      font-size:0.12rem;
      margin-bottom:0.1rem;
      .send_to{
        height:0.45rem;
        line-height:0.45rem;
        padding-left:0.15rem;
        .send_to_wrap{
          overflow: hidden;
          border-bottom:1px solid #eee;
          h3{
            float: left;
            color: #999;
            font-weight: 100;
            float:left;
          }
          .addr{
            float:left;
            font-size: 0.14rem;
            padding-left:00.2rem;
            color:#333;
          }
          i{
            float:right;
            font-size:0.2rem;
            color:#B7B7B7;
            padding-right:0.2rem;
          }
          .stock_state{
            float:right;
            display:block;
            color:#f60;
          }
        }
      }
      .sku_container{
        padding-left:0.15rem;
        .sku_wrap{
          border-bottom:1px solid #eee;
          .sku{
            width: 100%;
            overflow: hidden;
            padding: 0.15rem 0;
            height:0.3rem;
            line-height:0.3rem;
            border-bottom:1px solid #eee;
            h3{
              float: left;
              color: #999;
              font-weight: 100;
              float:left;
            }
            .sku_list{
              span{
                float:left;
                margin-left:0.2rem;
                height:0.3rem;
                line-height:0.3rem;
                background:#f60;
                color:#fff;
                font-size:0.12rem;
                text-align:center;
                border-radius: 0.05rem;
                padding:0 0.15rem;
              }

            }
            .num_wrap{
              .minus{
                margin-left:0.2rem;
              }
              span{
                float:left;
                width: 0.3rem;
                height: 0.3rem;
                line-height: 0.3rem;
                border: 1px solid #eee;
                font-size: 0.3rem;
                color:#eee;
                text-align:center;

              }
              input{
                float:left;
                width: 0.3rem;
                height: 0.3rem;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                border-left:0;
                border-right:0;
                background: #fff;
                text-align:center;

              }

            }
            .quota{
              margin-left:0.1rem;
              color:#ccc;
              font-size: 0.14rem;
            }
          }
          .sku:nth-child(3){
            border-bottom:0;
          }
        }
      }
    }
    .comment{
      font-size:0.12rem;
      background: #fff;
      margin-bottom:0.1rem;
      .detail_info_line{
        padding:0.12rem 0.15rem;
        display: -webkit-flex;
        justify-content: space-between;
        color:#333;
        border-bottom: 1px solid #eee;
      }
      .proTag{
        padding:0.1rem 0 ;
        margin-left:0.15rem;
        border-bottom: 1px solid #eee;
        span{
          display: inline-block;
          font-size: 0.12rem;
          color: #333;
          border-radius: 0.04rem;
          -webkit-border-radius: 0.04rem;
          background: #ebfcf1;
          border: 1px solid #23d75f;
          height: 0.24rem;
          line-height: 0.24rem;
          vertical-align: middle;
          padding: 0 0.08rem;
          margin: 0.1rem 0.1rem 0 0;
        }
      }
      .proComment{
        margin-left:0.1rem;
        padding: 0.1rem 0.15rem 0 0;
        border-bottom: 1px solid #eee;
        .proUser{
          display: -webkit-flex;
          justify-content: space-between;
          .user{
            img{
              width: 0.32rem;
              height: 0.32rem;
              float:left;
              border-radius:50%;
            }
            span{
              height:0.32rem;
              line-height:0.32rem;
              padding-left:0.15rem;

            }
          }
          .time{
            height:0.32rem;
            line-height:0.32rem;

            i{
              float: left;
              color:#0092d8;
            }
            span{
              color:#ccc;
              margin-left:0.1rem;
            }
          }
        }
        .comment{
          color:#747474;
          padding:0.15rem 0;
          font-size:0.12rem;
          border-bottom: 1px solid #eee;
        }
        .lookMore{
          height: 0.44rem;
          line-height: 0.44rem;
          font-size: 0.14rem;
          color:#0092d8;
          text-align:center;
          i{
            display: inline-block;
          }
        }
      }
    }
    .shop{
      display: -webkit-flex;
      justify-content: space-between;
      font-size: 0.14rem;
      background: #fff;
      padding:  0.15rem;
      margin-bottom: 0.1rem;
      .shopName{
        img{
          width: 0.3rem;
          height: 0.3rem;
          float:left;
        }
        span{
          height: 0.3rem;
          line-height: 0.3rem;
          display: inline-block;
          padding-left:0.15rem;
        }
      }
      .back{
        width: 0.73rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border: 1px solid #0093d5;
        border-radius: 0.03rem;
        text-align: center;
        font-size: 0.12rem;
        color: #0093d5;
      }
    }
    .toRecommend{
      .recommend{
        background: #fff;
        color: #333;
        font-size: 0.14rem;
        line-height: 0.20rem;
        font-weight: normal;
        padding: 0.1rem 0.15rem;
      }

    }
    .tolookMore{
      display: -webkit-flex;
      justify-content: center;
      margin:0.1rem 0;
      .lookMore{
        width: 1.1rem;
        font-size: 0.13rem;
        height: 0.28rem;
        line-height: 0.28rem;
        padding: 0 0.1rem;
        border: 1px solid #ccc;
        border-radius: 0.03rem;
        -webkit-border-radius: 0.03rem;
        color: #666;
        background-color: #fff;
        text-align: center;
      }
    }
  }
</style>
