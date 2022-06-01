import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div>
    count：{state.count}
    <br />
    <br />
    <button onClick={() => dispatch({ type: 'increment' })}>increment</button>&nbsp;&nbsp;
    <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
  </div>
}