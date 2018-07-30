<template>
  <div class="outbody">
    <header>

      <router-link to="/order">
   <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
      </router-link>



      <h3>确认订单</h3>
      <p></p>
    </header>
    <div class="addrchoose">
      <router-link to="/order">
  <span>
          <i class="iconfont icon-jianzuo"></i>
        </span>
      </router-link>

      <h3>选择地址</h3>
      <p></p>
    </div>
    <router-link to="addressin">
      <div class="addbutton">
        <a href="javascript:;" class="button">
          添加新地址
        </a>
      </div>
    </router-link>

  </div>
</template>

<script>

    export default {
        name: "addressoutone",
      components:{


      }
    }
</script>

<style scoped lang="scss">
  .outbody{
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    background:#eee;
     header{
    width:100%;
    height:0.44rem;
    background:#0092d8;
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content: space-between;
  span{
    width:0.3rem;
    height:0.44rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content:center ;
    padding-left: 0.1rem;
  i{
    font-size: 0.22rem;
    color:#fff;
  }
  }
  h3{
    font-size: 0.2rem;
    color:#fff;

  }
  p{
    width:0.3rem;
    height:0.44rem;
  }

  }
    .addrchoose{
      width:100%;
      height:0.44rem;
      background:#fff;
      display: -webkit-flex;
      -webkit-align-items:center;
      -webkit-justify-content: space-between;
      span{
        width:0.3rem;
        height:0.44rem;
        display: -webkit-flex;
        -webkit-align-items:center;
        justify-content:center ;
        padding-left: 0.1rem;
        i{
          font-size: 0.24rem;
          color:#0092d8;
        }
      }
      h3{
        font-size: 0.2rem;
        color:#000;

      }
      p{
        width:0.3rem;
        height:0.44rem;
      }


    }
    .addbutton{
      display: -webkit-flex;
      -webkit-justify-content: center;
      margin-top: 0.2rem;
      .button{
        width:3rem;
        height:0.4rem;
        background:#0092d8;
        font-size: 0.2rem;
        line-height: 0.4rem;
        text-align: center;
        color:#fff;
        border:none;
      }
    }
  }
</style>
