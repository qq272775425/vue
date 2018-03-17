<template>
	<div>
		我是父自定义组件
		<!-- 第三步把子组件通过标签的形式展现 -->
		<Son :tittle="msg" :livemsg="livemsg" :num="num"/>
		<button @click="changeMsg">按钮</button>
		<input type="text" v-model="livemsg" >
	</div>
</template>
<script>
/*父组件中加载子组件*/
/*第一步先把子组件导入*/
import Son from "./son"
export default{
	name:"mc",
	data(){
		return{
			msg:"这是活的数据",//注意所有数据都需要初始化
			livemsg:"hello",
			num:10
		}
	},
	/*第二步 在export default中创建components:{}把son注入进来components:{Son}*/
	components:{
		Son
	},
	methods:{
		changeMsg(event){
			this.msg = "这是修改之后的数据"
		}
	}
}
</script>
<style scoped>
	
</style>