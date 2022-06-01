import React, { useState } from 'react'

// 原版类式组件
class Count extends React.Component {

  state = { count: 0 }

  add = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <p>当前求和为{this.state.count}</p>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}

// useState 写法
function UseStateDemo() {

  const [count, setCount] = useState(0)
  // 如果有两个状态？render 几次 —— 1次
  const [count1, setCount1] = useState(0)

  console.log('useStateDemo render')
  return (
    <div>
      <p>你点击了 {count} 次</p>
      <p>+2 的结果： {count1} </p>
      <button onClick={() => {
        setCount(count => count + 1)
        setCount1(count1 => count1 + 2)
      }}>点击</button>
    </div>
  )
}

export default function StateHooksDemo() {
  return (
    <div>
      <h2>类式组件写法</h2>
      <br />
      <Count />
      <br />
      <hr />
      <h2>Hooks写法</h2>
      <br />
      <UseStateDemo />
    </div>
  )
}