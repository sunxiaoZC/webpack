import _ from 'lodash'
const app = document.getElementById('app')
// 引入react
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render () {
    return (
      <div>
        <h2>我是react组件 ，简单化,根组件</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, app)
// 静态引入
// loadsh 在当前script 中使用import 引入
// import './style.css'
// import Icon from './photo.jpeg'

// import printMe from './print'
// function component () {
//   const element = document.createElement('div')

//   // 创建一个div
//   element.innerHTML = _.join(['Hello ', ' webpack'], '')

//   // 添加类名 改变样式
//   element.classList.add('hello')

//   // 将图像添加到我们已经存在的 div 中
//   const myIcon = new Image()
//   myIcon.src = Icon
//   element.appendChild(myIcon)

//   const btn = document.createElement('button')
//   btn.innerHTML = '点击触发'
//   btn.onclick = printMe()
//   element.appendChild(btn)
//   return element
// }

// document.body.appendChild(component())

//dynamic import(动态导入) 来分离出一个 chunk：
// function getComponent () {
//   const element = document.createElement('div')
//   return import('lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div')
//       element.innerHTML = _.join(['Hello', ' Webpack'])
//       return element
//     })
//     .catch(error => '加载失败')
// }
// getComponent().then(component => {
//   document.body.appendChild(component)
// })

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('调用printMe这个函数 会热更新')
//     printMe()
//   })
// }
