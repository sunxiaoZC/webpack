/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure. 随机生成失败
      //  navigator.webdriver 谷歌浏览器中的一个判断 默认为false
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
    }, 100)
  }
}
