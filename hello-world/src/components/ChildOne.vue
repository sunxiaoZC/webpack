<template>
  <div>
    <h3>子组件1</h3>
    <p>{{ count }}</p>
    <button @click="setCount">中央事件总线</button>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  },
  data () {
    return {}
  },
  methods: {
    setCount () {
      this.$bus.$emit('changeCount', 10)
    }
  }
}
</script>
