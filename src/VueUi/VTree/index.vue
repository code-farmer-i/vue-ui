<template>
  <div class="v-tree">
    <tree :data="data" :deep="1" :show="true"></tree>
  </div>
</template>

<script>
  import Tree from './Tree'
  import Bus from '../eventBus'

  export default {
    name: 'v-tree',
    beforeCreate(){
      Bus.$on('itemClick', key => {
        this.$emit('itemClick', key)
      })
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Tree
    }
  }
</script>

<style scoped>
  .v-tree{
    color: #fff;
  }
</style>
