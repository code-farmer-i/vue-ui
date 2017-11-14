import * as VueUiComponents from './VueUiComponents'

export default {
  install(Vue){
    for(const [comName, com] of Object.entries(VueUiComponents)){
      Vue.component(comName, com)
    }

    Vue.prototype.$message = function(message){
      const vMessage = this.$refs.vMessage;

      if(!vMessage){
        throw new Error('you should register <v-message ref="vMessage"></v-message>')
      }else{
        vMessage.showMessage(message)
      }
    }

    Vue.prototype.$modal = function(option){
      const vModal = this.$refs.vModal;

      if(!vModal){
        throw new Error('you should register <v-modal ref="vModal"></v-modal>')
      }else{
        vModal.showModal(option)
      }
    }
  }
}
