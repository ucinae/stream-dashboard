import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const Navbar = () => {
  return (
    <Header>
      <Menu 
        theme='dark' 
        mode='horizontal' 
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/statistic'>Statistic</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navbar
