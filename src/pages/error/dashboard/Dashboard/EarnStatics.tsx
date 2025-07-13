import { Select } from 'antd';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const { Option } = Select;

const EarnStatics = () => {


  return (
    <div className='bg-white py-6 rounded-xl  w-full'>
      <div className="flex items-center justify-between px-10 mb-4">
        <h1 className='text-xl font-bold'>Earning <span className='font-normal'>Statistics</span> </h1>
        <Select defaultValue="2025" size='middle' className='w-[100px]'>
          <Option value="2022">2022</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
          <Option value="2025">2025</Option>
          <Option value="2026">2026</Option>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={200}
      >
        <LineChart
          data={earnChartData}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          <Line type="monotone" dataKey="saleTotal" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default EarnStatics



export const earnChartData = [
  { name: "Jan", saleTotal: 70, profit: 54 },
  { name: "Feb", saleTotal: 85, profit: 60 },
  { name: "Mar", saleTotal: 90, profit: 75 },
  { name: "Apr", saleTotal: 75, profit: 58 },
  { name: "May", saleTotal: 100, profit: 80 },
  { name: "Jun", saleTotal: 95, profit: 68 },
  { name: "Jul", saleTotal: 110, profit: 88 },
  { name: "Aug", saleTotal: 120, profit: 60 },
  { name: "Sep", saleTotal: 105, profit: 72 },
  { name: "Oct", saleTotal: 115, profit: 68 },
  { name: "Nov", saleTotal: 98, profit: 77 },
  { name: "Dec", saleTotal: 130, profit: 95 },
];
