<template>
	<div>
		VUE动画
		<button @click="showHide">显示隐藏</button>
		
		<transition name="fade">
			<p v-show="show" >哈哈</p>
		</transition>	
	</div>
</template>
<script>

export default{
	name:"anim",
	data(){
		return{
			show:true
		}
	},
	methods:{
		showHide(){
			this.show  = ! this.show;
		}	
		
	}
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active{
	transition: opacity .5s; 
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-enter-to, .fade-leave{
	opacity:1;
}
</style>