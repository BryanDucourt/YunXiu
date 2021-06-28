<template>
  <el-collapse style="background-color: gray">
    <el-collapse-item
      title="整体轮廓"
      name="contour"
      style="background-color: transparent"
      class="collapse"
    >
      test
    </el-collapse-item>
    <el-collapse-item
      title="眼睛调整"
      name="eye"
    >
      test
    </el-collapse-item>
    <el-collapse-item
      title="鼻子调整"
      name="nose"
    >
      test
    </el-collapse-item>
    <el-collapse-item
      title="嘴巴调整"
      name="mouth"
    >
      test
    </el-collapse-item>
    <el-collapse-item
      title="磨皮美白"
      name="skin"
    >
      test
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  name: "FunctionAside"
}
</script>

<style >
.collapse>>>.el-collapse-item__wrap{
  background-color: gray;
}
</style>