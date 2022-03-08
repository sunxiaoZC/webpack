import Vue from 'vue'

import { mapState, mapMutations } from 'vuex'
Vue.mixin({
  data () {
    return {}
  },
  computed: {
    ...mapState(['count', 'userInfo', 'nowTime'])
  },
  methods: {
    ...mapMutations(['setCount'])
  }
})
