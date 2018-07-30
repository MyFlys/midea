<template>
  <div class="keyBody">
    <div class="inputBox">
      <input type="text" placeholder="请输入手机号" class="phoneNum">
      <div class="yanzheng">
        <input type="text" class="psw" placeholder="验证码">
        <div class="get">
          <a href="javascript:;">获取验证码</a>
        </div>
      </div>

    </div>
    <div class="button">
      <router-link  to="/Mysql" class="btn login">登录</router-link>
      <a href="javascript:;" class="btn register">注册</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "keyLogin"
    }
</script>

<style scoped lang="scss">
  .keyBody{
    .inputBox{
      overflow:hidden;
      background: #fff;
      border-bottom:1px solid #e3e3e3;
      input{
        outline:none;
        height: 0.42rem;
      }
      .phoneNum{
        font-size:0.14rem;
        display: block;
        width: 3.5rem;
        border:none;
        border-bottom:1px solid #e3e3e3;
        margin-left: 0.25rem;
      }
      .yanzheng{
        overflow:hidden;
        .psw{
          float: left;
          width: 65%;
          border: 0;
          border-right: 1px solid #e3e3e3;
          padding-left: 0.25rem;
          box-sizing: border-box;
        }
        .get{
          height:0.42rem;
          width: 35%;
          float:right;
          text-align: center;
          a{
            display: inline-block;
            line-height: 0.42rem;
            text-align: center;
            color:#0092d8;
          }
        }
      }
    }
    .button{
      margin-top:0.3rem;
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
