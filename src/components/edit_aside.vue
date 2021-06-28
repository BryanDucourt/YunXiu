<template>
  <div
    class="imagetable"
  >
    <div class="table">
      <el-table
        :data="images"
        highlight-current-row
        @current-change="handleSelect"
        :header-cell-style="{background: '#2b2b2b'}"
        :row-style="{background: '#2b2b2b'}"
      >
        <el-table-column
          prop="image_b_64"
          label="图片"
        >
          <template #default="scope">
            <el-image :src="scope.row.image_b_64" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditAside",
  data(){
    return {
      images:[]
    }
  },
  methods:{
    handleSelect(val){
      this.$store.commit("updateImage",val.image_b_64)
    }
  },
  mounted() {
    for (let item of this.$store.state.files) {
      this.images.push({image_b_64:item})
    }

  }
}
</script>

<style scoped>
.table>>>.el-table__row>td{
  border: none;
}
.table>>>.el-table th.is-leaf{
  border:none;
}
.table>>> .el-table::before{
  height: 0;
}
.table>>> .el-table__empty-text{
  width: 100%;
  background-color: #2b2b2b;
}
</style>