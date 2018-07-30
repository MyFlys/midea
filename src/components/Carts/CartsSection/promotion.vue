<template>
    <div class="promotion">
        <div class="hide"></div>
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
        <div class="makeSure">确定</div>
    </div>
</template>

<script type="text/ecmascript-6">
      export default {}
</script>

<style scoped lang="scss">
    .promotion{

        position: fixed;
        z-index: 9999;
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
