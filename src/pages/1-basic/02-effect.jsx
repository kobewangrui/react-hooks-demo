import React, { Component, useEffect, useState } from 'react'

// class 组件
class FriendStatusClassDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  render() {
    return (
      <div>
        好友 {this.props.friendId} 在线状态：{this.state.status.toString()}&nbsp;
        <button onClick={() => { this.setState((state, props) => { return { status: !state.status } }) }}>点击切换状态</button>
      </div>
    )
  }
  componentDidMount() {
    console.log(`类组件 DidMount 开始监听 ${this.props.friendId} 的在线状态`)
  }
  componentWillUnmount() {
    console.log(`类组件 WillUnMount 结束监听 ${this.props.friendId} 的在线状态`)
  }
  // friendId更新
  componentDidUpdate(preProps, preState) {
    console.log(`类组件 DidUpdate 结束监听 ${preProps.friendId} 的在线状态`)
    console.log(`类组件 DidUpdate 开始监听 ${this.props.friendId} 的在线状态`)
  }
}

// useEffect 写法
function FriendStatus({ friendId }) {
  const [status, setStatus] = useState(false)

  // DidMount 和 DidUpdate
  useEffect(() => {
    console.log(`hooks 开始监听 ${friendId} 在线状态`)

    // 此处并不完全等同于 WillUnMount
    // props 发生变化, 即更新, 也会执行结束监听
    // 准确的说：返回的函数, 会在下一次 effect 执行之前, 被执行
    return () => {
      console.log(`hooks 结束监听 ${friendId} 在线状态`)
    }
  })

  return <div>
    好友 {friendId} 在线状态：{status.toString()} &nbsp;
    <button onClick={() => { setStatus(status => !status) }}>点击切换状态</button>
  </div>
}

// useEffect 完整写法 完全改造版(有坑？)
/*
function FriendStatusTotal({ friendId }) {

  const [status, setStatus] = useState(false)
  const [initFlag, setInitFlag] = useState(true)
  const prev = useRef(null)

  prev.current = friendId

  // DidMount
  useEffect(() => {
    console.log(`hooks 完整版 DidMount 开始监听 ${friendId} 在线状态`)
    setInitFlag(x => !x)
  }, [])

  // WillUnMount
  useEffect(() => {
    return () => {
      console.log(`hooks 完整版 WillUnMount 结束监听 ${friendId} 在线状态`)
    }
  }, [])

  // DidUpdate
  useEffect(() => {
    // 解决一开始就打印的问题
    if (!initFlag) {
      console.log(`hooks 完整版 DidUpdate 开始监听 ${friendId} 的在线状态`)
      return () => {
        console.log(`hooks 完整版 DidUpdate 结束监听 ${friendId} 的在线状态`)
      }
    }
  }, [friendId, status])

  return <div>
    好友 {friendId} 在线状态：{status.toString()} &nbsp;
    <button onClick={() => { setStatus(status => !status) }}>点击切换状态</button>
  </div>

}
*/

export default function EffectHooksDemo() {

  const [friendId, setFriendId] = useState(0)

  return (
    <div>
      <h2>类式组件写法</h2>
      <br />
      <FriendStatusClassDemo friendId={friendId} />
      <br />
      <hr />
      <h2>Hooks写法</h2>
      <br />
      <FriendStatus friendId={friendId} />
      <br />
      {/* <h2>Hooks完全模拟写法</h2>
      <br />
      <FriendStatusTotal friendId={friendId} />
      <br /> */}
      <button onClick={() => setFriendId(x => x + 1)}>点我切换好友</button>
    </div>
  )
}
