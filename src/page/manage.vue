<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#324057" text-color="#fff"
                 active-text-color="#ffd04b" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>View</template>
            <el-menu-item index="contractList">Contract</el-menu-item>
            <el-menu-item index="driverList">Driver</el-menu-item>
            <el-menu-item index="equipmentList">Equipment</el-menu-item>
            <el-menu-item index="jobList">Job</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>Add</template>
            <el-menu-item index="addContract">Contract</el-menu-item>
            <el-menu-item index="addDriver">Driver</el-menu-item>
            <el-menu-item index="addEquipment">Equipment</el-menu-item>
            <el-menu-item index="addJob">Job</el-menu-item>
          </el-submenu>
          <!--<el-submenu index="4">-->
            <!--<template slot="title"><i class="el-icon-edit"></i>Edit</template>-->
            <!--&lt;!&ndash; <el-menu-item index="uploadImg">上传图片</el-menu-item> &ndash;&gt;-->
            <!--<el-menu-item index="vueEdit">Edit</el-menu-item>-->
          <!--</el-submenu>-->
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>Setting</template>
            <el-menu-item index="adminSet">Setting</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-warning"></i>About</template>
            <el-menu-item index="about">About</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';
.manage_page{
}
</style>
