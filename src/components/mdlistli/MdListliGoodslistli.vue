<template>
  <router-link :to="{ path: '/MideaDetail/MdDetailSection', query: { dataObj: item ,id:item.id}}" tag="li" class="hotgoodslistli">
  <!--<li class="hotgoodslistli">-->
    <img :src="item.img" class="hgimg">
    <div class="hotgoodsliright">
      <h3 class="hgtitle">{{item.miaoshu}}</h3>
      <p class="hgp">{{item.chanshu}}</p>
      <div class="hotgoodsgift">
        <span class="hggyellow" v-for="(t,index) in item.youhui">{{item.youhui[index]}}</span>
        <span class="hgggreen" :style=item.zengpins>{{item.zengpin}}</span>
      </div>
      <div class="hotgoodsboon">
        <span class="hgprice">{{item.price}}</span>
        <span class="hgoprice">{{item.yuanprice}}</span>
        <span class="hgcomment">{{item.pinglun}}</span>
      </div>
    </div>
  <!--</li>-->
  </router-link>

</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        item:{
        }
      }
    }
</script>

<style scoped>
  .hotgoodslistli{
    border-top: 1px solid #eeeeee;
    display: -webkit-flex;
    justify-content: space-around;
    padding:0.04rem 0rem 0.1rem 0rem;
  }
  .hotgoodsliright{
    width: 2.26rem;
    display: -webkit-flex;
    flex-direction: column;
  }
  .hgimg{
    width: 1.2rem;
    height:1.2rem;
  }
  .hgtitle{
    font-size:0.13rem;
    color:#333333;
    margin-top: 0.1rem;
    font-weight: 400;
    line-height: 0.2rem;
  }
  .hgtitle span{
    margin-right: 0.05rem;
  }
  .hgp{
    font-size: 0.12rem;
    color:#767676;
    line-height: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .hotgoodsgift{
    padding:0.03rem 0rem;
    display: -webkit-flex;
  }
  .hotgoodsgift span{
    font-size:0.1rem;
    padding:0.03rem 0.04rem;
    color:#fffffe;
    display: block;
    margin-right:0.04rem;
  }
  .hggyellow{
    background: #ff6600;
  }
  .hgggreen{
    background: #1bce8d;
  }
  .hotgoodsboon{
    padding-top: 0.08rem;
    display: -webkit-flex;
    position: relative;
  }
  .hotgoodsboon span{
    display: block;
  }
  .hotgoodsboon .hgprice{
    color:#fc4600;
    font-size:0.12rem;
    margin-right:0.07rem;
  }
  .hgoprice{
    color:#999999;
    font-size:0.08rem;
    text-decoration: line-through;
  }
  .hgcomment {
    color: #909090;
    font-size: 0.11rem;
    position: absolute;
    right: 0;
  }
</style>
