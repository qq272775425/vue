<template>
  <div class="hello">
    <div> 
        <ul>
          
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        newsData:[]
    }
  },
  created(){
    this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
      params:{
        type:"junshi",
        count:30
      }
    })
    .then(res=>{//数据获取成功用.then
      this.newsData = res.data;
      console.log(res.data);
    })
    .catch(error => {//出现错误用catch
      console.log(error)
    })
  }//created是一个声明周期函数,所用是当组件生成时执行
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
