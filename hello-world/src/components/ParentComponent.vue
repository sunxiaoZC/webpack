<template>
  <div>
    <h1>父组件</h1>
    {{ counts }}
    {{ toCity }}
    <hr />
    <child-one :counts="counts" />
    <child-two @showCityName="updataCity" :sendData="toCity" />
    <child-three @changeCity="changeCity" :toCity="toCity" />
  </div>
</template>

<script>
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
import ChildThree from './ChildThree.vue'
export default {
  components: {
    ChildOne,
    ChildTwo,
    ChildThree
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
    },
    changeCity (value) {
      console.log(value)
      this.toCity = value
    }
  }
}
</script>
