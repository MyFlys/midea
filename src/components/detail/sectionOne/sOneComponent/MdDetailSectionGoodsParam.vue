<template>

  <div class="mod_detail_info_header product_param" v-if="lists.param">
    <div class="detail_info_line detail_off J_param">
      <h3>产品参数</h3>
      <i class="iconfont icon-zhankai1"></i>
    </div>
    <div class="cont detail_switch dispear"  >
      <div class="detail_info_wrap">
        <div class="spec_wrap">
          <h4>产品信息</h4>
          <table class="table">
            <tr><th>品牌</th><td>{{lists.param.brand}}</td></tr>
            <tr><th>颜色</th><td>{{lists.param.color}}</td></tr>
            <tr><th>上市日期</th><td>{{lists.param.date}}</td></tr>
            <tr><th>产品型号</th><td>{{lists.param.type}}</td></tr>
            <tr><th>电源电压（V）</th><td>{{lists.param.v}}</td></tr>
            <tr><th>额定功率（W）</th><td>{{lists.param.p}}</td></tr>
          </table>
        </div>

        <div class="spec_wrap">
          <h4>类目信息</h4>
          <table class="table">
            <tr><th>室内机产品型号</th><td>{{lists.param.inType}}</td></tr>
            <tr><th>室内机产品销售码</th><td>{{lists.param.inCode}}</td></tr>
            <tr><th>室外机产品型号</th><td>KFR-51W/BP2N1-B06</td></tr>
            <tr><th>室外机产品销售码</th><td>31022216001179</td></tr>
            <tr><th>空调类型</th><td>落地式         </td></tr>
            <tr><th>冷暖类型</th><td>冷暖</td></tr>
            <tr><th>空调技术</th><td>变频</td></tr>
            <tr><th>能效等级</th><td>二级</td></tr>
            <tr><th>室外机外形尺寸(宽)(单位：mm)</th><td>807</td></tr>
            <tr><th>室外机外形尺寸(宽/含阀体)(单位：mm)</th><td>857</td></tr>
            <tr><th>室外机外形尺寸(高)(单位：mm)</th><td>555</td></tr>
            <tr><th>室外机外形尺寸(深)(单位：mm)</th><td>328</td></tr>
            <tr><th>室外机包装尺寸(宽)(单位：mm)</th><td>910</td></tr>
            <tr><th>室外机包装尺寸(高)(单位：mm)</th><td>630</td></tr>
            <tr><th>室外机包装尺寸(深)(单位：mm)</th><td>420</td></tr>
            <tr><th>净重量(室外机)(单位：kg)</th><td>38</td></tr>
            <tr><th>空调匹数</th><td>2匹</td></tr>
            <tr><th>制冷适用面积（m2）</th><td>23~34</td></tr>
            <tr><th>制热适用面积（m2）</th><td>27~36</td></tr>
            <tr><th>额定制冷功率（W）</th><td>1520</td></tr>
            <tr><th>额定制热功率（W）</th><td>2120</td></tr>
            <tr><th>循环风量（m3/h）</th><td>1000</td></tr>
            <tr><th>室内机低风挡噪音（dB）</th><td>22</td></tr>
            <tr><th>室内机高风挡噪音（dB）</th><td>38</td></tr>
            <tr><th>室外机低风挡噪音（dB）</th><td>47</td></tr>
            <tr><th>室外机高风挡噪音（dB）</th><td>54</td></tr>
            <tr><th>电辅助加热输入功率（W）</th><td>2200</td></tr>
            <tr><th>变频机能效比（APF）</th><td>3.90</td></tr>
            <tr><th>额定制冷量（w）</th><td>5100</td></tr>
            <tr><th>额定制热量（w）</th><td>7100</td></tr>
            <tr><th>冷媒类型</th><td>R410A</td></tr>
          </table>
        </div>
        <div class="spec_wrap">
          <h4>包装信息</h4>
          <table class="table">
            <tr><th>产品尺寸(mm)：</th><td>长380x宽380x高1775</td></tr>
            <tr><th>产品净重(kg)：</th><td>29</td></tr>
            <tr><th>包装尺寸(mm)：</th><td>长490x宽510x高2000</td></tr>
            <tr><th>包装重量(kg)：</th><td>44</td></tr>
            <tr><th>包装清单：</th><td>遥控器*1，7号电池*2,连接管*1，包扎带*2，密封胶泥*1，电缆线*1，排水管*1，隔热材料*2，墙孔挡板*1，排水接头*1，排水接头密封圈*1，使用安装说明书*1，窗帘支架*4，开关*1</td></tr>                                </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MdDetailSectionGoodsParam",
      props:["lists"],
      methods:{
          __xiala(){
            $('.product_param .detail_info_line').on("click",function(){
              // console.log(111)
              $(this).children('i').toggleClass('icon-zhankai1').toggleClass('icon-shouqi_m')
              $(this).next().toggleClass('dispear')
            })
          }
      },
      updated(){
        this.__xiala()
      }
    }
</script>

<style  lang="scss">
  .dispear{
    display: none;
  }
  .mod_detail_info_header{
    font-size:0.12rem;
    background: #fff;
    margin-bottom:0.1rem;
    .detail_info_line{
      background: #fff;
      padding:0.12rem 0.15rem;
      display: -webkit-flex;
      justify-content: space-between;
      color:#333;
      border-bottom: 1px solid #eee;
    }
    .cont{
      padding:0 0.15rem;
      .detail_info_wrap{

        .spec_wrap{
          h4{
            height: 0.52rem;
            line-height: 0.52rem;
            font-size: 0.14rem;
            color: #999;
          }
          .table{
            font-size: 0.12rem;
            border-bottom: 1px solid #eee;
            width: 100%;
            th{
              width: 1.1rem;
              color:#828282;
              text-align:left;
              font-weight: 100;
              height:0.28rem;
            }
            td{
              height:0.28rem;
              color:#333;
            }
          }

        }

      }
    }
  }
</style>
