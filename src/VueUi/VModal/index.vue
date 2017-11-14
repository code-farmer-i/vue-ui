<template>
  <div>
    <transition name="modal-ani">
      <div class="v-modal-back" v-show="show" @click="show = false">
        <div class="v-modal" @click.stop>
          <div class="v-modal-header">{{title}}</div>
          <div class="v-modal-content">
            <slot></slot>
          </div>
          <div class="v-modal-footer">
            <v-button type="text" @click="cancel">取消</v-button>
            <v-button type="primary" @click="confrim">确定</v-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        title: '',
        show: false
      }
    },
    methods: {
      showModal({
        title = '提示',
        confrim,
        cancel
      }){
        this.title = title;
        this.show = true;
        this._confrim = confrim;
        this._cancel = cancel;
      },
      cancel(){
        this.show = false;
        this._cancel()
      },
      confrim(){
        this.show = false;
        this._confrim()
      }
    }
  }
</script>

<style>
  .v-modal{
    margin: 0 auto;
    position: relative;
    top: 100px;
    width: 520px;
    background-color: #fff;
    border-radius: 6px;
    z-index: 1000;
  }
  .v-modal-header{
    padding: 14px 16px;
    border-bottom: 1px solid #e3e8ee;
    color: #464c5b;
    font-weight: bold;
  }
  .v-modal-content{
    padding: 16px;
    border-bottom: 1px solid #e3e8ee;
  }
  .v-modal-footer{
    padding: 12px 18px;
    text-align: right;
  }
  .v-modal-back{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(55,55,55,.6);
  }
  .modal-ani-leave-active,
  .modal-ani-enter-active{
    transition: opacity .3s;
  }
  .modal-ani-enter,
  .modal-ani-leave-to{
    opacity: 0;
  }
  .modal-ani-leave-active .v-modal,
  .modal-ani-enter-active .v-modal{
    transition: transform .3s;
  }
  .modal-ani-enter .v-modal,
  .modal-ani-leave-to .v-modal{
    transform: scale(.8);
  }
</style>
