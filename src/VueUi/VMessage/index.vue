<template>
  <transition name="message-ani">
    <div class="v-message" v-show="show">{{message}}</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        show: false,
        message: ''
      }
    },
    methods: {
      showMessage(message){
        if(!message || this.show) return

        this.message = message;
        this.show = true;

        setTimeout(() => {
          this.show = false;
        }, 1900)
      }
    }
  }
</script>

<style scoped>
  .v-message{
    padding: 12px 14px;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1000;
    background-color: #fff;
    border-radius: 4px;
    /*box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .1);*/
    transform: translate3d(-50%, 20px, 0);
  }
  .message-ani-enter-active,
  .message-ani-leave-active{
    transition: opacity .3s, transform .3s
  }
  .message-ani-enter,
  .message-ani-leave-to{
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
