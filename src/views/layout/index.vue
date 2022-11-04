 
<template>
  <div class="common-layout">
	<el-container>
	  <el-header>
		  <layoutTop></layoutTop>
	  </el-header>
	  <el-main>
		  <!-- <GdMap></GdMap> -->
		  <gdmap></gdmap>
	  </el-main>
	</el-container>
  </div>
</template>


<script>
import gdmap from '@/views/gdmap'
import layoutTop from './layoutTop.vue'
export default {
	components:{
		layoutTop,
		gdmap
	}
}
</script>

<style scoped lang="less">
	.el-header{
		padding: 0;
	}
	.el-main{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 60px;
		padding: 0;
		height: 100%;
	}
</style>
