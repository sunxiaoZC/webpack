import Vue from 'vue'
import Vuex from 'vuex'
import test from '@/store/modules/test'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    test,
    cart,
    products
  },
  state: {
    count: 100,
    cart: {
      added: 1
    },
    nowTime: new Date().getTime()
  },
  mutations: {
    // 提交同步操作 且必须是同步
    changCount (state, n) {
      state.count += n
    },
    setCount (state) {
      state.count++
    }
  },
  actions: {
    // 提交异步的操作
    changCountAsync ({ commit }) {
      setTimeout(() => {
        commit('setCount')
      }, 1000)
    }
    // checkout ({ commit, state }, products) {
    //   // 把当前购物车的物品备份起来
    //   const savedCartItems = [...state.cart.added]
    //   // 发出结账请求，然后乐观地清空购物车
    //   commit(types.CHECHOUT_REQUEST)
    //   // 购物 API 接收一个成功回调 和 一个失败回调
    //   shop.buyProducts(
    //     products,
    //     // 成功操作
    //     () => commit(types.CHECHOUT_SUCCESS),
    //     // 失败操作
    //     () => commit(types.CHECHOUT_FALURE, savedCartItems)
    //   )
    // }
  },
  getters: {
    // 依赖state，返回新的状态
  }
})
