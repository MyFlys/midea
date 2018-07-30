<template>
    <div class="imgList" :list="list">
      <img v-for="(p,index) in list.img" :src="p" ></img>
    </div>
</template>

<script>
    export default {
      name: "MdDetailSectionList",
      data(){
        return{
        }
      },
      props:["list"]
    }
</script>

<style scoped lang="scss">
.imgList{
  width: 100%;
  img{
    width:100% ;
  }
}
</style>
