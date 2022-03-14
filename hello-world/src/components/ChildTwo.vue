<template>
  <div>
    <hr />
    <h3>子组件2</h3>

    <div class="train-city">
      <h3>父组件传给子组件的toCity:{{ sendData }}</h3>
      <br /><button @click="select(`大连`)">
        点击此处将‘大连’发射给父组件
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'childTwo',
  props: ['sendData'],
  methods: {
    select (value) {
      let data = {
        cityname: value
      }
      this.$emit('showCityName', data)
    }
  }
}
</script>
