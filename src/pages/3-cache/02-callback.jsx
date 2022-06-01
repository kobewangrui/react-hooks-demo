import React, { useState, memo, useMemo, useCallback } from 'react'

//子组件
//memo相当于PureComponent
const Child = memo(({ userInfo, onChange }) => {
  console.log('Child render...', userInfo)
  return <div>
    <p>This is Child {userInfo.name} {userInfo.age}</p>
    <input onChange={onChange}></input>
  </div>
})

//父组件
export default function Parent() {
  console.log('Parent  render...')
  const [count, setCount] = useState(0)
  const [name, setName] = useState('张童瑶')
  //const userInfo ={name,age:20}
  //用useMemo缓存数据,有依赖
  const userInfo = useMemo(() => {
    return { name, age: 21 }
  }, [name])
  //加了onChange后父组件改变子组件又开始渲染
  //function onChange(e){
  //	console.log(e.target.value)
  //}
  //用useCallback缓存函数
  const onChange = useCallback(e => {
    console.log(e.target.value)
  }, [])
  return <div>
    <p>
      useMomo demo&nbsp;&nbsp;
      <span>计数：{count}</span>&nbsp;&nbsp;
			<button onClick={() => setCount(count + 1)}>click</button>&nbsp;&nbsp;
      <button onClick={() => setName(name => '前端开发')}>点击切换名字</button>
    </p>
    <hr />
    <Child userInfo={userInfo} onChange={onChange}></Child >
  </div>
}