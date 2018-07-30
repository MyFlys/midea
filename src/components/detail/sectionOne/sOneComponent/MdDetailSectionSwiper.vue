<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(p,index) in item.swiperImg">
        <img :src="p.img" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
      name: "MdDetailSectionSwiper",
      data(){
        return{
//          swiperImg:[
//            {"img":"../../../static/img/kongtiao01_640_640_50.jpg"},
//            {"img":"../../../static/img/kongtiao02_640_640_50.jpg"},
//            {"img":"../../../static/img/kongtiao03_640_640_50.jpg"},
//            {"img":"../../../static/img/kongtiao04_640_640_50.jpg"},
//            {"img":"../../../static/img/kongtiao05_640_640_50.jpg"}
//          ]
        }
      },
    props:["item"],
    created(){
        console.log(this.item)
    },
     updated(){
        console.log(this.item)
        var mySwiper = new Swiper ('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

        })
      }
    }
</script>

<style scoped lang="scss">
  .swiper-container{
    width: 100%;
    height:3.75rem;
  img{
    width: 100%;
    height: 3.75rem;
  }
  .swiper-pagination-bullets{

      bottom:0px;

  }
}

</style>
