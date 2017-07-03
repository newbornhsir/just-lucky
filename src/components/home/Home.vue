<template>
	<div>
		<!--轮播图-->
		<mt-swipe :auto="14000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		<div class="operate">
			<div class="report">
				<span class="iconfont icon-baobiao"></span>
				<span>营运报表</span>
			</div>
			<div>
				<div class="device"><span class="iconfont icon-shebei"></span><span>设备管理</span></div>
				<div class="team-and-course">
					<div class="team"><span class="iconfont icon-chengyuanqunzu"></span><span>成员管理</span></div>
					<div class="course"><span class="iconfont icon-zaixianketang"></span><span>在线课堂</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'home'
    }
  }
}
</script>



<style>
.mint-swipe {
	height: 6.8rem;
	background: slategray;
}
.operate {
	margin-top: .4rem;
	height: 3.4rem;
	display: flex;
	justify-content: space-around;
}
.operate>div {
	box-sizing: border-box;
}
.report{
	width: 3.53rem;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	border: 1px solid #ccc;
}
.report>span {
	display: inline-block;
	width: 100%;
	font-size: 20px;
	text-align: center;
}
.report>span:nth-child(1) {
	font-size: 80px;
	color: #fe8034;
}
.report>span:nth-child(2) {
	padding-top: 0.3rem ;
	color: #666566;
}
.operate>div:nth-child(2) {
	width: 3.8rem;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
}
.device {
	height: 1rem;
	width: 100%;
	border: 1px solid #ccc;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-around;
}
.device>span:nth-child(1) {
	color: #33CC99;
	font-size: 40px;
}
.device>span:nth-child(2){
	font-size: 17px;
	color: #666566;
}
.team-and-course{
	height: 2.2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.team {
	width: 2.1rem;	
	text-align: center;
	display: flex;
	align-content: center;
	align-items: center;
	flex-wrap: wrap;
	border: 1px solid #ccc;
}
.course {
	width: 1.6rem;
	display: flex;
	align-content: center;
	flex-wrap: wrap;
	border: 1px solid #ccc;
	text-align: center;
}
.team-and-course>div>span:nth-child(1) {
	width: 100%;
	text-align: center;
	font-size: 36px;
}
.team-and-course>div > span:nth-child(2) {
	width: 100%;
	color: #666566;
	font-size: 17px;
	padding-top: 5px;
}
.team>span:nth-child(1){
	color: #34abfe;
}
.course>span:nth-child(1){
	color: #e91313;
}
</style>