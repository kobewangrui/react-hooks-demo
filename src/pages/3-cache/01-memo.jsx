import React, { useState, useMemo, memo } from 'react'

const UseMemoExample = () => {
  const [count, setCount] = useState(0)
  // const deps = Math.floor(count / 10)
  const memorizedText = useMemo(() => {
    console.log("run useMemo function")
    return `this is a memorized text ${new Date().toString()}`
  }, [])
  return (
    <div>
      {memorizedText}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

// useMemo做性能优化
//子组件，点击click按钮，count被修改，子组件虽然没有用count，但是也被更新渲染
/*
function Child({ userInfo }) {
  console.log('Child render...', userInfo)
  return <div>
    <p>This is Child {userInfo.name} {userInfo.age}</p>
  </div>
}*/

// 类似class PureComponent，对props进行浅层比较
//memo相当于PureComponent
const Child = memo(({ userInfo }) => {
  console.log('Child render...', userInfo)
  return <div>
    <p>This is Child {userInfo.name} age {userInfo.age}</p>
  </div>
})

function Parent() {
  console.log('Parent  render...')
  const [count, setCount] = useState(0)
  const [name, setName] = useState('张童瑶')
  // const userInfo = { name, age: 20 }
  // 用useMemo缓存数据，有依赖，name变化时缓存失效
  const userInfo = useMemo(() => {
    return { name, age: 24 }
  }, [name])
  return <div>
    <p>
      useMomo demo&nbsp;
      <span>计数{count}</span>&nbsp;
			<button onClick={() => setCount(count => count + 1)}>click</button>&nbsp;
      <button onClick={() => setName(name => '前端开发')}>切换名字</button>
    </p>
    <Child userInfo={userInfo}></Child >
  </div>
}

export default function MemoHooksDemo() {
  return (
    <div>
      <h2>基本示例：缓存组件渲染的时间</h2>
      <UseMemoExample />
      <br />
      <hr />
      <h2>做性能优化</h2>
      <Parent />
    </div>
  )
}