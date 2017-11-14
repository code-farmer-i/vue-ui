<template>
  <div class="v-checkbox-wrap">
    <span
      class="v-checkbox"
      :class="{checked, disabled}"
      @click="!disabled && toggleChecked()"
    >
      <transition name="checkbox-ani">
        <span class="v-checkbox-inner" v-show="checked"><i class="checkbox-icon">√</i></span>
        </transition>
    </span>
    <span
      class="v-checkbox-text"
      :class="{disabled}"
      @click="!disabled && toggleChecked()"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      val: {
        type: null,
        default: ''
      },
      value: {
        type: Array,
        default: []
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleChecked(){
        let newValues = [...this.value];
        const idx = newValues.findIndex(item => item === this.val);

        if(idx !== -1){
          newValues.splice(idx, 1)
        }else{
          newValues.push(this.val)
        }

        this.$emit('input', newValues)
      }
    },
    computed: {
      checked(){
        return this.value.includes(this.val)
      }
    }
  }
</script>

<style scoped>
  .v-checkbox-wrap{
    display: inline-block;
    font-size: 0;
  }
  .v-checkbox{
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: middle;
    border-radius: 2px;
    border: 1px solid #d7dde4;
    cursor: pointer;
    overflow: hidden;
    transition: border-color .4s
  }
  .v-checkbox.disabled{
    background-color: #f3f3f3;
  }
  .v-checkbox.disabled, .v-checkbox-text.disabled{
    cursor: not-allowed;
  }
  .v-checkbox:not(.disabled).checked{
    border-color: #3399ff;
  }
  .v-checkbox-inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    color: #fff;
    font-size: 12px;
    background-color: #3399ff;
  }
  .checkbox-icon{
    display: inline-block;
    transform: scale(.8);
  }
  .v-checkbox.disabled .v-checkbox-inner{
    background-color: #ccc;
  }
  .v-checkbox-text{
    margin-left: 4px;
    vertical-align: middle;
    cursor: pointer;
  }
  .checkbox-ani-leave-active,
  .checkbox-ani-enter-active{
    transition: opacity .4s;
  }
  .checkbox-ani-enter,
  .checkbox-ani-leave-to{
    opacity: 0;
  }
</style>
