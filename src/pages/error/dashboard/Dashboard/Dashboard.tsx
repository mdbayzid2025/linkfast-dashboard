import React from 'react'
import DashboardStats from './DashboardStats'
import SaleChart from './SaleChart'
import UserStatics from './UserStatics'
import { Col, Row } from 'antd'
import UpdateDataTable from './UpdateDataTable'

const Dashboard = () => {
  return (
    <div>
      <DashboardStats />
      <div className="bg-white p-4 rounded-xl mb-4">
      <Row gutter={15}>
      <Col span={16}>
      <UserStatics />
      </Col>
      <Col span={8}>
      <UpdateDataTable />
      </Col>
      </Row>
      </div>
      <SaleChart />
    </div>
  )
}

export default Dashboard