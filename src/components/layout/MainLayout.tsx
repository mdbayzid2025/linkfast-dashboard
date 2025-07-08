import { Layout } from 'antd'
import React from 'react'
import Sidebar from './Sidebar'
import HeaderDashboard from './HeaderDashboard'

const {Content} = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderDashboard />
        <Content />
      </Layout>
    </Layout>
  )
}

export default MainLayout