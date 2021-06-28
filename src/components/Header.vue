<template>
  <div class="header">
    <el-row
      :gutter="20"
      style="width: 100%"
    >
      <el-col
        :span="4"
        class="logo"
      >
        logo here
      </el-col>
      <el-col
        :span="2"
        class="button"
      >
        <el-button
          type="info"
          round
          icon="el-icon-download"
          @click="toImport"
        >
          导入界面
        </el-button>
      </el-col>
      <el-col
        :span="2"
        class="button"
      >
        <el-button
          type="info"
          round
          icon="el-icon-magic-stick"
          @click="toEdit"
        >
          修图
        </el-button>
      </el-col>
      <el-col
        :span="2"
        class="button"
      >
        <el-button
          type="info"
          round
          icon="el-icon-tickets"
        >
          导出界面
        </el-button>
      </el-col>
      <el-col
        :span="1"
        class="button"
        :offset="11"
      >
        <el-button
          round
          type="warning"
          icon="el-icon-shopping-cart-2"
        />
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <el-button
            circle
            icon="el-icon-s-custom"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>test</el-dropdown-item>
              <el-dropdown-item>wuhu</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <el-button icon="el-icon-menu" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>1</el-dropdown-item>
              <el-dropdown-item>2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    toImport(){
      this.$router.push("/main")
    },
    toEdit(){
      this.$router.push("/edit")
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
}

</style>