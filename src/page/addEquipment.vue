<template>
  <div>
    <head-top></head-top>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
          <el-form-item label="Equipment" prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="Value" prop="address">
            <el-input v-model="formData.value"></el-input>
          </el-form-item>
          <el-form-item label="Charge" prop="name">
            <el-input v-model="formData.charge"></el-input>
          </el-form-item>
          <el-form-item label="Upload">
            <el-upload
              class="avatar-uploader"
              :show-file-list="false">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="Description" prop="name">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              v-model="formData.description"
              clearable/>
          </el-form-item>
          <el-form-item class="button_submit">
            <el-button type="primary" @click="submitForm()">Create</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
export default {
  data () {
    return {
      city: 'Shanghai',
      formData: {
        name: '',
        charge: 0,
        creationTime: '',
        description: '',
        value: ''
      }
    }
  },
  components: {
    headTop
  },
  mounted () {
  },
  methods: {
    submitForm () {
      try {
        let result = {status: 1}
        if (result.status === 1) {
          this.$message({
            type: 'success',
            message: 'Add success'
          })
          this.formData.creationTime = new Date().toLocaleDateString()
          this.$store.state.equipments.splice(0, 0, this.formData)
          this.formData = {
            name: '',
            charge: 0,
            creationTime: '',
            description: '',
            value: ''
          }
        } else {
          this.$message({
            type: 'error',
            message: result.message
          })
        }
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';
.button_submit{
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>
