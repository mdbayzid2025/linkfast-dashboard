import { Layout } from 'antd'
import React from 'react'
import Sidebar from './Sidebar'
import HeaderDashboard from './HeaderDashboard'

const {Content} = Layout;
const MainLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sidebar />
      <Layout>
        <HeaderDashboard />
        <Content style={{margin: 10}} className='overflow-y-scroll'/>
      </Layout>
    </Layout>
  )
}

export default MainLayout