<template>
    <div class="loginBody">
      <nav>
        <a href="javascript:void(0);" class="back"><i class="iconfont icon-jianzuo"></i></a>
        <ul class="tab">
          <li><a href="javascript:void(0);" @click="toggleTabs(CodeLogin)" :class="{active:currentView == 'CodeLogin'}">{{CodeLogin.code}}</a></li>
          <li><a href="javascript:void(0);" @click="toggleTabs(KeyLogin)" :class="{active:currentView == 'KeyLogin'}">{{KeyLogin.key}}</a></li>
        </ul>
      </nav>
　　　<component :is="currentView" keep-alive></component>
    </div>
</template>

<script>
  import CodeLogin from  "../components/login/CodeLogin";
  import KeyLogin from  "../components/login/KeyLogin";
    export default {
      name: "MdLogin",
      components:{
        CodeLogin,
        KeyLogin
      },
      data () {
        return {
          CodeLogin: {name:'CodeLogin',code:'账号密码登录'},
          KeyLogin: {name:'KeyLogin',key:'短信验证码登录'}, //导航栏文本2
          currentView: 'CodeLogin' //默认选中first子组件
        };
      },
      methods: {
        toggleTabs (tabText) {
            this.currentView = tabText.name;
        }
      }
    }
</script>

<style scoped lang="scss">
  .loginBody{
    height:100%;
    font-size: 0.16rem;
    background: #eef3fa;
    nav{
      overflow: hidden;
      line-height:0.44rem;
      padding:0 0.15rem;
      border-bottom:1px solid #e3e3e3;
      background: #fff;
      .back{
        float:left;
        i{
          font-size: 0.25rem;
          color:#0092d8;
        }

      }
      .tab{
        display: -webkit-flex;
        li{
          /*float:left;*/
          font-size:0.14rem;
          width: 50%;
          text-align:center;
          a{
            display: inline-block;
            color: #000;
          }
          .active{
            color:#0092d8;
            border-bottom: 2px solid #0092d8;
          }
        }

      }

    }
  }
</style>
