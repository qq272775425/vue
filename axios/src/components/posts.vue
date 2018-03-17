<template>
  <div >
  <p>post</p>
  </div>
</template>

<script>

import qs from "qs"

export default {
  name: 'posts',
  data () {
    return {
        
    }
  },
  created(){
    this.$axios.post("/sxtstu/blueberrypai/login.php",
      qs.stringify({

      user_id:"iwen@qq.com",
      password:"iwen123",
      verification_code:"crfvw"
    
      }))
    .then(res=>{
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
