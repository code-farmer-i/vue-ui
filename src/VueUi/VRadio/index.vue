<template>
  <div class="v-radio-wrap">
    <span
        class="v-radio"
        :class="{checked: value === val, disabled}"
        @click="!disabled && $emit('input', val)"
    >
      <transition name="radio-ani">
        <span class="v-radio-inner" v-show="value === val"></span>
        </transition>
    </span>
    <span
        class="v-radio-text"
        :class="{disabled}"
        @click="!disabled && $emit('input', val)"
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
        type: null,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .v-radio-wrap{
    display: inline-block;
    font-size: 0;
  }
  .v-radio{
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #d7dde4;
    cursor: pointer;
    transition: border-color .3s;
  }
  .v-radio.disabled{
    background-color: #f3f3f3;
  }
  .v-radio.disabled, .v-radio-text.disabled{
    cursor: not-allowed;
  }
  .v-radio:not(.disabled).checked{
    border-color: #3399ff;
  }
  .v-radio-inner{
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3399ff;
  }
  .v-radio.disabled .v-radio-inner{
    background-color: #ccc;
  }
  .v-radio-text{
    margin-left: 4px;
    vertical-align: middle;
    cursor: pointer;
  }
  .radio-ani-leave-active,
  .radio-ani-enter-active{
    transition: transform .3s;
  }
  .radio-ani-enter,
  .radio-ani-leave-to{
    transform: scale3d(0, 0, 0);
  }
</style>
