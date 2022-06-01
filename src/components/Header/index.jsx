import React, { Component } from 'react'
import headerStyle from './index.module.css'

export default class Header extends Component {
  render() {
    return (
      <div className={headerStyle['header']}>
        React Hooks PlayGround
      </div>
    )
  }
}
