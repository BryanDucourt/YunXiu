<template>
  <el-container style="height: 100%">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside
        width="10%"
        style="height: auto;background-color: #2b2b2b"
      >
        <router-view
          class="sidebar"
          name="sidebar"
        />
      </el-aside>
      <el-divider
        direction="vertical"
        style="margin: 0;height: 100%;"
      />
      <el-main style="height: 100%;background: #3c3f41">
        <router-view
          class="main"
          name="main"
        />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/Header.vue";
// import main_aside from "../components/main_aside";
export default {
  name: "Main",
  components:{
    Header,
    // main_aside
  },
  mounted() {
    this.$router.push("/main");
  }
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.el-header{
  padding: 0;
}
</style>