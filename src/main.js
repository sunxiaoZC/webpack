const app = document.getElementById('app')

// //引入图片
import img from './images/222.png'

// 引入样式
import '@/style/index.css'
import '@/style/styleLess.less'
// 引入react
import React from 'react'
import ReactDOM from 'react-dom'
import TSindex from './TSindex'

class App extends React.Component {
  render () {
    return (
      <div>
        <h2 className='colorFont'>react简易版</h2>
        <Demo />
        <TSindex />
        <img src={img} alt='' className='Img' />
      </div>
    )
  }
}

function Demo () {
  return (
    <div>
      <h1>hooks</h1>
    </div>
  )
}
ReactDOM.render(<App />, app)
