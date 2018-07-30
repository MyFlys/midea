<template>
  <div class="detailBody">
    <header>
        <router-link to="/Mdlist" tag="a" class="back" >
        <i class="iconfont icon-jianzuo"></i>
        </router-link>

      <ul class="tab">
        <li :class="['li',{active:1 == tab}]" @click="goback('1','MdDetailSection')">商品</li>
        <li :class="['li',{active:2 == tab}]" @click="goback('2','MdDetailSectionList')">详情</li>
        <li :class="['li',{active:3 == tab}]" @click="goback('3','MdDetailComment')">评价</li>
      </ul>
      <a href="javascript:;" class="share">
        <i class="iconfont icon-Share"></i>
      </a>
    </header>

    <div class="main">
      <router-view :list="DetailData" :nums="num" :addNum="addNum" :minNum="minNum"></router-view>
    </div>
    <md-detail-footer :num="num"></md-detail-footer>
    <div class="mask">
      <div class="pop">
        <p>添加成功!</p>
        <div class="select">
          <router-link to="MdDetailSection" class="continue">继续购物</router-link>
          <router-link to="Carts"  >
            <a href="" class="account" @click="addCart">结算</a>
          </router-link>
          <!--<a href="javascript:;" class="account"></a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MdList from "../apis/DataServiceApi"
  import MdDetailFooter from '../components/detail/public/MdDetailFooter'

  export default {
    name: "MideaDetail",
    components:{
      MdDetailFooter
    },
    data(){
      return{
        currentTab: '商品',
        tab:1,
        tabs:['商品','详情','评价'],
        DetailData:{},
        num:1
      }
    },
    methods:{
      goback(a,b){
        this.tab =a;
        this.$router.push({name:b});
      },
       __maskShow(){
         $('.addcar').on('click',function(){
           $('.mask').fadeIn()
         })
       },
       __maskClear(){
         $('.continue').on("click",function(){
           $('.mask').fadeOut()
         })
         $('.account').on("click",function(){
           $('.mask').fadeOut()
         })
       },
      __initPage(){
          MdList.getDetail( this.$route.query.id ,(data)=>{
            this.DetailData = data;
          console.log(this.$route.query.id)
          } )

      },
      minNum(){
        if( this.DetailData.info.qal <=1){
          this.num=this.DetailData.info.qal=1;
        }else {
          this.num= -- this.DetailData.info.qal
        }

      },
      addNum(){
        this.num= ++this.DetailData.info.qal;
      },
      addCart(){
        this.DetailData.info.qal= this.num;
        var ss=JSON.stringify(this.DetailData.info)
        console.log(ss)
        window.localStorage.setItem(('good'+this.DetailData.id),ss)
      }
    },
    created(){
//      this.__initPage()
    },
    mounted(){
        this.__maskShow(),
        this.__maskClear()
        this.__initPage()

    }
  }
</script>

<style scoped lang="scss">
.detailBody{
  height:100%;
  display: -webkit-flex;
  flex-direction:column;
  header{
    height: 0.44rem;
    /*background: hotpink;*/
    font-size: 0.15rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    i{
      font-size:0.24rem;
    }
    .back{
      color:#139adb;
      padding-left:0.1rem;
    }
    .tab{
      height:100%;
      display: -webkit-flex;
      li{
        height:100%;
        line-height:0.44rem;
        margin:0 0.1rem;
        a{
          color:#999;
        }
      }
      .info{
        margin:0 0.15rem;
      }
      .active{
        color:#0093d5;
        border-bottom: 2px solid #0092d8;
        box-sizing: border-box;
      }
    }
    .share{
      color:#139adb;
      padding-right:0.15rem;
    }
  }
  .main{
    flex:1;
    overflow-x:hidden;
    overflow-y:scroll;
    background: #f4f4f4;
  }
  .mask{
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,.4);
    z-index: 1;
    .pop{
      width: 2.25rem;
      height: 1.28rem;
      background: #fff;
      border-radius: 0.1rem;
      position: absolute;
      left: 20%;
      top: 20%;
      z-index: 2;
      p{
        font-size: 0.15rem;
        text-align: center;
        height:0.8rem;
        line-height: 0.8rem;
        border-bottom:1px solid #eee;
      }
      .select{
        height: 0.48rem;
        a{
          width: 50%;
          border-top:1px solid #999;
          color:#008fdb;
          font-size: 0.15rem;
          float: left;
          text-align: center;
          height: 0.48rem;
          line-height: 0.48rem;
        }
        .continue{
          border-right:1px solid #999;
          box-sizing: border-box;
        }
        .account{
          width: 100%;
        }
      }
    }
  }
}
</style>
