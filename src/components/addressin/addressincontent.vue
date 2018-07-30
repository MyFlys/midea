<template>
    <div class="addrcontent">
        <div class="person">
            <div class="personleft">
              <label class="label_one">收货人</label>
            </div>
          <div class="personright">
            <input type="text" placeholder="请输入收货人姓名" id="ps">
          </div>
        </div>
        <div class="phone">
        <div class="phoneleft">
          <label class="label_one">联系电话</label>
        </div>
        <div class="phoneright">
          <input type="number" placeholder="请输入收货人电话"/>
        </div>
      </div>
      <div id="example" class="addrbox">
        <div class="one">
          <div class="provleft">
            <label class="label_one">省/直辖市</label>
          </div>
          <div class="provright">
            <select v-model="selectVal.prov">
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
            <select v-model="selectVal.ci">
              <option v-for="c in selectVal .prov.city" :value="c">
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
            <select v-model="selectVal.qu">
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
          <input type="text" placeholder="请输入收货人详细地址">
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      name: "addressincontent",
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
      components: {},
      methods: {
        fetchCartsDate() {
          fetch('http://localhost:8082/addr')
            .then(response => response.json())
            .then(data => {
              this.areaList = data;
              console.log(data);
            })
        },

      },
      mounted() {
        this.fetchCartsDate();
      },
    }


</script>

<style scoped lang="scss">
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

            background: url("../../../static/img/jianyou.jpg") no-repeat scroll right center transparent;

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

            background: url("../../../static/img/jianyou.jpg") no-repeat scroll right center transparent;

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
            background: url("../../../static/img/jianyou.jpg") no-repeat scroll right center transparent;
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

</style>
