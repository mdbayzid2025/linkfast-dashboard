import { Select } from 'antd';
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { salesChartData } from '../../../../data/SalesChartData';

const { Option } = Select;
const SaleChart = () => {

    return (
        <div className='bg-white py-6 rounded-xl w-full'>
            <div className="flex items-center justify-between px-10 mb-4">
                <h1 className='text-xl font-bold'>Total Quotes <span className='font-normal'>Statistics</span> </h1>
                <Select defaultValue="2025" size='middle' className='w-[100px]'>
                    <Option value="2022">2022</Option>
                    <Option value="2023">2023</Option>
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={salesChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar barSize={10} radius={50} dataKey="saleTotal" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar barSize={10} radius={50} dataKey="category" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SaleChart