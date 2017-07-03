<template>
	<div>
		<div class="products-row1">
			<div>
				<img src="../../../static/img/up.png" alt="" />
				<img src="../../../static/img/add.png"  />
			</div>
		</div>
		<div class="products-row2">
			<div>
				<img src="../../../static/img/order.png" alt="" />
				<img src="../../../static/img/manage.png"  />
				<img src="../../../static/img/multi.png"  />
			</div>
		</div>
		<div class="products-row3">
			<img src="../../../static/img/cancel.png"  />
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
html,body,#app,.content{
	height: 100%;
}
.content>div{
	height: 100%;
	width: 100%;
	background: url(../../../static/img/product_bg.png);
	/*background: #0c79dd;*/
	background-size: 100% 100%;
	background-repeat: no-repeat;
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.content>div>div{
	width: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
}
.products-row1>div{
	width: 4.5rem;
	height: 1.8rem;
	display: flex;
	position: relative;
	justify-content: space-between;
}
.products-row1>div>img:nth-child(1){
	width: 1.6rem;
	height: 1.5rem;
	position: relative;
	top: .3rem;
}
.products-row1>div>img:nth-child(2){
	width: 1.7rem;
	height: 1.6rem;
}
.products-row2>div{
	width: 7rem;
	height: 3rem;
	display: flex;
	position: relative;
	justify-content: space-around;
}
.products-row2>div>img:nth-child(1){
	width: 2.5rem;
	height: 2.4rem;
	position: relative;
	top: 1.2rem;
}
.products-row2>div>img:nth-child(2){
	width: 2.7rem;
	height: 2.7rem;
	position: relative;
	top: -0.5rem;
}
.products-row2>div>img:nth-child(3){
	width: 2rem;
	height: 2rem;
	position: relative;
	top: 1rem;
}
.products-row3>img{
	width: 2.3rem;
	height: 2.2rem;
	position: relative;
	top: -0.3rem;
	left: 0.2rem;
}
</style>