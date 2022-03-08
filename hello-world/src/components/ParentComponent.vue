<template>
  <div>
    <h1>父组件</h1>
    <hr />
    <child-one :count="count" />
    <child-two />
  </div>
</template>

<script>
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
export default {
  components: {
    ChildOne,
    ChildTwo
  },
  data () {
    return {
      count: 100
    }
  },
  mounted () {
    this.$bus.$on('changeCount', payload => {
      this.count += payload
    })
  }
}
</script>
