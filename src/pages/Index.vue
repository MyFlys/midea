<template>
 <div class="bigbox">
     <index-header></index-header>
     <index-section :sList="SwiperList" :oList="OneList" :tList="TwoList" :foList="FourList" :fiList="FiveList"></index-section>
      <common-foot></common-foot>
 </div>
</template>

<script>
import MdList from "../apis/DataServiceApi"
import IndexHeader from "../components/index/IndexHeader"
import IndexSection from "../components/index/IndexSection"
import CommonFoot from"../components/CommonFoot/CommonFoot.vue"
 export default {
   data () {
     return {
       SwiperList:[],
       OneList:[],
       TwoList:[],
       FourList:[],
       FiveList:[]
     }
   },
   components: {
       IndexHeader,
       IndexSection,
       CommonFoot
   },
   methods:{
      __initPage(){
        MdList.getSwiper((data)=>{
            console.log(data)
            this.SwiperList = data;

        })
        MdList.getOne((data)=>{
            console.log(data)
            this.OneList = data;

        })
        MdList.getTwo((data)=>{
            console.log(data)
            this.TwoList = data;

        })
        MdList.getFour((data)=>{
            console.log(data)
            this.FourList = data;

        })
        MdList.getFive((data)=>{
            console.log(data)
            this.FiveList = data;

        })
      },
    },
    created(){
        this.__initPage();
        // this.__test()
      }
 }
</script>

<style scoped lang="scss">
.bigbox{
  height: 100%;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
}

</style>
