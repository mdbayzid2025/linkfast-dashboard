import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';
import Sidebar from './Sidebar';

const {Content} = Layout;
const MainLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sidebar />
      <Layout>
        <HeaderDashboard />
        <Content  className='overflow-y-scroll m-2 md:m-6'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout