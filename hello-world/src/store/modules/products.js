import shop from '@/api/shop'

export default {
  namespaced: true,
  state: {
    all: [] //所有商品
  },
  getters: {},
  actions: {
    // 发送延时函数 获取所有商品  把商品赋值给all
    getAllProducts ({ commit }) {
      shop.getProducts(products => {
        commit('setProducts', products)
      })
    }
  },
  mutations: {
    setProducts (state, products) {
      state.all = products
    },
    // 查询商品中的商品id如果有就将inventory存货减一
    decrementProductInventory (state, { id }) {
      const product = state.all.find(product => product.id === id)
      product.inventory--
    }
  }
}
