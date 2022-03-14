<template>
  <div>
    {{ toCity }}
    <br />
    <input placeholder="请输入想要去的城市" />
    <button @click="$emit('changeCity', '湖北')" />
  </div>
</template>

<script>
export default {
  name: 'childThree',
  props: ['toCity']
}
</script>
