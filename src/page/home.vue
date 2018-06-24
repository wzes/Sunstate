<template>
  <div>
    <head-top></head-top>
    <section class="data_section">
      <header class="section_title">Data Statistic</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">Today Data: </span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span> new user</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{contractCount}}</span> new contract</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{jobCount}}</span> new job</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{driverCount}}</span> new driver</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{equipmentCount}}</span> new equipment</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">Total Data：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> users</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allContractCount}}</span> contracts</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allJobCount}}</span> jobs</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allDriverCount}}</span> drivers</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allEquipmentCount}}</span> equipments</div></el-col>
      </el-row>
    </section>
    <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
  </div>
</template>

<script>
import headTop from '../components/headTop'
import tendency from '../components/tendency'
export default {
  data () {
    return {
      userCount: 125,
      contractCount: 212,
      jobCount: 12,
      driverCount: 5,
      equipmentCount: 12,
      allUserCount: 2330,
      allContractCount: 12323,
      allDriverCount: 35,
      allJobCount: 2121,
      allEquipmentCount: 1212,
      sevenDay: [],
      sevenDate: [[], [], [], [], []]
    }
  },
  components: {
    headTop,
    tendency
  },
  mounted () {
    let now = new Date()
    for (let i = 1; i < 10; i++) {
      now.setDate(now.getDate() + 1)
      this.sevenDay.push(now.getDate())
      for (let j = 0; j < 5; j++) {
        this.sevenDate[j][i - 1] = Math.round(Math.random() * 100 + 200)
      }
    }
  },
  computed: {

  },
  methods: {}
}
</script>

<style lang="less">
@import '../style/mixin';
  .data_section{
    padding: 20px;
    margin-bottom: 40px;
    .section_title{
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .data_list{
      text-align: center;
      font-size: 14px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num{
        color: #333;
        font-size: 26px;

      }
      .head{
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head{
      background: #FF9800;
    }
    .all_head{
      background: #20A0FF;
    }
  }
  .wan{
    .sc(16px, #333)
  }
</style>
