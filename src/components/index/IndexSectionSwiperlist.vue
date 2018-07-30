<template>

  <div class="swiper-slide">
    <a href="javascript:;"><img :src="sssList.img" alt=""> </a>
  </div>

</template>

<script>
import Swiper from 'swiper'
 export default {
    data () {
        return {

        }
    },   
   props:{
     sssList:{
       type:Object,
        default:{}
     }
   },
   components: {

   }
 }
</script>

<style scoped lang="scss">
.swiper-slide{
  a{
    img{
        width: 100%;
        height: 1.75rem;
    }
  }
    
}

 
</style>
