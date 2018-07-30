<template>
  <div class="stampbody">
    <header>
      <router-link to="/order">
      <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
      </router-link>

      <h3>发票信息</h3>
      <p></p>
    </header>
    <div class="">
      <div class="stpc_one">
        <div class="stpcone_left">
          <label class="label_one">发票抬头</label>
        </div>
        <div class="stpcone_right">
          <input type="text" placeholder="请输入发票抬头" id="cdone">
        </div>
      </div>

      <div class="stpc_radio">
        <div class="radioleft">
          <input type="radio" name="radiobutton" value="radiobutton" checked/>
          <span>个人</span>
        </div>
        <div class="radioright">
          <input type="radio" name="radiobutton" value="radiobutton">
          <span>企业</span>
        </div>


      </div>

      <div class="stpc_two">
        <div class="stpctwo_left">
          <label class="label_one">发票抬头</label>
        </div>
        <div class="stpctwo_right">
        <span>
          商品明细
        </span>
        </div>
      </div>

      <div class="stpc_three">
        <div class="stpcthree_left">
          <label class="label_one">纳税人识别号</label>
        </div>
        <div class="stpcthree_right">
          <input type="number" placeholder="请输入纳税人识别号" id="cdtwo">
        </div>
      </div>
    </div>
    <div class="addbutton" @click="disp">
      <a href="javascript:;" class="button">
        确认
      </a>
    </div>
    <div class="hide" id="hides">
      <div class="hidea" id="hideaa">
        <p class="hideone" id="hideones">您的发票成功</p>
        <a href="javascript:;" class="aaa" @click="disb">确认</a>
      </div>
    </div>
    <div class="zzc" id="zz">

    </div>

  </div>
</template>

<script>

    export default {
        name: "stampbill",
      components:{

      },
    methods:{

      disp(){
        $(".hide").css("display","block")
        $(".zzc").css("display","block")

        var val = $('#cdone').val()
        var vals=$('#cdtwo').val()
        if (val==="" || val===null){
          $('#hideones').html("请输入发票抬头")
        }else if(vals===""|| vals===null){
          $('#hideones').html("请输入纳税人识别号")
        }else if(val==="123456" && vals==="123456"){
          $('#hideones').html("发票信息成功")
          $(".aaa").click(function () {
            window.location.href="./order.vue";
          })
        }else if(!(val==="123456") && vals==="123456"){
          $('#hideones').html("发票抬头信息不正确")
        }else if(!(vals==="123456") && val==="123456"){
          $('#hideones').html("纳税人识别号不正确")
        }else{
          $('#hideones').html("输入有误")
        }

      },
      disb(){
        $(".hide").css("display","none")
        $(".zzc").css("display","none")
      },

    }
    }
</script>

<style scoped lang="scss">
  .stampbody{
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

      .stpc_one{
        width:100%;
        height:0.5rem;
        background:#fff;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .stpcone_left{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .stpcone_right{
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
      .stpc_radio{
        width:100%;
        height:0.6rem;
        display: -webkit-flex;
        div{
          width:1rem;
          height:0.6rem;
          display: -webkit-flex;
          font-size: 0.2rem;
          -webkit-justify-content: center;
          -webkit-align-items: center;
          input{
            width:0.2rem;
            height:0.2rem;
          }
          span{
            display: block;
            margin-left: 0.1rem;
          }
        }

        .radioleft{
        width:1rem;
        height:0.6rem;
        display: -webkit-flex;
        font-size: 0.2rem;
        -webkit-justify-content: center;
        -webkit-align-items: center;
        input{
        width:0.2rem;
        height:0.2rem;

        }
        span{
        display: block;
        margin-left: 0.1rem;
        }
        }
        .radioright{
        width:1rem;
        height:0.6rem;
        display: -webkit-flex;
        font-size: 0.2rem;
        -webkit-justify-content: center;
        -webkit-align-items: center;
        input{
        width:0.2rem;
        height:0.2rem;

        }
        span{
        display: block;
        margin-left: 0.1rem;
        }
        }
      }
      .stpc_two{
        width:100%;
        height:0.5rem;
        background:#fff;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .stpctwo_left{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .stpctwo_right{
          height:0.25rem;
          /*background: greenyellow;*/
          display: -webkit-flex;
          margin-left: 0.2rem;
          span{
            font-size: 0.16rem;
            color:#bababa;
          }


        }
      }
      .stpc_three{
        width:100%;
        height:0.5rem;
        background:#fff;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .stpcthree_left{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .stpcthree_right{
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
