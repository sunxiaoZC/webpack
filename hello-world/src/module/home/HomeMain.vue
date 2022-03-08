<template>
  <div>
    <h1>Home</h1>
    <div>
      {{ userInfo.username }}
    </div>
    <h1>{{ count }}</h1>
    <router-link to="/about">去测试</router-link>
    <product-list />
    <shopping-cart />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
const { mapState } = createNamespacedHelpers('test')
export default {
  name: 'homeMain',
  computed: {
    ...mapState(['userInfo', 'count'])
  },
  components: { ProductList, ShoppingCart }
}
</script>
