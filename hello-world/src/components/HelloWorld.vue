<template>
  <div class="hello">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
.font {
  color: yellow;
}
</style>
