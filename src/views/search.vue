<template>
	<div class="search">
		<el-input v-model="start" placeholder="输入起始位置" />
		<el-input v-model="end" placeholder="输入到达位置" />
		<el-button type="primary" :disabled="isDisabled" @click="search">查询</el-button>
	</div>
</template>

<script>
export default {
	computed: {
		isDisabled: function(){
			return !(this.start && this.end)
		}
	},
	data(){
		return {
			start:'',
			end:''
		}
	},
	methods: {
		search(){
			// console.log(this.start,this.end)
			this.$parent.fatherMethod(this.start,this.end)
			// this.$emit.fatherMethod()
		}
	}
}
</script>

<style scoped lang="less">
.search{
	position: fixed;
	top: 80px;
	z-index: 999;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.el-input{
		margin: 0 30px;
		width: 15%;
		height: 40px;
	}
}
</style>
