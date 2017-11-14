<template>
  <input
    class="v-input"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    :disabled="disabled"
  />
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
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

<style scoped>
  .v-input{
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    color: #657180;
    background-color: #fff;
    background-image: none;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  }
  .v-input[disabled]{
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc;
  }
  .v-input:not([disabled]):hover{
    border-color: #5cadff;
  }
  .v-input:focus{
    outline: 0;
    box-shadow: 0 0 0 2px rgba(51,153,255,.2);
    border-color: #5cadff;
  }
  .v-input::-webkit-input-placeholder{
    color: #c3cbd6;
  }
  .v-input::-moz-placeholder, .v-input:-moz-placeholder, .v-input::placeholder{
    color: #c3cbd6;
  }
</style>
