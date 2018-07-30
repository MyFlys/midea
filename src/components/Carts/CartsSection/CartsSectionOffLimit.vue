<template>
  <div class="offLimit">
    <div class="normalSell">
      <div class="normalSell_le">
        <i class="iconfont icon-xuanzhong2" @click="getIt"></i>
        <div class="normalSell_gift">
          <div class="normalSell_img">
            <img src="../../../../static/image/0001.jpg" />
          </div>
          <div class="normalSell_imf">
            <p>花洒 除氯花洒 内置滤芯 SF 1570-C15</p>
            <span>白色</span>
            <div class="normalSell_off">
                已降价￥<span>50:00</span>
            </div>
            <div class="normalSell_count">
              <span>－</span>
              <input type="text" value="1">
              <span>＋</span>
            </div>
          </div>
        </div>
      </div>
      <div class="normalSell_right">
        <p>￥299</p>
        <div class="normalSell_more">
          <span>限时特惠</span>
        </div>
        <div class="normalSell_num">
          ×<span>1</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
        getIt(){
          $('.normalSell_le i').toggleClass("icon-xuanzhong active")
        }
      },
  }
</script>

<style scoped lang="scss">
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
</style>
