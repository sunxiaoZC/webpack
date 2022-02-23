import _ from 'lodash'
import demo from './component/Demo'
import React from 'react'
import ReactDOM from 'react-dom'
const app = document.getElementById('app')

function App () {
  return (
    <div>
      <h2>我是react组件 ，简单化,根组件</h2>
    </div>
  )
}
ReactDOM.render(<App />, app)
