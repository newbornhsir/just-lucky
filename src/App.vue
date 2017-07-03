<template>
  <div id="app">
   <mt-header v-bind:title="selected">
	  <!--<router-link to="/" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>-->
	  <!--<mt-button icon="more" slot="right"></mt-button>-->
	</mt-header>
	
	<div class="content">
		<router-view></router-view>
	</div>
	
	
	<mt-tabbar v-model="selected">
	  <mt-tab-item id="首页">首页</mt-tab-item>
	  <mt-tab-item id="商品">商品</mt-tab-item>
	  <mt-tab-item id="个人中心">我的</mt-tab-item>
	</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      selected: '首页'
    }
  },
  watch: {
    selected: function () {
      let linkStr = this.selected === '首页' ? '/' : (this.selected === '商品' ? '/product' : '/about')
      this.$router.push(linkStr)
    }
  },
  methods: {
    selected: function () {
      console.log('111')
    }
  }
}
</script>
<!--body 默认8px margin ,目前不需要去掉-->
<style>
html,body {
	margin: 0px;
}
#app {
	font-size: 18px;
}
.mint-header{
	height: 50px;
	font-size: 20px;
}
.header-title {
	display: inline-block;
	height: 50px;
	
}
.mint-tabbar {
	height: 45px;
	align-content: center;
	background: #33CC99;
}
.mint-tabbar > .mint-tab-item.is-selected{
	background: slategray;
}
.mint-tab-item {
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	font-size: 16px;
}
.mint-tab-item-label {
	font-size: 16px;
}
a {
	text-decoration: none;
	color: #fff;
}
a:hover, a:visited, a:link, a:active{
	color: #fff;
	background: transparent;
}
</style>
