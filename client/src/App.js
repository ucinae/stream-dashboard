import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Statistic from './routes/Statistic'
import Navbar from './components/Navbar'

const { Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Router>
        <Navbar />

        <Content style={{ padding: '0 50px', marginTop: 64, minHeight: '90vh' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/statistic" component={Statistic} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by hansol</Footer>
      </Router>
    </Layout>
  );
}

export default App;
