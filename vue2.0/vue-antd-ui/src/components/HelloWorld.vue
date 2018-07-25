<template>
  <div class="hello">
    <a-button type="primary" @click="showModal">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>

    <div>
      <a-button-group>
        <a-button>Cancel</a-button>
        <a-button type="primary">OK</a-button>
      </a-button-group>
    </div>

    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
    </div>

    <div>
      <a-modal
      title="提示"
      :visible="visible"
      cancelText="取消"
      okText="确定"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel">
      <p>{{ModalText}}</p>
    </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    }
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode)
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
