<template>
  <div>
    <h1>about</h1>
    <div>{{ count }}</div>
    <button @click="changeCount">加10</button>
    <button @click="setCount">count++</button>
    <button @click="changCountAsync">action 延时一秒加1</button>
    <router-link to="/home">去主页</router-link>
    <parent-component />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ParentComponent from '@/components/ParentComponent.vue'
export default {
  name: 'aboutDetail',
  components: {
    ParentComponent
  },
  computed: mapState(['count']),
  methods: {
    changeCount () {
      this.changCount(150)
    },
    ...mapMutations(['changCount', 'setCount']),
    ...mapActions(['changCountAsync'])
  }
}
</script>
