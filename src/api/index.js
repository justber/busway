import axios from 'axios'
import base from './base.js'
axios.defaults.timeout = 5000
const api = {
	getAllOrder(){
		return axios.get(base.getAllOrder)
	},
	postupdateUser(data){
		// console.log(data)
		return axios.post(base.updateUser,data)
	},
	postUser(data){
		return axios.post(base.addUser,data)
	},
	getAllUser(data){
		return axios.get(base.getAllUser)
	},
	postupdata(data){
		return axios.post(base.updata,data)
	},
	postAddProducrt(shop){
		// console.log(shop)
		// return axios.post(base.Producrt,shop)
		// console.log(shop)
		// console.log(base.Producrt)
		return axios.post(base.addProducrt,shop)
	},
	delProduct(id){
		// console.log(id)
		// delete axios.defaults.headers.token
		 // = ''
		return axios.get(base.delProduct+`/${id}`)
	},
	addHeader(token){
		  axios.defaults.headers.token = token
	},
	delHeader(){
		  delete axios.defaults.headers.token
	},
	getselectAll(){
		return axios.get(base.selectAll)
	},
	getdatabyid(page){
		return axios.get(base.databyid + page)
	},
	postLogin(name,pass){
		return axios.post(base.Login,{
			name: name,
			password: pass
		})
	},
	getlogout(token){
		return axios.get(base.logout,{
			'token': token
		})
	}
	
}
export default api