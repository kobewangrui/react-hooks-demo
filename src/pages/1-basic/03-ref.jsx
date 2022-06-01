import React, { useRef, useState } from 'react'

// useRef 管理 Input 框, 点击按钮的时候获得焦点
function UseRefExample() {
  const refInput = useRef();
  return <div>
    <input ref={refInput} />&nbsp;&nbsp;
    <button onClick={() => { refInput.current.focus() }}>Focus</button>
  </div>
}

// useRef保存了计数器例子中改变之前的counter值(缓存功能)
function UseRefExample2() {
  const [counter, setCounter] = useState(0)
  const pre = useRef(null)
  return (
    <div>
      <p>当前值：{counter}</p>
      <p>之前的值：{pre.current}</p>
      <button onClick={() => { pre.current = counter; setCounter(x => x + 1) }}>Click me to add</button>&nbsp;&nbsp;
      <button onClick={() => { pre.current = counter; setCounter(x => x - 1) }}>Click me to sub</button>
    </div>
  )
}

export default function RefHooksDemo() {
  return (
    <div>
      <h2>useRef 示例一</h2>
      <UseRefExample />
      <br />
      <hr />
      <h2>useRef 示例二</h2>
      <UseRefExample2 />
    </div>
  )
}