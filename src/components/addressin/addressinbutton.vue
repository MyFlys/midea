<template>
  <div class="addbutton">
    <a href="javascript:;" class="button">
     保存并使用
    </a>
  </div>
</template>

<script>
    export default {
        name: "addressinbutton",
      methods:{

      }
    }
</script>

<style scoped lang="scss">
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

</style>
