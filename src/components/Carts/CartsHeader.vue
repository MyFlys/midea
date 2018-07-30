<template>
    <Header>
        <div class="CartsBar">
          <i class="iconfont icon-jianzuo"></i>
          <h2>购物车</h2>
        </div>
    </Header>
</template>

<script type="text/ecmascript-6">

    export default {}
</script>

<style scoped lang="scss">
      Header{
          z-index: 2;
          position: fixed;
          width: 100%;
          height: 0.43rem;
          box-sizing: border-box;
          background: #fff;
          top:0;
          left: 0;
          .CartsBar{
              width: 100%;
              height: 0.43rem;
              box-sizing: border-box;
              padding-left:0.16rem ;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              i{
                  font-size: 0.26rem;
                  color: #0394d6;
              }
              h2{
                  font-weight: 200;
                  width: 3.1rem;
                  text-align: center;
              }
          }
      }
</style>
