<template>
  <div>
    <head-top></head-top>
    <div class="edit_container">
      <quill-editor v-model="content"
                    ref="myQuillEditor"
                    class="editor"
                    :options="editorOption"
                    @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div class="submit_btn">
      <el-button type="primary" @click="submit">Commit</el-button>
    </div>
  </div>
</template>

<script>
import headTop from '../components/headTop'
import { quillEditor } from 'vue-quill-editor'

export default {
  data () {
    return {
      content: '<h3>Text Edit</h3>',
      editorOption: {
        theme: 'snow'
      }
    }
  },
  components: {
    headTop,
    quillEditor
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady (editor) {
      console.log('editor ready!', this.editor)
    },
    submit () {
      console.log(this.content)
      this.$message.success('Commit Success！')
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';
.edit_container{
  padding: 40px;
  margin-bottom: 40px;
}
.editor{
  height: 350px;
}
.submit_btn{
  text-align: center;
}
</style>
