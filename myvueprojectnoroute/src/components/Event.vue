<template>
	<!-- template 中只能存在一个根组件 -->
	<div class="event">
		<ul>
			<li v-for="(name,index) in names" v-on:click="getitem(index,$event)">{{ name }}</li>
		</ul>
		<ul>
			<li v-for="(name,index) in names" v-on:click="overfollow()">{{ name }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				names:["asd","asd","sdf"]
			}
		},
		methods:{
			getitem(data,$event){
				console.log(data);
				console.log($event);
				console.log(this.names[data]);
			},
			overfollow(){
				this.names.push("frank");
			}
		},
		computed:{
			
		}
	}
</script>

<style>
</style>