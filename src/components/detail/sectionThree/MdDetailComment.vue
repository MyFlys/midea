<template>

  <section>

    <div class="star">
      <h3>总体评分</h3>
      <i class="iconfont icon-demo05"></i>
      <i class="iconfont icon-demo05"></i>
      <i class="iconfont icon-demo05"></i>
      <i class="iconfont icon-demo05"></i>
      <i class="iconfont icon-demo05"></i>
    </div>

    <div class="proTag">
      <h3>用户印象</h3>
      <span v-for="p in list.comList.protags">{{p.tag}}<b>({{p.tagNum}})</b></span>

    </div>

    <div class="proComment">
      <h3>商品评价</h3>
      <div class="commentCon" v-for="n in list.comList.comment">
        <div class="proUser">
          <div class="user">
            <img :src="n.userImg" alt="">
            <span>{{n.user}}</span>
          </div>
          <div class="time">
            <i class="iconfont icon-jing"></i>
            <span>{{n.time}}</span>
          </div>
        </div>
        <p class="comment">{{n.content}}</p>
        <p class="reply">
          {{n.reply}}
        </p>
        <div class="zan">
          <i class="iconfont icon-zan"></i>
          <span>{{n.zan}}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "MdDetailComment",
      data(){
        return{
          // protags:[
          //   {
          //     tag:"机器颜值高",
          //     tagNum:58
          //   },
          //   {
          //     tag:"服务态度好",
          //     tagNum:54
          //   },
          //   {
          //     tag:"制冷效果好",
          //     tagNum:43
          //   },
          //   {
          //     tag:"服务态度好/及时",
          //     tagNum:35
          //   },
          //   {
          //     tag:"物流快",
          //     tagNum:34
          //   },
          //   {
          //     tag:"款式好",
          //     tagNum:13
          //   },
          //   {
          //     tag:"客服态度好/回复快",
          //     tagNum:9
          //   },
          //   {
          //     tag:"空调看起来",
          //     tagNum:9
          //   },
          //   {
          //     tag:"快递很快",
          //     tagNum:6
          //   },
          //   {
          //     tag:"技术专业",
          //     tagNum:4
          //   },
          //   {
          //     tag:"价格实惠/物超所值",
          //     tagNum:3
          //   },
          //   {
          //     tag:"噪音小",
          //     tagNum:2
          //   },
          //   {
          //     tag:"发货快",
          //     tagNum:2
          //   },
          //   {
          //     tag:"使用方便/简单",
          //     tagNum:1
          //   },
          //
          // ],
          // comment:[
          //   {userImg:'../../../../static/img/h5_avator.png' ,user:'木***钱' ,time:'2018-04-07',content:'美的不错？',
          //     reply:'[官方回复]非常感谢您对美的的肯定与认可，美的店铺一直坚持以品质为先，为的就是让更多的用户收到满意的宝贝；看到您的评价，我们非常开心的呢，希望我们宝贝能给您和您的家人带来好的运气。这宝贝圆柱体机身，安放更随意；智能变频；WIFI智能；高频速冷热；智能APP云控制；优质ABS材质；高密度滤网。期待着您下次的光临，祝您生活愉快~~' ,zan:"12"},
          //   {userImg:'../../../../static/img/h5_avator.png' ,user:'6***7' ,time:'2018-03-19',content:'师傅装了很久，真的很有耐心还没用，夏天看质量 ',
          //     reply:'[官方回复]有些宝贝，用过才知道，我们由衷的希望您在我们这里的每一次购物都是一种享受。宝贝360度欧洲圆形美学，Vled隐藏显示，美观大方，高频57HZ速冷暖，让您舒适不等待，祝您使用愉快~',zan:"3"},
          //   {userImg:'../../../../static/img/userImg02.jpg' ,user:'6***0' ,time:'2016-04-07',content:'安装师傅服务态度好,安装速度快,安装的很到位 ',
          //     reply:'',zan:"0"},
          //   {userImg:'../../../../static/img/h5_avator.png' ,user:'张***' ,time:'2017-08-16',content:'好，制冷快，安装师傅非常好服务一流。',
          //     reply:' [官方回复]感谢您的支持与赞美，很高兴您是如此的喜欢。美的产品不管是从包装到服务，尽量每个细节都做到最好，每件宝贝都是经过精心设计，用心制造而出，每次服务都是诚心诚意，只为让拥有它的您收获一份开心和满意，祝您购物愉快！',zan:"3"},
          // ]
        }
      },
      props:["list"],
      components:{
      }
    }
</script>

<style scoped lang="scss">
section{

  h3{
    background: #fff;
    width: 100%;
    font-size: 0.14rem;
  }
  .star{
    background: #fff;
    display: -webkit-flex;
    flex-wrap: wrap;
    padding: 0.25rem 0.15rem 0.20rem ;
    i{
      font-size:0.25rem;
    }
    .iconfont{
      color:red;
      display: block;
    }
  }
  .proTag{
    background: #fff;
    padding:0.1rem 0.15rem ;
    display:-webkit-flex;
    flex-wrap: wrap;
    span{
      display: block;
      font-size: 0.12rem;
      color: #333;
      border-radius: 0.04rem;
      -webkit-border-radius: 0.04rem;
      background: #ebfcf1;
      border: 1px solid #23d75f;
      height: 0.24rem;
      line-height: 0.24rem;
      vertical-align: middle;
      padding: 0 0.08rem;
      margin: 0.1rem 0.1rem 0 0;
    }
  }
  .proComment{

    font-size: 0.14rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 0.1rem;
    h3{
      padding: 0 0.15rem 0.10rem;
      border-bottom: 1px solid #eee;
    }
    .commentCon{
      padding: 0.1rem 0.15rem 0.3rem;
      background: #fff;
      margin-bottom:0.1rem;
      .proUser{
        display: -webkit-flex;
        justify-content: space-between;
        .user{
          img{
            width: 0.32rem;
            height: 0.32rem;
            float:left;
            border-radius:50%;
          }
          span{
            height:0.32rem;
            line-height:0.32rem;
            padding-left:0.15rem;

          }
        }
        .time{
          height:0.32rem;
          line-height:0.32rem;

          i{
            float: left;
            color:#0092d8;
          }
          span{
            color:#ccc;
            margin-left:0.1rem;
          }
        }
      }
      .comment{
        color:#747474;
        padding:0.15rem 0;
        font-size:0.12rem;
      }
    }
    .reply{
      margin-bottom: 0.05rem;
      word-break: break-all;
      color: #af824d;
    }
    .zan{
      display: inline-block;
      padding: 0 0.1rem;
      height:0.23rem;
      line-height: 0.23rem;
      border: 1px solid #e6e6e6;
      border-radius: 0.05rem;
      color:#999;
      i{
        display: inline-block;
      }
    }

  }
}
</style>
