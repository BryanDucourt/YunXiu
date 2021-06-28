<template>
  <el-container style="height: 100%">
    <el-main style="background-color: transparent">
      <el-row>
        <el-checkbox-group v-model="selectList">
          <el-col
            v-for="item in images"
            :key="item.filename"
            :span="4"
          >
            <el-card>
              <el-checkbox :label="item.b_64">
                <el-image
                  style="width: 100%;height: 100%"
                  :src="item.b_64"
                />
              </el-checkbox>
            </el-card>
          </el-col>
        </el-checkbox-group>
      </el-row>
    </el-main>
    <el-divider />
    <el-footer>
      <el-row align="middle">
        <el-col :span="2">
          <el-button>
            全选
          </el-button>
        </el-col>
        <el-col :span="2">
          <el-button>
            全部取消
          </el-button>
        </el-col>
        <el-col
          :span="2"
          style="justify-content: center"
        >
          <span style="color: gray;">
            已选择{{ counts }}张
          </span>
        </el-col>
        <el-col
          :span="2"
          :offset="14"
        >
          <el-button
            round
            type="primary"
            @click="handleNext"
          >
            修图
          </el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
// import {mapState} from 'vuex'
// const electron = require('electron')
export default {
  name: "MainPage",
  data() {
    return {
      selectList:[]
    }
  },
  computed:{
    images(){
      return this.$store.state.urls
    },
    counts(){
      return this.selectList.length
    }
  },
  methods:{
    handleNext(){
      this.$store.commit("updateFile",this.selectList)
      this.$router.push("/edit")
    },
    selectImage(){
      this.counts++
    },
  },

}

</script>

<style scoped>

</style>