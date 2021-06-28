<template>
  <div
    class="datatable"
    style="height: 100%"
  >
    <el-container style="height: 100%">
      <el-main style="padding: 0;border: none">
        <div class="table">
          <el-table
            :data="folders"
            highlight-current-row
            @current-change="handleSelect"
            :header-cell-style="{background:'#2b2b2b'}"
            :row-style="{background:'#2b2b2b',border:'none'}"
          >
            <el-table-column
              prop="foldername"
              label="文件夹"
            />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button
                  size="mini"
                  circle
                  @click="handleDelete(scope.$index,scope.row)"
                  icon="el-icon-delete"
                />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
     
      <el-footer>
        <el-button
          type="primary"
          @click="openDialog()"
        >
          选择文件夹
        </el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
const electron = require('electron')
export default {
  name: "MainAside",
  data() {
    return {
      folderSelected: '',
      folders:[
      ],
      files:[]
    }
  },
  methods:{
    handleSelect(val){
      this.listFile(val.foldername)
    },
    handleDelete(index, row){
      this.folders.splice(row,1)
      this.$store.commit("clearUrl")
      this.files=[]
    },
    openDialog(){
      electron.remote.dialog.showOpenDialog(electron.remote.getCurrentWindow(),{properties: ['openDirectory']}
          // (foldername)=>{
          //   if (foldername===1) {
          //     this.folderSelected=foldername[0]
          //     this.listFile(this.folderSelected)
          //   }
          // })
      ).then((foldername) => {
        if (foldername.filePaths) {
          this.folderSelected=foldername.filePaths[0]
          // this.folders.push({foldername:this.folderSelected.split('/').slice(-1)})
          this.folders.push({foldername:this.folderSelected})
          this.listFile(this.folderSelected)
        }
      })
    },
    listFile(folderPath){
      const fs = require('fs')
      const path = require('path')
      this.files=[]
      fs.readdir(folderPath, (err,file) => {
        if (err) {
          return alert(err)
        }
        for (let filename of file) {
          const stat = fs.statSync(path.join(folderPath,filename))
          if (stat.isFile()) {
            if (path.extname(filename).toLowerCase()==='.jpg' || path.extname(filename).toLowerCase()==='.png'){
              let encode = 'data:image/'+path.parse(filename).ext.slice(1)+";base64,"+fs.readFileSync(folderPath.concat("/"+filename)).toString('base64')
              this.files.push({
                // filePath: folderPath.concat('/'),
                filename: path.parse(filename).name,
                // ext: path.parse(filename).ext
                b_64: encode
              })

            }
          }
        }
      })
      this.$store.commit("updateUrl",this.files)
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