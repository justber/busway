<template>
	<div>
		<div class="login-box">
			<h3 class="title">登录界面</h3>
			<el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
			  <el-form-item label="账号" prop="username">
			    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
			    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
data() {
  var validateUser = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入账号'));
	} else {
	  callback();
	}
  };
  var validatePass = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入密码'));
	}  else {
	  callback();
	}
  };
  return {
	loginForm: {
	  username: '',
	  password: ''
	},
	rules: {
	  username: [
		{ validator: validateUser, trigger: 'blur' }
	  ],
	  password: [
		{ validator: validatePass, trigger: 'blur' }
	  ]
	}
  };
},
methods: {
	...mapMutations('loginModule',['setUser']),
  submitForm(formName) {
	const that = this
	this.$refs[formName].validate((valid) => {
	  if (valid) {
		  this.$api.postLogin(this.loginForm.username,this.loginForm.password)
		  .then(res=>{
			  console.log(res.data)
			if(res.data.code==2000){
				let obj = {
					user: that.loginForm.username,
					token: res.data.data.token
				}
				console.log(res)
				this.setUser(obj)
				localStorage.setItem('user',JSON.stringify(obj))
				this.$router.push('/')
				// that.$api.addHeader(res.data.data.token)
			}else{
				this.info = "账号或密码错误"
			}
	})
		  //请求登录接口
	  } else {
		console.log('error submit!!');
		return false;
	  }
	});
  },
  resetForm(formName) {
	this.$refs[formName].resetFields();
  }
}
}
</script>

<style scoped lang="less">
.login-box{
	width: 400px;
	height: 300px;
	margin: 150px auto;
	padding: 20px;
	border-radius: 10px;
	border: 1px solid #eee;
	background: #fff;
}
.title{
	margin-bottom: 20px;
	text-align: center;
}
</style>
