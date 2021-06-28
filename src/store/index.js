import { createStore } from 'vuex'

export default createStore({
  state: {
    urls:[],
    files:[],
    imageShow: ""
  },
  mutations: {
    updateUrl(state,urls){
      state.urls = urls
    },
    clearUrl(state){
      state.urls = []
    },
    updateFile(state,files){
      state.files=files
    },
    updateImage(state,image){
      state.imageShow=image
    },
    clearImage(state){
      state.imageShow=""
    }
  },
  actions: {
  },
  modules: {
  }
})
