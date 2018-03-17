<template>
	<div>
		我是子组件
		<p>传递的数据:{{ tittle }}-{{ livemsg }}-{{ num*2 }}</p>
	</div>
</template>
<script>
export default{
	name:"son",
	data(){
		return{

		}
	},
	props:["tittle","livemsg","num"]


}
</script>
<style scoped>
	
</style>