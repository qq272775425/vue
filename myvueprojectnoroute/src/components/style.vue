<!-- 双向数据绑定 -->
<template>	
	<div>
		<p v-bind:class="styleObj">哈哈</p>
		<p v-bind:class="[demo1,demo2]"></p>
	</div>
</template>
<script>

	export default{
		name:"style",
		data(){
			return{
				isActive:true,
				isDemo:true,
				demo1:"demo11",
				demo1:"demo22"
			}

		},
		computed:{
			styleObj(){
				return{
					"active":this.isActive,
					"demo":this.isdemo
				}
			}
		}
	}
</script>
.active{
	color:red;
}
<style type="text/css"></style>