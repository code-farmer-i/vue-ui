<template>
  <div class="top-bar">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'top-bar'
  }
</script>

<style scoped>
  .top-bar{
    padding: 0 20px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    height: 60px;
    line-height: 60px;
    color: #fff;
    background-color: #1a2732;
  }
</style>
