import { Select } from 'antd';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { userChartData } from '../../../../data/Chart/UserChartData';

const { Option } = Select;

const UserStatics = () => {
    return (
        <div className="w-full bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between px-6 mb-4">
                <h1 className='text-xl font-bold'>User <span className='font-normal'>Statistics</span> </h1>
                <Select defaultValue="2025" size='middle' className='w-[100px]'>
                    <Option value="2022">2022</Option>
                    <Option value="2023">2023</Option>
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={userChartData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#009A54" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#009A54" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                        cursor={{
                            stroke: 'rgba(0, 154, 84, .5)',
                            strokeWidth: 3,
                        }}
                    />
                    <Area type="monotone" dataKey="totalActive" stroke="#009A54" fillOpacity={1} fill="url(#colorUser)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default UserStatics