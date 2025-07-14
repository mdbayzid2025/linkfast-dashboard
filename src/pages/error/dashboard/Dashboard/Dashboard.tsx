import DashboardStats from './DashboardStats'
import EarnStatics from './EarnStatics'
import SaleChart from './SaleChart'
import ShareCharts from './ShareCharts'
import UserStatics from './UserStatics'

const Dashboard = () => {

  return (
    <div>

      <DashboardStats />
      
        <div className="w-full flex items-center gap-4 justify-between mb-4" >
          <UserStatics />
          <ShareCharts />
        </div>      
      <div className="w-full flex items-center gap-4 justify-between">
        <SaleChart />
        <EarnStatics />
      </div>

    </div>
  )
}

export default Dashboard