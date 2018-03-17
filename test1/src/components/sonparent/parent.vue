<template>
	<div>
		父组件
		<Child @sendmsg="getmsg"/>
		{{ info }}
	</div>
</template>
<script>
import Child from "./child"

export default{
	name:"parent",
	data(){
		return{
			info:""
		}
	},
	components:{
		Child
	},
	methods:{
		getmsg(data){
			console.log(data)
			this.info=data;
		}
	}
}
</script>
<style scoped>
</style>