<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="$store.state.drivers"
                style="width: 100%">
                <el-table-column
                  label="User"
                  prop="name">
                </el-table-column>
                <el-table-column
                  label="Job_size"
                  prop="job_size">
                </el-table-column>
                <el-table-column
                  label="Phone"
                  prop="phone">
                </el-table-column>
                <el-table-column
                  label="Busy"
                  prop="isBusy">
                </el-table-column>
                <el-table-column
                  label="CreateTime"
                  prop="creationTime">
                </el-table-column>
                <el-table-column label="Operation" width="200">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index)">Edit</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="14"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
            <el-dialog title="Update Contract Info" :visible.sync="dialogFormVisible">
                <el-form :model="selectTable">
                  <el-form-item label="User" label-width="100px">
                    <el-input v-model="selectTable.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Address" label-width="100px">
                    <el-input v-model="selectTable.isBusy" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Phone" label-width="100px">
                    <el-input v-model="selectTable.phone" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Description" label-width="100px">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 4}"
                      v-model="selectTable.description"
                      clearable/>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="updateContract">Confirm</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import headTop from '../components/headTop'
import { getContractList } from '../api/api'
export default {
  data () {
    return {
      city: {},
      offset: 0,
      limit: 14,
      count: 1,
      tableData: [],
      currentPage: 1,
      selectTable: {
        name: '',
        isBusy: false,
        job_size: 0,
        phone: '',
        description: ''
      },
      names: [
        'Jack', 'Bob', 'Tim Wow', 'Wow Andi', 'Andi', 'May', 'God', 'Los',
        'Fans', 'Fan Got', 'God', 'Los', 'Tim Wow', 'Wow Andi'
      ],
      dialogFormVisible: false
    }
  },
  created: function () {
    if (!this.$store.state.d_initialize) {
      for (let i = 0; i < 14; i++) {
        let driver = {
          name: this.names[i],
          job_size: Math.round(Math.random() * 10),
          isBusy: Math.random() > 0.5 ? 'Yes' : 'No',
          phone: '152' + Math.round(Math.random() * 1000000000),
          creationTime: new Date().toLocaleDateString()
        }
        this.$store.state.drivers.push(driver)
        this.count = this.$store.state.drivers.length * 10
      }
      this.$store.state.d_initialize = true
    } else {
      this.currentPage = 1
      this.count = this.$store.state.drivers.length * 2
    }
    // this.getContractList()
  },
  components: {
    headTop
  },
  methods: {
    getContractList: function () {
      let data = {
        'skipCount': 0,
        'maxResultCount': 10
      }
      getContractList(data).then(data => {
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
    },
    handleEdit (index) {
      this.selectTable = this.$store.state.drivers[index]
      this.dialogFormVisible = true
    },
    async handleDelete (index) {
      try {
        if (this.count < 15) {
          this.$store.state.drivers.splice(index, 1)
        } else {
          const res = {status: 1}
          if (res.status === 1) {
            this.$message({
              type: 'success',
              message: 'delete success'
            })
            let row = this.$store.state.drivers[index]
            this.$store.state.drivers.splice(index, 1)
            this.$store.state.drivers.push(row)
          } else {
            throw new Error(res.message)
          }
        }
        this.count--
      } catch (err) {
        this.$message({
          type: 'error',
          message: err.message
        })
        console.log('delete fail')
      }
    },
    handleSizeChange (val) {
      console.log(`Per Page ${val} item`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
    },
    async updateContract () {
      this.dialogFormVisible = false
      try {
        Object.assign(this.selectTable, this.address)
        const res = {status: 1}
        if (res.status === 1) {
          this.$message({
            type: 'success',
            message: 'update success'
          })
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      } catch (err) {
        console.log('update fail', err)
      }
    }
  }
}
</script>

<style lang="less">
  @import '../style/mixin';
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .table_container{
    padding: 20px;
  }
  .Pagination{
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
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
</style>
