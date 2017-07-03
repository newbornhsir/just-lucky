var immersed = (function(w){

document.addEventListener('plusready',function(){
//	console.log("Immersed-UserAgent: "+navigator.userAgent);
},false);

var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){
	immersed=parseFloat(ms[2]);
}
w.immersed=immersed;
return immersed?immersed:0;

})(window);
if(document.getElementsByClassName("mui-bar-nav").length>0){
	document.getElementsByClassName("mui-bar-nav")[0].style.paddingTop=immersed+"px";
	document.getElementsByClassName("mui-bar-nav")[0].style.height=(immersed+44)+"px";
}
