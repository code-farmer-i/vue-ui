<template>
  <div>
    <top-bar>
      <div class="logo">Vue-Ui</div>
    </top-bar>
    <left-bar :navBarList="navBarList"></left-bar>
    <router-view class="main"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default  {
    data(){
      return {
        navBarList:[{
          name: '基础组件',
          routePath: '/CommonComponents'
        }]
      }
    }
  }
</script>

<style scope>
  .main{
    padding: 10px;
    position: relative;
    top: 60px;
    margin-left: 180px;
  }
  .logo{
    font-size: 20px;
  }
</style>
