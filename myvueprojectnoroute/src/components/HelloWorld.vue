<!--视图部分-->

<template>
  <div class="hello">
    {{ hello }}
    <p v-if="show">我是if为true看见</p>
    <p v-else>我是if为false看到的</p>
    <li v-for="todo in todos">{{todo}}</li>
    <li v-for="(todo,index) in todos" v-bind:key="index">{{todo}}-{{ index }}</li>
    <ul>
      <li v-for="user in users">in: {{ user.id }} name:{{user.name}} age:{{ user.age }}</li>
    </ul>
    <button v-on:click="num++">按钮1</button>
    <button v-on:click="alerttitle">按钮2</button>
    <button v-on:click="showvalue">按钮2</button>
    <p>{{ num }}</p>
  </div>
</template>

<!--逻辑部分-->
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hello:'你是萨比',
      show:true,
      num:1,
      todos:[1,1,1,1,1,1,1,1,1,1,1,],
      users:[
        {
          id:0,
          name:"dada",
          age:10
        },
        {
          id:1,
          name:"dada1",
          age:10
        },
        {
          id:2,
          name:"dada2",
          age:13
        },
        {
          id:3,
          name:"dada3",
          age:12
        }
      ]
    }
  },
   methods:{
        alerttitle(){
          alert("这是由methods定义的方法");
        },
        showvalue(){
          //this 来索引当前data中的数据 this指向当前组件
          this.show = !this.show;
        }
      }
}
</script>


<!--样式部分-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
