<template>
  <div class="mod_detail_info_header">
    <div class="detail_info_line detail_off J_param" mtag="30008.13.1" data-type="service">
      <h3>服务支持</h3>
      <!--                    <i class="icon_up"></i>-->
      <i class="iconfont icon-zhankai1"></i>
    </div>
    <div class="cont detail_switch dispear">
      <div class="spec_wrap " id="servicePic">
        <!-- 商城 & 分销 -->
        <div class="service_row color_gray">
          <h2>关于物流</h2>
          <p>1.用户付款后，无特殊情况订单在72小时内发货，到货时间请实时关注物流信息，以快递到达时间为准，如有赠品会另行发货，请知悉！</p>
          <p>2.预售等参加特殊活动的商品，由于订单量大，发货时间以各类活动详情规则为准。</p>
        </div>
        <div class="service_row color_gray">
          <h2>关于修改地址</h2>
          <p>1.订单审核之后不支持地址更改，<b>订单审核前，用户可以自己修改区（县）一级及以下的收货地址。</b></p>
        </div>
        <div class="service_row color_gray">
          <h2>关于发票与赠品</h2>
          <p>1.美的商城可开具电子发票(系统优先选择)或者纸质发票,用户下单购买时可选择发票类型。纸质发票默认为普通机打发票。</p>
          <p><b>2.电子发票在发货后即会开具并生成下载链接，用户可自行在订单详情页面下载电子发票版式文件。电子发票规则与税务机关监制的纸制裁增值税发票相同，可以作为报销和保修凭证使用；</b></p>
          <p>3.部分产品纸质发票可随货寄出，部分需另外邮寄，具体可联系客服咨询。</p>
          <p>4.发票抬头默认个人，如需更改发票抬头，请在订单确认页将发票信息，在发票抬头一栏填写所需的抬头；发票金额为商品实付交易金额。</p>
        </div>
        <div class="service_row color_blue">
          <h2>关于验货和收货</h2>
          <p>1.商品全部都是全新未开封，请在您签收商品时，核实产品型号信息与您订购的产品是否一致，<b>产品包装是否完好无损，如有问题请拍照后直接拒收，并及时联系美的商城在线客服。</b></p>
          <p>2.商品签收后，<b>请立即开箱验货，如有破损，请在签收后8小时内联系美的商城在线客服。</b>如未及时验收，视为此商品完好无损，不再以外观划伤、变形，凹坑、破损为由进行退换货；</p>
        </div>
        <div class="service_row color_gray">
          <h2>关于退换货</h2>
          <p><b>1.签收后7日内在不影响二次销售的情况下，可接受无理由退货，产品退回运费需用户承担。</b></p>
          <p>2.签收后15日内产品质量问题，可通过美的维修网点或者美的服务微信号联系在线客服，鉴定产品质量问题，并联系美的商城客服咨询退换货。</p>
          <p><b>3.如需要退货退款，产品、配件、纸质发票、赠品等需要一起寄回。</b></p>
          <p><b>4.如需要换货，产品、配件等需要一起寄回。</b></p>
          <p><b>4.已发货客户原因截单/拒收产生的物流费用需客户承担, 收费标准请参考美的官网【服务支持】的标准。</b></p>
        </div>
        <div class="service_row color_gray">
          <h2>关于安装和保修</h2>
          <p><b>1.商城购买的产品享受全国联保，部分产品享受免费安装服务，如需要额外辅材安装，则额外辅材费用不在免费范围内，需要客户自行承担，具体可联系客服咨询。</b></p>
          <p><b>2.如需要特殊环境安装作业，则需用户承担特殊环境安装费用，收费标准请参考美的官网服务与支持－服务收费标准；</b></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "MdDetailSectionGoodsService",
      methods:{
        __xiala(){
          $('.mod_detail_info_header .detail_info_line').on("click",function(){
            $(this).children('i').toggleClass('icon-zhankai1').toggleClass('icon-shouqi_m')
            $(this).next().toggleClass('dispear')
          })
        }
      },
      mounted(){
        this.__xiala()
      }
    }
</script>

<style scoped lang="scss">

  .dispear{
    display: none;
  }
  .cont{
    .spec_wrap{
      .service_row{
        h2{
          font-size: 0.14rem;
          line-height: 0.14rem;
          color: #000;
          margin-bottom: 0.12rem;
          font-weight: normal;
          margin-top:0.15rem;
        }
        p{
          font-size: 0.12rem;
          line-height: 0.16rem;
          margin-bottom: 0.08rem;

        }

      }
      .color_gray{
        color: #7e7e7e;
      }
      .color_blue{
        color:#0191d8;
      }

    }
  }
</style>
