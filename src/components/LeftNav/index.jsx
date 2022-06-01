import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import leftNavStyle from './index.module.css'
import logo from '../../logo.svg'

import { Menu } from 'antd';
import { BulbOutlined, CoffeeOutlined, DesktopOutlined, ExperimentOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

// 左侧导航的组件
export default class LeftNav extends Component {
  render() {
    return (
      <div>
        <div className={leftNavStyle['left-nav']}>
          <Link to="/" className={leftNavStyle['left-nav-header']}>
            <img src={logo} alt="logo" />
            <h1>Hooks</h1>
          </Link>
          <Menu theme="dark" mode="inline" selectedKeys={[window.location.pathname]} defaultOpenKeys={[window.location.pathname.split('/')[1]]}>
            <SubMenu key="1-basic" icon={<BulbOutlined />} title="1-basic">
              <Menu.Item key="/1-basic/01-state">
                <Link to="/1-basic/01-state">01-state</Link>
              </Menu.Item>
              <Menu.Item key="/1-basic/02-effect">
                <Link to="/1-basic/02-effect">02-effect</Link>
              </Menu.Item>
              <Menu.Item key="/1-basic/03-ref">
                <Link to="/1-basic/03-ref">03-ref</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="2-advanced" icon={<CoffeeOutlined />} title="2-advanced">
              <Menu.Item key="/2-advanced/01-context">
                <Link to="/2-advanced/01-context">01-context</Link>
              </Menu.Item>
              <Menu.Item key="/2-advanced/02-reducer">
                <Link to="/2-advanced/02-reducer">02-reducer</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="3-cache" icon={<DesktopOutlined />} title="3-cache">
              <Menu.Item key="/3-cache/01-memo">
                <Link to="/3-cache/01-memo">01-memo</Link>
              </Menu.Item>
              <Menu.Item key="/3-cache/02-callback">
                <Link to="/3-cache/02-callback">02-callback</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="4-custom" icon={<ExperimentOutlined />} title="4-custom">
              <Menu.Item key="/4-custom/01-axios">
                <Link to="/4-custom/01-axios">01-axios</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
