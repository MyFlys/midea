<template>
  <div class="cardbody">
    <header>
      <router-link to="/order">
   <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
      </router-link>



      <h3>绑定礼品卡</h3>
      <p></p>
    </header>
    <div class="cdmi">
      <div class="cdmileft">
        <label class="label_one">卡密</label>
      </div>
      <div class="cdmiright">
        <input type="number" placeholder="请输入礼品卡卡密" id="panduan">
      </div>
    </div>
    <div class="addbutton">
      <a href="javascript:;" class="button" @click="disp">
        确认
      </a>
    </div>
    <div class="hide" id="hides">
      <div class="hidea" id="hideaa">
        <p class="hideone" id="hideones">您的卡密不存在</p>
        <a href="javascript:;" class="aaa" @click="disb">确认</a>
      </div>
    </div>
    <div class="zzc" id="zz">

    </div>

  </div>
</template>

<script>

    export default {
        name: "cardmi",
      components:{

      },
      methods:{

        disp(){

          var val = $('#panduan').val()
          if (val==="" || val===null){
            $('#hideones').html("请输入卡密号")

          }else if(val==="123456"){
            $('#hideones').html("绑定成功")
            $(".aaa").click(function(){
              window.location.href="./order.vue";
            })

          }else{
            $('#hideones').html("您的卡密不正确,请重新输入")
          }
          $(".hide").css("display","block")
          $(".zzc").css("display","block")

        },
        disb(){
          $(".hide").css("display","none")
          $(".zzc").css("display","none")
        },

      },
    }
</script>

<style scoped lang="scss">
  .cardbody{
    width:100%;
    background:#eee;
    header{
      width:100%;
      height:0.44rem;
      background:#fff;
      display: -webkit-flex;
      -webkit-align-items:center;
      -webkit-justify-content: space-between;
      span{
        width:0.3rem;
        height:0.44rem;
        display: -webkit-flex;
        -webkit-align-items:center;
        justify-content:center ;
        padding-left: 0.1rem;
        i{
          font-size: 0.22rem;
          color:#0092d8;
        }
      }
      h3{
        font-size: 0.18rem;
        color:#000;
        font-weight: 100;

      }
      p{
        width:0.3rem;
        height:0.44rem;
      }

    }
    .cdmi{
      width:100%;
      height:0.5rem;
      background:#fff;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content:flex-start;
      /*padding:0 0.15rem;*/
      border-top:1px solid #d9d9d9;

      .cdmileft{
        height:0.25rem;
        /*background: cornsilk;*/
        display: -webkit-flex;
        padding-left: 0.1rem;


        .label_one{
          line-height:0.25rem;
          font-size: 0.16rem;
        }

      }
      .cdmiright{
        height:0.25rem;
        /*background: greenyellow;*/
        display: -webkit-flex;
        margin-left: 0.2rem;

        input{

          height:0.25rem;
          width:2.3rem;
          font-size:0.14rem;
          border:none;
          outline: none;
          color:#bababa;
        }
      }
    }
    .addbutton{
      display: -webkit-flex;
      -webkit-justify-content: center;
      margin-top: 0.2rem;
      .button{
        width:3rem;
        height:0.4rem;
        background:#0092d8;
        font-size: 0.2rem;
        line-height: 0.4rem;
        text-align: center;
        color:#fff;
        border:none;
      }
    }
    .hide{
      display: -webkit-flex;

      width:100%;
      display: none;
      -webkit-justify-content: center;
      /*-webkit-align-items: center;*/
      .hidea{
        width:3rem;
        height:1rem;
        z-index: 999;
        background:#fff;
        position:absolute;
        top: 3.3rem;
        right: 0;
        bottom: 0;
        left: 0.38rem;
        .hideone{
          width:100%;
          line-height:0.6rem;
          font-size: 0.16rem;
          text-align: center;
          border-bottom:1px solid #eee;
        }
        a{
          font-size: 0.16rem;
          color:deepskyblue;
          line-height: 0.4rem;
          text-align: center;
        }
      }
    }
    .zzc{
      position: absolute;
      width:100%;
      height:100%;
      background:#000;
      z-index: 777;
      opacity: 0.2;
      top: 0;
      left:0;
      display: none;
    }
  }
</style>
