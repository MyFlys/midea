<template>
    <ul>
      <p class="ulup">
        <span class="lista">满赠</span>
        <span class="listb">已购买一件，您已获得赠品</span>
      </p>

      <li class="li1" v-for="n in goosp">
          <div class="li_one">
              <div class="left">
                <div class="up"></div>
                <div class="down">
                  <img :src="n.pic" alt="">
                </div>
              </div>
              <div class="middle">
                  <div class="middle_up">
                    {{n.title}}
                  </div>
                  <div class="middle_down">
                   {{n.color}}
                  </div>
              </div>
             <div class="right">
                  <div class="right_up">
                        ￥{{n.price}}
                  </div>
                  <div class="right_down">
                    × {{n.qal}}
                  </div>
             </div>
          </div>
          <div class="li_two">
              <div class="two_up">
                <select>
                  <option selected>
                    不开发票
                  </option>
                  <option value="">
                    电子普通发票
                  </option>
                  <option value="">
                    纸质普通发票
                  </option>
                </select>
              </div>
              <div class="two_down">
                无发票时，任凭订单交易记录或机身生产日期码享受售后服务
              </div>
          </div>
      </li>
      <!--<li class="li1">-->
        <!--<div class="li_one">-->
          <!--<div class="left">-->
            <!--<div class="up"></div>-->
            <!--<div class="down">-->
              <!--<img src="../../../../static/img/goods2.jpg" alt="">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="middle">-->
            <!--<div class="middle_up">-->
              <!--&lt;!&ndash;<i>[赠品]</i>阿biu生活周边-18年新版围裙隔热四件套 I NEED ABIU Hug系列&ndash;&gt;-->
            <!--</div>-->
            <!--<div class="middle_down">-->
              <!--蓝色/围裙隔热四件套-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="right">-->
            <!--<div class="right_up">-->
              <!--￥599.00-->
            <!--</div>-->
            <!--<div class="right_down">-->
              <!--× 1-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="li_two">-->
          <!--<div class="two_up">-->
            <!--<select>-->
              <!--<option selected>-->
                <!--不开发票-->
              <!--</option>-->
              <!--<option value="">-->
                <!--电子普通发票-->
              <!--</option>-->
              <!--<option value="">-->
                <!--纸质普通发票-->
              <!--</option>-->
            <!--</select>-->
          <!--</div>-->
          <!--<div class="two_down">-->
            <!--无发票时，任凭订单交易记录或机身生产日期码享受售后服务-->
          <!--</div>-->
        <!--</div>-->
      <!--</li>-->


    </ul>
</template>

<script>
    export default {
        name: "orderLists",
      props:["goosp"]
    }
</script>

<style scoped lang="scss">
  ul{
    width:100%;

    .ulup{
      width:100%;
      height:0.4rem;
      /*margin-bottom:0.1rem;*/
      display: -webkit-flex;
      -webkit-align-items: center;
      background:#fff;


      .lista{
        display: block;
        width:0.6rem;
       line-height:0.3rem;
        background:#ff6d00;
        font-size: 0.18rem;
        color:#fff;
        margin-left: 0.1rem;
        text-align: center;
      }
      .listb{
            font-size: 0.18rem;
             line-height: 0.4rem;
        color:#b5b5b5;
      }

    }
    li{
      width:100%;
      height:2.2rem;
      background:#fff;
    padding-left: 0.2rem;
      .li_one {
        width: 100%;
        height: 1.2rem;
        /*background: palegreen;*/
        display: -webkit-flex;


        .left{
            height:1.2rem;
          padding: 0 0.1rem;
          .up{
            height:0.4rem;
            /*background:#333;*/
          }
          .down{
            height:0.8rem;
            img{
              height:0.8rem;
            }

          }

        }
        .middle{
          width:1.5rem;
          height:1.1rem;
          /*background:pink;*/

          .middle_up{
            height:0.8rem;
            font-size: 0.14rem;
            color:#3e3e3e;
            i{
              font-style: normal;
              color:#ea884b;
            }
          }
          .middle_down{

            font-size: 0.14rem;
            color:orangered;
            line-height: 0.3rem;
          }


        }
        .right{
          width:0.5rem;
          height:1.1rem;

          padding-left: 0.1rem;
          .right_up{
            line-height:0.25rem;
            text-align: center;
            font-size:0.16rem;
            color:#f88d3d;
          }
          .right_down{
            line-height:0.25rem;
            text-align:right;
            font-size:0.16rem;
            color:#868686;
          }
        }
      }
      .li_two{
        /*background: palegreen;*/
          width:100%;
          height:1rem;
        .two_up{
          width:100%;
          height:0.3rem;
          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: center;
          select{
            width:1.2rem;
            height:0.3rem;
            display: block;
          border:1px solid #eee;
          }

        }
        .two_down{
          width:100%;
          line-height:0.7rem;
          font-size: 0.12rem;
          color:#c86e20;
        }


      }

    }
  }

</style>
