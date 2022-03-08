import shop from '@/api/shop'

export default {
  namespaced: true,
  state: {
    items: [], // 购物车列表
    checkoutStatus: null // 结转列表状态
  },
  getters: {
    cartProducts: (state, getters, rootState) => {
      return state.items.map(({ id, quantity }) => {
        const product = rootState.products.all.find(
          product => product.id === id
        )
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity
        }
      })
    },
    // 计算当期购物车中的总金额
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    }
  },
  actions: {
    // 结算购物车
    checkout ({ commit, state }, products) {
      // 解构当前的购物车中的列表
      // 防止触发失败回调时  回滚数据丢失
      const savedCartItems = [...state.items]
      commit('setCheckoutStatus', null)
      // 清空购物车
      commit('setCartItems', { items: [] })
      shop.buyProducts(
        products,
        () => commit('setCheckoutStatus', 'successful'),
        () => {
          commit('setCheckoutStatus', 'failed')
          // 回滚到发送请求之前保存的购物车
          commit('setCartItems', { items: savedCartItems })
        }
      )
    },
    //添加商品进入购物车
    addProductToCart ({ state, commit }, product) {
      // 结算列表
      commit('setCheckoutStatus', null)
      // 判断当前商品的数量 是否大于0
      if (product.inventory > 0) {
        // 当前加入的商品是否已经添加
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
          // 如果没有购物车中暂无此商品  那么就给购物车列表添加一个新商品
          commit('pushProductToCart', { id: product.id })
        } else {
          // 否则就计算当前已存在同种商品的数量
          commit('incrementItemQuantity', cartItem)
        }
        // remove 1 item from stock
        commit(
          'products/decrementProductInventory',
          { id: product.id },
          { root: true }
        )
      }
    }
  },
  mutations: {
    // 添加商品到购物车中
    pushProductToCart (state, { id }) {
      state.items.push({
        id,
        quantity: 1
      })
    },

    incrementItemQuantity (state, { id }) {
      // 查找当前加入的商品和对应在购物车里面的商品
      const cartItem = state.items.find(item => item.id === id)
      // 将他的数量加1
      cartItem.quantity++
    },

    // 将当前的购物车赋值
    setCartItems (state, { items }) {
      state.items = items
    },

    // 设置当前的结算按钮的状态
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }
}
