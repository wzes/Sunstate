<template>
    <div class="fillcontain">
        <head-top></head-top>
        <p class="explain_text">Sunstate Manage System</p>
        <p class="explain_text">Please don't delete data</p>
        <p class="explain_text">Prototype Version</p>
    </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  components: {
    headTop
  }
}
</script>

<style lang="less">
@import '../style/mixin';
.explain_text{
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: #333;
}
</style>
