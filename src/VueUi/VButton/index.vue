<template>
  <button
    class="v-btn"
    :class="[type, circle && 'circle', long && 'long']"
    @click="$emit('click')"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-button',
    props: {
      type: {
        type: String,
        default: ''
      },
      circle: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .v-btn{
    display: inline-block;
    padding: 6px 15px;
    outline: none;
    border-radius: 4px;
    font-size: 12px;
    color: #657180;
    background-color: #f7f7f7;
    border: 1px solid #d7dde4;
    cursor: pointer;
    transition: color .2s, background-color .2s, border .2s;
  }
  .v-btn:hover{
    color: #5cadff;
    background-color: #fff;
    border-color: #5cadff;
  }
  .v-btn.text{
    border: none;
    background-color: transparent;
  }
  .v-btn.circle{
    border-radius: 28px;
  }
  .v-btn.long{
    width: 100%;
  }
  .v-btn.primary{
    color: #fff;
    background-color: #39f;
    border-color: #39f;
  }
  .v-btn.primary:hover{
    background-color: #5cadff;
    border-color: #5cadff;
  }
  .v-btn.info{
    color: #fff;
    background-color: #2db7f5;
    border-color: #2db7f5;
  }
  .v-btn.info:hover{
    background-color: #57c5f7;
    border-color: #57c5f7;
  }
  .v-btn.success{
    color: #fff;
    background-color: #0c6;
    border-color: #0c6;
  }
  .v-btn.success:hover{
    background-color: #33d685;
    border-color: #33d685;
  }
  .v-btn.warning{
    color: #fff;
    background-color: #f90;
    border-color: #f90;
  }
  .v-btn.warning:hover{
    background-color: #ffad33;
    border-color: #ffad33;
  }
  .v-btn.error{
    color: #fff;
    background-color: #f30;
    border-color: #f30;
  }
  .v-btn.error:hover{
    background-color: #ff5c33;
    border-color: #ff5c33;
  }
</style>
