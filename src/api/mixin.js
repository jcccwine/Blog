import Vue from 'vue'

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/uploads'
    }
  }
})