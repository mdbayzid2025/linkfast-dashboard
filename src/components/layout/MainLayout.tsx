import { Layout } from 'antd'
import React from 'react'
import Sidebar from './Sidebar'
import HeaderDashboard from './HeaderDashboard'
import { Outlet } from 'react-router-dom';

const {Content} = Layout;
const MainLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sidebar />
      <Layout>
        <HeaderDashboard />
        <Content style={{margin: 24}} className='overflow-y-scroll'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout