<template>
	<div>
		子组件
		<button @click="sendMsg">传递</button>
	</div>
</template>
<script>
export default{
	name:"child",
	data(){
		return{
			msg:"我是子组件数据"
		}
	},
	methods:{
		sendMsg(event){
			this.$emit("sendmsg",this.msg)
		}
	}
}
</script>
<style scoped>
</style>