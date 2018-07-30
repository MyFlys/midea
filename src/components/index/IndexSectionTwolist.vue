<template>
    <li>
        <a href="javascript:;">
            <img :src="tttList.img" alt="">
        </a>
    </li>
</template>

<script>
 export default {
    data () {
        return {

        }
    },
   components: {

   },
   props:{
       tttList:{
           default:[]
       }
   }
 }
</script>

<style scoped lang="scss">
    li{
        width: 50%;
        height: 1.08rem;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        a{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    li:nth-child(2n){
        border-right: none;
    }
</style>
