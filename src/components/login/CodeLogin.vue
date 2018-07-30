<template>
  <div class="codeBody">
    <div class="inputBox">
      <input type="text" placeholder="请输入手机号">
      <input type="password" class="psw" placeholder="密码">
    </div>
    <a href="javascript:;" class="findback">找回密码</a>
    <div class="button">
      <router-link  to="/Mysql" class="btn login">登录</router-link>
      <a href="javascript:;" class="btn register">注册</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CodeLogin"
    }
</script>

<style scoped lang="scss">
  .codeBody{
    .inputBox{
      overflow:hidden;
      background: #fff;
      input{
        font-size:0.14rem;
        display: block;
        width: 3.5rem;
        height: 0.42rem;
        float: right;
        border:none;
        border-bottom:1px solid #e3e3e3;
        outline:none;
      }
    }
    .findback{
      display: inline-block;
      float: right;
      color: #000;
      font-size: 0.14rem;
      margin: 0.1rem;
    }
    .button{
      margin-top:0.4rem;
      .btn{
        width: 95%;
        height: 0.5rem;
        margin: 0 auto;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.18rem;
        color:#000;
        margin-top:0.1rem;
      }
      .login{
        color: #fff;
        background: #0086E6;
      }
      .register{
        border:1px solid #999;
        background: #fff;
      }
    }
  }
</style>
