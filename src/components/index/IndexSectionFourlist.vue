<template>
 <li>
     <a href="javascript:;">
        <div class="top">
            <img :src="fofofoList.img" alt="">
            <div class="title">
                <span class="times" :style=fofofoList.disp><i class="iconfont icon-shijian"></i><b class="count-down"></b></span>
                <span class="pro">{{fofofoList.dis}}</span>
            </div>
        </div>
        <div class="bottom">
            <p>{{fofofoList.title}}</p>
            <p>{{fofofoList.info}}</p>
            <div class="pri">
                <span class="price">{{fofofoList.price}}</span>
                <div class="right">
                    <span><i class="iconfont icon-keshi"></i>{{fofofoList.see}}</span>
                    <span><i class="iconfont icon-xiaoxi"></i>{{fofofoList.eva}}</span>
                    <span><i class="iconfont icon-shoucang"></i>{{fofofoList.col}}</span>
                </div>
            </div>
        </div>
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
       fofofoList:{
           default:{},
        //    type:Object
       }
   },
   methods:{
       times(){
           function FreshTime() {
                var endtime = new Date("2018/7/10,23:59:40");//结束时间
                var nowtime = new Date();
                if(nowtime.getTime() >= endtime.getTime()){
                    endtime.setDate(endtime.getDate() + 2);

                }
                //当前时间
                var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000); // 剩余时间
                d = parseInt(lefttime / 3600 / 24);   // 剩余天数
                h = parseInt((lefttime / 3600) % 24); // 剩余小时数
                m = parseInt((lefttime / 60) % 60); // 剩余分钟数
                s = parseInt(lefttime % 60);    // 剩余秒数
                var d = d < 10 ? '0' + d:d;
                var h = h < 10 ? '0' + h:h;
                var m = m < 10 ? '0' + m:m;
                var s = s < 10 ? '0' + s:s;
                $(".count-down").text("还剩" + d + "天" + h + "小时" + m + "分" + s + "秒") 
            }
            FreshTime()
            var sh;
            sh = setInterval(FreshTime, 1000); // 
       },
    //    change(){
    //        console.log(fofofoList.dis)
    //        if(fofofoList.dis == "" ){
    //            $('.pro').css('display','none')
    //        }
    //        if(fofofoList.dis == "" && $('.times').css('display','none')){
    //            $('.title').css('display','none')
    //        }
    //    }
   },
   mounted(){
       this.times();
    //    this.change()
   },
   beforeUpdate(){
       this.times();
    //    this.change()
   }
}
</script>

<style scoped lang="scss">
li{
    
    margin-bottom: 0.15rem;
    border-bottom: 1px solid #ccc;
    a{
        .top{
            width: 100%;
            height: 2.11rem;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .title{
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                span{
                    display: block;
                    padding: 0 0.11rem;
                    line-height: 0.3rem;
                    font-size: 0.13rem;
                    color: #fff;
                    display: flex;
                }
                span:nth-child(1){
                    background:rgba($color: #333, $alpha: 0.7);
                    .iconfont{
                        font-size: 0.15rem;
                        color: #fff;
                        margin-right: 5px;
                    }
                    .count-down{
                        font-weight: 100;
                    }
                }
                span:nth-child(2){
                    background: #ff6600;
                }
            }
        }
        .bottom{
            background: #fff;
            padding-top: 0.1rem;
            p:nth-of-type(1){
                font-size: 0.16rem;
                color: #333;
                line-height: 0.27rem;
                text-indent: 0.15rem;
            }
            p:nth-of-type(2){
                font-size: 0.13rem;
                line-height: 0.22rem;
                text-indent: 0.15rem;
                color: #999;
            }
            .pri{
                padding: 0 0.15rem 0 0.18rem;
                display:flex;
                justify-content: space-between;
                span{
                    display: block;
                    display: flex;
                }
                .price{
                    font-size: 0.2rem;
                    line-height: 0.48rem;
                    color: #ff6600;
                }
                .right{
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-size: 0.1rem;
                        line-height: 0.48rem;
                        color: #ccc;
                        margin-left: .23rem;
                        .iconfont{
                            font-size: 0.2rem;
                            color: #ccc;
                            margin-right: 3px;
                        }
                    }
                }
            }
        }
    }
    
}
 
</style>
