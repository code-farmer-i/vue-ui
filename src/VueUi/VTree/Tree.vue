<template>
    <ul :class="[`deep${deep}`, deep > 1 && 'deep-ul']" v-show="show">
      <li
        v-for="({name, childrens, key}, idx) in data"
        :key="idx"
      >
        <div :style="{'padding-left': `${paddingLeft * deep}px`}"
             class="tree-name"
             @click="toggleChildrens(childrens, idx, key)"
        >{{name}}
          <span
            v-if="childrens && childrens.length"
            class="arrow"
          >
            >
          </span>
        </div>
        <tree :data="childrens" v-if="childrens" :deep="deep + 1" :show="showChildrens[idx]"></tree>
      </li>
    </ul>
</template>

<script>
  import Tree from './Tree'
  import Bus from '../eventBus'

  const itemHeight = 38;

  export default {
    name: 'tree',
    data(){
      return {
        paddingLeft: 15,
        showChildrens: new Array(this.data.length).fill(false)
      }
    },
    props: {
      data: {
        type: Array,
        default: []
      },
      deep: {
        type: Number,
        default: NaN
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleChildrens(childrens, idx, key){
        if(childrens && childrens.length != 0){
          this.showChildrens.splice(idx, 1, !this.showChildrens[idx])
        }

        if(key){
          Bus.$emit('itemClick', key)
        }
      },
      toggleShow(){
        this.show = !this.show
      }
    },
    components: {
      Tree
    }
  }
</script>

<style scoped>
  .deep1{
    background-color: #353d47;
  }
  .deep2{
    background-color: #303740;
  }
  .deep3{
    background-color: #2B3340;
  }
  .deep4{
    background-color: #232F40;
  }
  .tree-name{
    position: relative;
    padding: 12px 14px;
  }
  .arrow{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) rotate(90deg);
  }
</style>
