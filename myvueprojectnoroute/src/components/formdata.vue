<!-- 双向数据绑定 -->
<template>	
	<div>
		<input type="text" name="" v-model="msg">
		<p>{{ message }}</p>
	</div>
</template>
<script>
	export default{
		name:'formdata',
		data(){
			return{
				msg:"hello",
				message:"hello"
			}

		},
		watch:{
			msg:function(data){
				 // data是你输入值 你输入什么date就可以打印到什么
				 console.log(data);
				 if(data == "haha"){
				 	console.log('hahanimei')
				 }
				 
				 setTimeout(()=>{
				 	this.message = data;
				 },400)//延时请求 减轻服务器负担 
			}
		}
	}
</script>
<style type="text/css"></style>