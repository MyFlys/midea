
function text1(){
  var pd=document.getElementById("#panduan");
  var hd=document.getElementById("#hideones");
  var str=pd.value;
  var hideone=hd.value;

if (str==="" || str===null){
  hideone.innerHTML="请输入兑换码";
}else if(str==="123456"){
  hideone.innerHTML="优惠券已经拿到";
}else{
  hideone.innerHTML="您的优惠券不存在"
}

}

console.log(typeof pd.value)
