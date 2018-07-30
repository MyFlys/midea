<template>
	<div class="classifyBody">
		<classify-header></classify-header>
		<classify-content  :lists="goodslist" :sss="nums"></classify-content>
    <common-foot1></common-foot1>
    <!--<classify-content></classify-content>-->
	</div>

</template>

<script>
	import MdList from "../apis/DataServiceApi"
	import ClassifyHeader from "../components/classify/ClassifyHeader"
	import ClassifyContent from "../components/classify/ClassifyContent"
  import CommonFoot1 from"../components/CommonFoot/CommonFoot1.vue"
    export default {
        components:{
        	ClassifyHeader,
        	ClassifyContent,
          CommonFoot1
        // CartNav,
        // comment
      	},
      	data(){
      		return{
      			goodslist:{},
            nums:0
      		}
      	},
        methods:{
      		__initPage(){
            MdList.getClassifyList((data)=> {
//           console.log(data)
              this.goodslist = data;
//            console.log(this.goodslist)})
            })
      		}
    	},
	    created(){
	      this.__initPage();
	     },
      mounted(){
        this.nums=this.$route.params.sss;
         console.log(this.$route.params.sss);
      }
	   }
</script>

<style scoped>
	.classifyBody{
		height: 100%;
    display: -webkit-flex;
    flex-direction: column;
	}
</style>
