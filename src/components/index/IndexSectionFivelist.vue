<template>
    <li>
        <span class="activity" :style=fififiList.disp>{{fififiList.dis}}</span>
        <a href="javascript:;">
            <img :src="fififiList.img" alt="">
            <p class="name">{{fififiList.title}}</p>
            <span>{{fififiList.price}}</span>
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
       fififiList:{
           default:[]
       }
   },
   methods:{
       
   }
 }
</script>

<style scoped lang="scss">
    li{
        width: 50%;
        // height: 2.67rem;
        position: relative;
        box-sizing: border-box;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
        .activity{  
            display:block;
            padding:0 0.1rem;
            font-size: 0.1rem;
            line-height: 0.25rem;
            color:#fff;
            background:#ff6600;
            position: absolute;
            top: 0;
            right: 0;
        }
        a{
            padding: 0.18rem 0.17rem 0.14rem;
            // text-align: center;
            // box-sizing: border-box;
            img{
                width: 1.56rem;
                height: 1.56rem;
                margin: 0 auto;

            }
            p{
                // padding-bottom: 0.19rem;
                width: 1.56rem;
                height: 0.34rem;
                font-size: 0.14rem;
                line-height: 0.17rem;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            span{
                display: block;
                font-size: 0.16rem;
                color: #ff6600;
                padding-top: 0.18rem
            }
        }
    }
    li:nth-of-type(2n){
        border-right: none;
    }
 
</style>
