import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloYork from '../components/HelloYork'

Vue.use(VueRouter)

export default new VueRouter({
	routes:[{
	path:"/",
	component:HelloWorld
},
{
	path:"/york",
	component:HelloYork
}]
})
