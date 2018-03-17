<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/>
    <Mc/>
    <Parent/> -->
    <!-- <Big/> -->
    <Anim/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Mc from './components/myComponent'
import Parent from './components/sonparent/parent'
import Big from './components/comkeep/big'
import Anim from './components/anim/anim'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Mc,
    Parent,
    Big,
    Anim
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
