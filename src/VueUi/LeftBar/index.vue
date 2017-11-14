<template>
  <div class="left-bar">
    <ul>
      <li
        v-for="(item, idx) in navBarList"
        class="list-item"
        :class="{active: $route.path === item.routePath}"
        @click="$router.replace(item.routePath)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      navBarList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .left-bar{
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 180px;
    background-color: #394a59;
    color: #fff;
  }
  .list-item{
    height: 52px;
    line-height: 52px;
    border-top: 1px solid #fff;
    text-align: center;
  }
  .list-item:last-child{
    border-bottom: 1px solid #fff;
  }
  .list-item.active{
    background-color: #2e3b46;
  }
</style>
