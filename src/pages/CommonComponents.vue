<template>
  <div>
    <group-title>Button 按钮</group-title>
    <div>
      <div style="width: 500px;display: inline-block;vertical-align: middle">
        <v-button @click="$message('click Default')">Default</v-button>
        <v-button circle>Circle</v-button>
        <v-button type="primary">Primary</v-button>
        <v-button type="info">Info</v-button>
        <v-button type="success">Success</v-button>
        <v-button type="warning">Warning</v-button>
        <v-button type="error">Error</v-button>
        <v-button type="text">Text</v-button>
        <v-button long>Long</v-button>
      </div>
      <pre>
        <span class="tag"><</span><span class="tag">template></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> @click</span><span class="tag">=</span><span class="prop-name">"$message('click Default')"></span><span></span><span>Default</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> circle</span><span class="tag">></span><span>Circle</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"primary"</span><span class="tag">></span><span>Primary</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"info"</span><span class="tag">></span><span>Info</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"success"</span><span class="tag">></span><span>Success</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"warning"</span><span class="tag">></span><span>Warning</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"error"</span><span class="tag">></span><span>Error</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> type</span><span class="tag">=</span><span class="prop-name">"text"</span><span class="tag">></span><span>Text</span><span class="tag"><</span><span class="tag">/v-button></span>
          <span class="tag"><</span><span class="tag">v-button</span><span class="prop"> long</span><span class="tag">></span><span>Long</span><span class="tag"><</span><span class="tag">/v-button></span>
        <span class="tag"><</span><span class="tag">/template></span>
      </pre>
    </div>
    <group-title>Input 输入框</group-title>
    <div style="width: 480px;display: inline-block;vertical-align: middle">
      <div class="sub-title">输入值: {{inputVal}}</div>
      <v-input placeholder="请输入.." v-model="inputVal"></v-input>
      <div class="sub-title">Disabled</div>
      <v-input placeholder="请输入.." disabled></v-input>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;div&gt;</span>输入值: <span>{</span>{inputVal}<span>}</span><span class="tag"><</span><span class="tag">/div></span>
          <span class="tag">&lt;v-input</span><span class="prop"> placeholder</span><span class="tag">=</span><span class="prop-name">"请输入..."</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"inputVal"</span><span class="tag">&gt;&lt;/v-input&gt;</span>
          <span class="tag">&lt;div&gt;</span>Disabled<span class="tag"><</span><span class="tag">/div></span>
          <span class="tag">&lt;v-input</span><span class="prop"> placeholder</span><span class="tag">=</span><span class="prop-name">"请输入..."</span><span class="prop"> disabled</span><span class="tag">&gt;&lt;/v-input&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            data(){
              return {
                inputVal: ''
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
    </pre>
    <group-title>Radio</group-title>
    <div style="width: 480px;display: inline-block;vertical-align: middle">
      <div class="sub-title">
        <div style="margin-bottom: 20px">set radioVal: </div>
        <v-input v-model.number="radioVal"></v-input>
      </div>
      <v-radio v-model="radioVal" :val="1">value1</v-radio>
      <v-radio v-model="radioVal" :val="2">value2</v-radio>
      <v-radio v-model="radioVal" :val="3" disabled>value3</v-radio>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;div&gt;</span>set radioVal: <span class="tag"><</span><span class="tag">/div></span>
          <span class="tag">&lt;v-input</span><span class="prop"> v-model.number</span><span class="tag">=</span><span class="prop-name">"radioVal"</span><span class="tag">&gt;&lt;/v-input&gt;</span>
          <span class="tag">&lt;v-radio</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"radioVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"1"</span><span class="tag">&gt;</span>value1<span class="tag">&lt;/v-radio&gt;</span>
          <span class="tag">&lt;v-radio</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"radioVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"2"</span><span class="tag">&gt;</span>value2<span class="tag">&lt;/v-radio&gt;</span>
          <span class="tag">&lt;v-radio</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"radioVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"3"</span><span class="prop"> disabled</span><span class="tag">&gt;</span>value3<span class="tag">&lt;/v-radio&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            data(){
              return {
                radioVal: 3
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
    </pre>
    <group-title>Checkbox</group-title>
    <div style="width: 480px;display: inline-block;vertical-align: middle">
      <div class="sub-title">checkboxVal: {{checkboxVal}}</div>
      <v-checkbox v-model="checkboxVal" val="苹果">苹果</v-checkbox>
      <v-checkbox v-model="checkboxVal" val="梨子">梨子</v-checkbox>
      <v-checkbox v-model="checkboxVal" val="葡萄" disabled>葡萄</v-checkbox>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;div&gt;</span>checkboxVal: <span>{</span>{checkboxVal}<span>}</span><span class="tag"><</span><span class="tag">/div></span>
          <span class="tag">&lt;v-checkbox</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"checkboxVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"苹果"</span><span class="tag">&gt;</span>苹果<span class="tag">&lt;/v-checkbox&gt;</span>
          <span class="tag">&lt;v-checkbox</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"checkboxVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"梨子"</span><span class="tag">&gt;</span>梨子<span class="tag">&lt;/v-checkbox&gt;</span>
          <span class="tag">&lt;v-checkbox</span><span class="prop"> v-model</span><span class="tag">=</span><span class="prop-name">"checkboxVal"</span><span class="prop"> :val</span><span class="tag">=</span><span class="prop-name">"葡萄"</span><span class="prop"> disabled</span><span class="tag">&gt;</span>葡萄<span class="tag">&lt;/v-checkbox&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            data(){
              return {
                checkboxVal: ['葡萄']
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
    </pre>
    <group-title>Tree</group-title>
    <div style="width: 480px;display: inline-block;vertical-align: middle">
      <div class="sub-title">初始化数据</div>
      <textarea style="resize: none;width: 300px;height: 500px;margin-bottom: 20px" ref="treeDataText" spellcheck="false" v-once>{{treeData}}</textarea>
      <div>
        <v-button type="primary" @click="updateTreeData">保存</v-button>
      </div>
      <div style="width: 220px;margin-top: 20px">
        <v-tree :data="treeData" @itemClick="itemClick"></v-tree>
      </div>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;v-tree</span><span class="prop"> :data</span><span class="tag">=</span><span class="prop-name">"treeData"</span><span class="prop"> @itemClick</span><span class="tag">=</span><span class="prop-name">"itemClick"</span><span class="tag">&gt;</span><span class="tag">&lt;/v-tree&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            data(){
              return {
                treeData: [{
                  name: '一级菜单1',
                  childrens: [{
                    name: '二级菜单',
                    key: '测试'
                  }]
                },{
                  name: '一级菜单2',
                  childrens: [{
                    name: '二级菜单1'
                  },{
                    name: '二级菜单2',
                    childrens: [{
                      name: '三级菜单',
                      childrens: [{
                        name: '四级菜单'
                      }]
                    }]
                  }]
                }]
              }
            },
            methods: {
              itemClick(key){
                <span class="prop">this</span>.$message(`itemClick: ${key}`)
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
      </pre>
    <group-title>Modal 对话框</group-title>
    <div style="width: 480px;display: inline-block;vertical-align: middle">
      <v-button type="primary" @click="showModal">显示对话框</v-button>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;v-modal</span><span class="prop"> ref</span><span class="tag">=</span><span class="prop-name">"vModal"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;div&gt;</span>测试<span class="tag">&lt;/div&gt;</span>
          <span class="tag">&lt;/v-modal&gt;</span>
          <span class="tag">&lt;v-message</span><span class="prop"> ref</span><span class="tag">=</span><span class="prop-name">"vMessage"</span><span class="tag">&gt;</span><span class="tag">&lt;/v-message&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            methods: {
              showModal(){
                <span class="prop">this</span>.$modal({
                  title: '测试标题',
                  confrim: () => {
                    <span class="prop">this</span>.$message('点击了确定')
                  },
                  cancel: () => {
                    <span class="prop">this</span>.$message('点击了取消')
                  }
                })
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
      </pre>
    <group-title>Message</group-title>
    <div style="display: inline-block;vertical-align: middle;width: 480px">
      <v-button type="primary" @click="showMessage">显示message</v-button>
    </div>
    <pre>
        <span class="tag">&lt;template&gt;</span>
          <span class="tag">&lt;v-message</span><span class="prop"> ref</span><span class="tag">=</span><span class="prop-name">"vMessage"</span><span class="tag">&gt;</span><span class="tag">&lt;/v-message&gt;</span>
        <span class="tag">&lt;/template&gt;</span>
        <span class="tag">&lt;script&gt;</span>
          <span class="prop">export default</span> {
            methods: {
              showMessage(){
                <span class="prop">this</span>.$message('测试message')
              }
            }
          }
        <span class="tag">&lt;/script&gt;</span>
      </pre>
    <v-modal ref="vModal">
      <div>测试</div>
    </v-modal>
    <v-message ref="vMessage"></v-message>
  </div>
</template>

<script type="text/ecmascript-6">
  import GroupTitle from '../components/Title'

  export default {
    data(){
      return {
        inputVal: '',
        radioVal: 3,
        checkboxVal: ['葡萄'],
        treeData: [{
          name: '一级菜单1',
          childrens: [{
            name: '二级菜单',
            key: '测试'
          }]
        },{
          name: '一级菜单2',
          childrens: [{
            name: '二级菜单1'
          },{
            name: '二级菜单2',
            childrens: [{
              name: '三级菜单',
              childrens: [{
                name: '四级菜单'
              }]
            }]
          }]
        }]
      }
    },
    methods: {
      showModal(){
        this.$modal({
          title: '测试标题',
          confrim: () => {
            this.$message('点击了确定')
          },
          cancel: () => {
            this.$message('点击了取消')
          }
        })
      },
      showMessage(){
        this.$message('测试message')
      },
      updateTreeData(){
        this.treeData = JSON.parse(this.$refs.treeDataText.value)
      },
      itemClick(key){
        this.$message(`itemClick: ${key}`)
      }
    },
    components: {
      GroupTitle,
    }
  }
</script>

<style scoped>
  .sub-title{
    margin: 20px 0;
  }
  pre{
    display: inline-block;
    font-family: Consolas,Menlo,Courier,monospace;
    white-space: pre-wrap;
    vertical-align: middle;
  }
  .tag{
    color: #3e76f6;
  }
  .prop{
    color: #e96900;
  }
  .prop-name{
    color: #42b983;
  }
</style>
