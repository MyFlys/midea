<template>
    <header>
      <router-link to="/MdList" class="back">
        <i class="iconfont icon-jianzuo"></i>
      </router-link>
      <ul class="tab">
        <li v-for="tab in ttabs" :key="tab"  :class="['li',{active:ccurrentTab === tab}]" @click="ccurrentTab = tab">{{tab}}</li>
        <!--<li class="info"><a href="javascript:;">详情</a></li>-->
        <!--<li class="comment"><a href="javascript:;">评价</a></li>-->
      </ul>
      <a href="javascript:;" class="share">
        <i class="iconfont icon-Share"></i>
      </a>
    </header>
</template>

<script>
    export default {
      name: "MdDetailHeader",
      props: ["ttabs","ccurrentTab"],
      methods:{
        __tab(){
          $('.tab li').on('click',function(){
            $('.tab li').removeClass('active')
            $(this).addClass('active')
          })
        }
      },
      mounted(){
        // this.__tab()
      },

    }
</script>

<style scoped lang="scss">
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
</style>
