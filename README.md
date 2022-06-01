### 1   useState

（1）State Hook 让函数组件也可以有 state 状态，并进行状态数据的读写操作

（2）语法: const [xxx, setXxx] = React.useState(initValue)  

（3）useState() 说明：

参数：第一次初始化指定的值在内部作缓存

返回值：包含 2 个元素的数组，第 1 个为内部当前状态值，第 2 个为更新状态值的函数
（4）setXxx() 2 种写法:

setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值

setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

### 2   useEffect

useEffect 让纯函数有了副作用

Effect Hook 用于模拟类组件中的生命周期钩子

副作用包括：（1）发 ajax 请求数据获取（2）设置订阅 / 启动定时器（3）手动更改真实 DOM

**总结**

- useEffect 依赖 []，组件销毁执行 fn，等同于componentWillUnMount
- useEffect 无依赖或依赖[a,b]，组件更新时也会执行 fn，即下一次执行 useEffect 之前，就会执行 fn，无论更新还是卸载

**注意坑点？（待解决）**

useEffect 执行顺序问题

无法完全模拟DidUpdate?

### 3   useRef

useRef 两个用途：

（1）保存引用；（2）保存之前的值（缓存）