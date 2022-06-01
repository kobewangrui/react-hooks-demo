import React, { useState, useEffect } from 'react'
import axios from 'axios'

//封装axios 发送网络请求的自定义Hook
function useAxios(url) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    //利用axios发送网络请求
    setLoading(true)
    axios.get(url) //发送一个get请求
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])
  return [loading, data, error]
}

// 使用
export default function AxiosDemo() {
  const url = 'https://api.apiopen.top/getJoke'
  //数组解构
  const [loading, data, error] = useAxios(url)
  if (loading) {
    return <div>loading...</div>
  }
  return error
    ? <div>{JSON.stringify(error)}</div>
    : <div>{JSON.stringify(data)}</div>
}
