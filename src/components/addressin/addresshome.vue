<template>
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
</template>

<script>
    export default {
        name: "addresshome",
        data(){
        return{
          //定义areaList接收后台数据，因为是三级结构，所以先遍历出第一层，
          //拿到第一层，
          areaList:'',
          selectVal:{
            prov:"",
            ci:"",
            qu:""
          },
        }
      },
        methods:{
          fetchCartsDate() {
            fetch('http://localhost:8082/addr')
              .then(response => response.json())
              .then(data => {
                this.areaList = data;
                console.log(data);
              })
          }
        },
         mounted(){
        this.fetchCartsDate();
      },
    }
</script>

<style scoped lang="scss">
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
</style>
