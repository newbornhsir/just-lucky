<template>
  <div id="app">
   <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	
	<mt-tabbar v-model="selected">
	  <mt-tab-item id="home">
	    首页
	  </mt-tab-item>
	  <mt-tab-item id="product">
	    商品
	  </mt-tab-item>
	  <mt-tab-item id="about">
	    我的
	  </mt-tab-item>
	</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      selected: 'home'
    }
  },
  watch: {
    selected: function () {
      console.log(this.selected)
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
.header {
	height: 50px;
	line-height: 50px;
	position: relative;
	text-align: center;
	background: #33cc99;
	font-size: 20px;
	color: #fff;
}
.header-left {
	position: absolute;
	left: 15px;
	top: 15px;
}
.header-right {
	position: absolute;
	right: 15px;
	top: 15px;
}
.header-title {
	display: inline-block;
	height: 50px;
	
}
</style>
