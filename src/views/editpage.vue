<template>
  <el-container style="height: 100%">
    <el-main style="background-color: transparent">
      <el-image
        :src="imageSelected"
        style="width: 99%;height: 99%"
        fit="contain"
      />
    </el-main>
    <el-aside style="height: 100%;background-color: gray">
      <FunctionAside />
    </el-aside>
  </el-container>
</template>

<script>
import FunctionAside from "../components/function_aside";
export default {
  name: "EditPage",
  components: {FunctionAside},
  data(){
    return {

    }
  },
  mounted() {
    this.$store.commit("clearImage")
  },
  computed:{
    imageSelected(){
      return this.$store.state.imageShow
    }
  }
}
</script>

<style scoped>

</style>