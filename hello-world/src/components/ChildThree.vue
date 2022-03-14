<template>
  <div>
    <hr />
    {{ toCity }}
    <br />
    <input ref="city" placeholder="请输入想要去的城市" />
    <button @click="$emit('changeCity', '湖北')">发送</button>
    <br />
    <button @click="$emit('changeCity', $refs.city.value)">发送</button>
  </div>
</template>

<script>
export default {
  name: 'childThree',

  props: ['toCity']
}
</script>
