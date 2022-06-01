import React, { Component } from 'react'

import LeftNav from '../../components/LeftNav'
import Header from '../../components/Header'

import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router';

import StateHooksDemo from '../1-basic/01-state'
import EffectHooksDemo from '../1-basic/02-effect'
import RefHooksDemo from '../1-basic/03-ref'
import ContextHooksDemo from '../2-advanced/01-context'
import ReducerHooksDemo from '../2-advanced/02-reducer'
import MemoHooksDemo from '../3-cache/01-memo'
import CallbackHooksDemo from '../3-cache/02-callback'
import AxiosHooksDemo from '../4-custom/01-axios'

const { Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider breakpoint="lg"
          collapsedWidth="0">
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ background: '#fff', margin: '24px 16px 0', padding: '20px' }}>
            <Switch>
              <Route path='/1-basic/01-state' component={StateHooksDemo} />
              <Route path='/1-basic/02-effect' component={EffectHooksDemo} />
              <Route path='/1-basic/03-ref' component={RefHooksDemo} />
              <Route path='/2-advanced/01-context' component={ContextHooksDemo} />
              <Route path='/2-advanced/02-reducer' component={ReducerHooksDemo} />
              <Route path='/3-cache/01-memo' component={MemoHooksDemo} />
              <Route path='/3-cache/02-callback' component={CallbackHooksDemo} />
              <Route path='/4-custom/01-axios' component={AxiosHooksDemo} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', position: 'sticky', top: '100vh' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
