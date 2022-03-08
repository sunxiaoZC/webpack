<template>
  <div>
    <h1>{{ count }}</h1>
    <h3>现在时间 {{ nowTime | timeFormat('YYYY-MM-DD HH:MM:SS') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>
