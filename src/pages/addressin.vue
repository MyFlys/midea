<template>
  <div class="addressin">
    <header>
      <router-link to="addressoutone">

       <span>
      <i class="iconfont icon-jianzuo"></i>
    </span>
      </router-link>

      <h3>确认订单</h3>
      <p></p>
    </header>
    <div class="addrchoose">
      <router-link to="addressoutone">
       <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
      </router-link>

      <h3>选择地址</h3>
      <p></p>
    </div>
    <div class="addrcontent">
      <div class="person">
        <div class="personleft">
          <label class="label_one">收货人</label>
        </div>
        <div class="personright">
          <input type="text" placeholder="请输入收货人姓名" id="psname">
        </div>
      </div>
      <div class="phone">
        <div class="phoneleft">
          <label class="label_one">联系电话</label>
        </div>
        <div class="phoneright">
          <input type="number" placeholder="请输入收货人电话" id="psphone"/>
        </div>
      </div>
      <div id="example" class="addrbox">
        <div class="one">
          <div class="provleft">
            <label class="label_one">省/直辖市</label>
          </div>
          <div class="provright">
            <select v-model="selectVal.prov" id="pro">
              <option v-for="p in areaList" :value="p">
                {{p.name}}
              </option>

            </select>
          </div>
        </div>
        <div class="two">
          <div class="twoleft">
            <label class="label_one">市</label>
          </div>
          <div class="tworight">
            <select v-model="selectVal.ci" id="pci">
              <option v-for="c in selectVal .prov.city" :value="c" >
                {{c.name}}
              </option>
            </select>
          </div>
        </div>
        <div class="three">
          <div class="threeleft">
            <label class="label_one">区/县</label>
          </div>
          <div class="threeright">
            <select v-model="selectVal.qu" id="pqu">
              <option v-for="q in selectVal.ci.area" :value="q">
                {{q}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="addrhome">
        <div class="addrhomeleft">
          <label class="label_one">详细地址</label>
        </div>
        <div class="addrhomeright">
          <input type="text" placeholder="请输入收货人详细地址" id="psaddr">
        </div>
      </div>
    </div>





    <div class="addbutton" id="btn_getNum">
      <a href="javascript:;" class="button" @click="disp">
        保存并使用
      </a>
    </div>
    <div class="hide" id="hides">
      <div class="hidea" id="hideaa">
        <p class="hideone" id="hideoness"></p>
        <a href="javascript:;" class="aaa"  @click="disb">确认</a>
      </div>
    </div>
    <div class="zzc" id="zz">

    </div>
  </div>
</template>

<script>

  // import addressinheader from "../components/addressin/addressinheader"
  // import addressinchoose from "../components/addressin/addressinchoose"
  import addressincontent from "../components/addressin/addressincontent"

    export default {
        name: "addressin",
      data() {
        return {
          //定义areaList接收后台数据，因为是三级结构，所以先遍历出第一层，
          //拿到第一层，
          areaList: '',
          selectVal: {
            prov: "",
            ci: "",
            qu: ""
          },
        }
      },
      components:{
        // addressinheader,
        // addressinchoose,
        // addressincontent,

      },
      methods:{
        fetchCartsDate() {
          fetch('http://localhost:8082/addr')
            .then(response => response.json())
            .then(data => {
              this.areaList = data;
              console.log(data);
            })
        },
          disp(){
                var pname=$("#psname").val()
                var pphone=$("#psphone").val()
                var ppaddr=$("#psaddr").val()
                var pprov=$("#pro").val()
                var pcity=$("#pci").val()
              var pqus=$("#pqu").val()
            var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            var regChina = /^[\u2E80-\u9FFF]+$/;



            if ( pname === "" || pname === null){
            }else if (pphone ==="" || pphone===null){
              $("#hideoness").html("收货人电话不能为空")
            } else if(ppaddr==="" || ppaddr===null){
              $("#hideoness").html("收货人具体地址不能为空")
            }else if(pprov==="" || pprov===null){
              $("#hideoness").html("请选择地址信息")
            }else if(!(reg.test(pphone))) {
              $("#hideoness").html("手机号码格式有误！")
            }else if(!(regChina.test(pname))){
              $("#hideoness").html("必须为中文")
            }else if(!(pname==="") && !(pphone==="") && !(pprov===null) && !(ppaddr===null) && !(pcity===null) && !(pqus===null)){
              $("#hideoness").html("保存成功")
              $(".aaa").click(function(){
                window.location.href="http://localhost:8080/#/order";
              })
            }

            $(".hide").css("display","block")
            $(".zzc").css("display","block")
            var str=this.selectVal.prov.name + this.selectVal.ci.name+this.selectVal.qu+ppaddr
            console.log(this.selectVal.prov.name + this.selectVal.ci.name+this.selectVal.qu+ppaddr);
            window.localStorage.setItem("n",str);
          },




        disb(){
          $(".hide").css("display","none")
          $(".zzc").css("display","none")
        }
          },
      mounted() {
        this.fetchCartsDate();
      },

    }
</script>

<style scoped lang="scss">
  .addressin{
    width: 100%;
    background:#eee;
    header{
      width:100%;
      height:0.44rem;
      background:#0092d8;
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
          color:#fff;
        }
      }
      h3{
        font-size: 0.2rem;
        color:#fff;

      }
      p{
        width:0.3rem;
        height:0.44rem;
      }

    }
    .addrchoose{
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
          font-size: 0.24rem;
          color:#0092d8;
        }
      }
      h3{
        font-size: 0.2rem;
        color:#000;
        font-weight: normal;

      }
      p{
        width:0.3rem;
        height:0.44rem;
      }


    }


    .addrcontent{
      margin-top:0.1rem;
      background:#fff;
      .person{
        width:100%;
        height:0.5rem;
        /*background:pink;*/
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .personleft{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .personright{
          height:0.25rem;
          /*background: greenyellow;*/
          display: -webkit-flex;
          margin-left: 0.1rem;

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
      .phone{
        width:100%;
        height:0.5rem;
        /*background:pink;*/
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .phoneleft{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .phoneright{
          height:0.25rem;
          /*background: greenyellow;*/
          display: -webkit-flex;
          margin-left: 0.1rem;

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
      .addrbox {
        height: 1.9rem;
        width: 100%;
        .one {
          width: 100%;
          height: 0.6rem;

          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: flex-start;
          border-bottom: 1px solid #d9d9d9;
          .provleft {
            height: 0.6rem;
            /*background: cornsilk;*/
            display: -webkit-flex;
            margin-left: 0.1rem;
            .label_one {
              line-height: 0.6rem;
              font-size: 0.16rem;
            }
          }
          .provright {
            height: 0.6rem;
            display: -webkit-flex;
            margin-left: 0.1rem;
            select {
              width: 2.7rem;
              height: 0.6rem;
              border: none;
              outline: none;
              font-size: 0.16rem;
              appearance: none;
              -moz-appearance: none;

              -webkit-appearance: none;

              background: url("../../static/img/jianyou.jpg") no-repeat scroll right center transparent;

            }
          }
        }
        .two {
          width: 100%;
          height: 0.6rem;

          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: flex-start;
          border-bottom: 1px solid #d9d9d9;
          .twoleft {
            height: 0.6rem;
            /*background: cornsilk;*/
            display: -webkit-flex;
            margin-left: 0.1rem;
            .label_one {
              line-height: 0.6rem;
              font-size: 0.16rem;
            }
          }
          .tworight {
            height: 0.6rem;
            display: -webkit-flex;
            margin-left: 0.1rem;
            select {
              width: 3.25rem;
              height: 0.6rem;
              border: none;
              outline: none;
              font-size: 0.16rem;
              appearance: none;
              -moz-appearance: none;

              -webkit-appearance: none;

              background: url("../../static/img/jianyou.jpg") no-repeat scroll right center transparent;

            }
          }
        }
        .three{
          width: 100%;
          height: 0.6rem;

          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: flex-start;
          border-bottom: 1px solid #d9d9d9;
          .threeleft {
            height: 0.6rem;

            display: -webkit-flex;
            margin-left: 0.1rem;
            .label_one {
              line-height: 0.6rem;
              font-size: 0.16rem;
            }
          }
          .threeright {
            height: 0.6rem;
            display: -webkit-flex;
            margin-left: 0.1rem;
            select {
              width: 3rem;
              height: 0.6rem;
              border: none;
              outline: none;
              font-size: 0.16rem;
              appearance: none;
              -moz-appearance: none;
              -webkit-appearance: none;
              background: url("../../static/img/jianyou.jpg") no-repeat scroll right center transparent;
            }
          }
        }
      }

      .addrhome{
        width:100%;
        height:0.5rem;
        /*background:pink;*/
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content:flex-start;
        /*padding:0 0.15rem;*/
        border-bottom:1px solid #d9d9d9;

        .addrhomeleft{
          height:0.25rem;
          /*background: cornsilk;*/
          display: -webkit-flex;
          padding-left: 0.1rem;


          .label_one{
            line-height:0.25rem;
            font-size: 0.16rem;
          }

        }
        .addrhomeright{
          height:0.25rem;
          /*background: greenyellow;*/
          display: -webkit-flex;
          margin-left: 0.1rem;

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
        top: 2rem;
        right: 0;
        bottom: 0;
        left: 0.38rem;
        .hideone{
          width:100%;
          height: 0.6rem;
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
