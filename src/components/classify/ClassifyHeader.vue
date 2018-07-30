<template>
<div class="header">
	<span></span>
	<p>商品分类</p>
  <router-link to="/MdList" tag="a"><i class="iconfont icon-fangdajing"></i></router-link>
</div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .header{
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    padding-right: 0.20rem;
  	height: 8.5%;
  	width: 100%;
  	background: #0092d8;
  }
  p{
  	font-size: 0.18rem;
  	color:#ffffff;
  }
  a{
  	font-size: 0.27rem;
  	color:#ffffff;
  }
  a i{
    font-size: 0.27rem;
  }
</style>
