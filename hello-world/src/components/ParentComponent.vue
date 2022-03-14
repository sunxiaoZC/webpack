<template>
  <div>
    <h1>父组件</h1>
    {{ counts }}
    <hr />
    <child-one :counts="counts" />
    <child-two @showCityName="updataCity" :sendData="toCity" />
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
      counts: 100,
      toCity: '北京'
    }
  },
  mounted () {
    this.$bus.$on('changeCount', payload => {
      this.counts += payload
    })
  },
  methods: {
    updataCity (data) {
      this.toCity = data.cityname
    }
  }
}
</script>
