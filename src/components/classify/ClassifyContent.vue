<template>
	<div class="content">
		<ul class="left" >
			<li v-for="(i,index) in shops" @click="change(index)" :class="{active:index == flag}">
				<b :class="{act:index == flag}"></b>
				<i :class="i.icon"></i>
				<p>{{i.tittle}}</p>
			</li>
		</ul>
		<div class="right">
			<ul class="top">
				<span class="spana"></span>
				<p>热门品类</p>
				<li v-for="(n,index) in classs">
			 		<a href="javascript:;">
                       <img :src="n.pic">
                       <span>{{n.tittle}}</span>
					</a>
				</li>

			</ul>
			<ul class='bottom'>
				<p class="twop">热门单品</p>
				<li v-for="(m,index) in goods">
          <router-link :to="{ name: 'MdDetailSection', query: { id:m.id}}">
					<img :src="m.pic">
					<div class="word">
						<p>{{m.tittle}}</p>
						<span>¥ {{m.price}}</span>
					</div>
          </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default {
    data(){
      return{
         shops:[{
         	"icon":"iconfont icon-kongtiao",
         	"tittle":"空调"
         },
         {
         	"icon":"iconfont icon-bingxiang",
         	"tittle":"冰箱"
         },
         {
         	"icon":"iconfont icon-xiyiji",
         	"tittle":"洗衣机"
         },
         {
         	"icon":"iconfont icon-bbgchufangdianqi",
         	"tittle":"厨房小电器"
         },
         {
         	"icon":"iconfont icon-chouyouyanji",
         	"tittle":"厨房大电器"
         },
         {
         	"icon":"iconfont icon-jiadian",
         	"tittle":"生活家电"
         },
         {
         	"icon":"iconfont icon-reshuiqi",
         	"tittle":"热水/净水"
         },
         {
         	"icon":"iconfont icon-jingshuiqi",
         	"tittle":"配件及周边"
         }
      ],
      classs:[],
      goods:[],
      flag:0
    }
   },
   props:["lists","sss"],
   watch:{
   	lists:function(newobj,oldobj){
   		this.lists = newobj;
   		this.init();
   	}
   },
   methods:{
   	change(index){
   		this.classs = this.lists[index].class;
   		this.goods = this.lists[index].good;
   		console.log(this.classs);
   		this.flag = index;
   	},
   	init(){
      if(this.sss){
        this.classs = this.lists[this.sss].class;
        this.goods = this.lists[this.sss].good;
        this.change(this.sss);
      }else{
        this.classs = this.lists[0].class;
        this.goods = this.lists[0].good;
        this.change(0);
      }
   	}
   }
  }
</script>

<style scoped>
  ::-webkit-scrollbar{
    width:0;
  }
 .left{
 	overflow-x: hidden;
 	overflow-y: scroll;
 	width: 0.80rem;
 	background: #f4f4f4;
 	border-right:1px solid #e0e0e0
 }
 .content{
   margin-bottom: 0.58rem;
   display: -webkit-flex;
 	width: 100%;
 	box-sizing: border-box;
 }
.left li{
	text-align: center;
	border-bottom: 1px solid #e0e0e0;
	color: #515151;
}
.left .active{
	color:#0092d8;
}
 .left li i{
	font-size: 0.25rem;
	padding-bottom: 0.15rem;
	padding-top: 0.23rem
 }
 .left li .act{
 	background:#0092d8;
 }
 .left li p{
	font-size: 0.13rem;
	padding-bottom: 0.17rem;
}
.left li b{
	width: 5px;
	margin-top: 0.25rem;
	height: 0.50rem;
	background:#f4f4f4;
	float: left;
}
.right{
	overflow-x: hidden;
 	overflow-y: scroll;
	flex: 1;
	width:2.95rem;
}
.right .top .spana{
	display:block;
	height: 0.06rem;
	width: 100%;
	background:#f4f4f4;
}
.right .top p{
	padding-top: 0.22rem;
	padding-bottom: 0.10rem;
	padding-left: 0.06rem;
	font-size: 0.17rem;
	color:#999999;
	border-bottom:1px solid #e0e0e0
}
.right .top li{
	float: left;
	text-align: center;
	border-right:1px solid #e0e0e0;
	border-bottom:1px solid #e0e0e0;
	width: 32.9%;
}
.right .top li:nth-of-type(3n){
	border-right:none;
}
.right .top li a{
	display:block;
}
.right .top li span{
	display:block;
	font-size: 0.14rem;
	color:#333333;
	text-align: center;
	padding-bottom: 0.12rem;
}
.right .top li img{
	margin: 0 auto;
	display:block;
	width: 0.78rem;
	height: 0.78rem
}
.right .bottom .twop{
	width:2.95rem;
	overflow: hidden;
	padding-top:0.22rem;
	padding-bottom: 0.10rem;
	padding-left: 0.06rem;
	font-size: 0.17rem;
	color:#999999;
	border-bottom:1px solid #e0e0e0
}
.right .bottom li{
	padding-right: 0.16rem;
  border-bottom:1px solid #e0e0e0;
/*  display:-webkit-flex*/
}
.right .bottom li a{
	display:-webkit-flex;
}
.right .bottom li img{
	margin:auto 0.1rem;
	display:block;
	width: 0.7rem;
	height: 0.7rem
}
.right .bottom li p{
	padding-top: 0.24rem;
	font-size: 0.14rem;
	color: #333333;
}
.right .bottom li span{
	padding-top: 0.09rem;
	padding-bottom: 0.25rem;
	display:block;
	font-size: 0.14rem;
	color: #ff6a06;
}

</style>
