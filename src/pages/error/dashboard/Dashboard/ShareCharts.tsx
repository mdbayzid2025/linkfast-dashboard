import { Select } from 'antd';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const {Option} = Select;

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560', '#775DD0', '#00E396', '#FEB019', '#FF66C3', '#546E7A', '#26A69A', '#D10CE8'];

const data = [
    { name: 'Jan', share: 24 },
    { name: 'Feb', share: 13 },
    { name: 'Mar', share: 85 },
    { name: 'Apr', share: 39 },
    { name: 'May', share: 48 },
    { name: 'Jun', share: 38 },
    { name: 'Jul', share: 43 },
    { name: 'Aug', share: 30 },
    { name: 'Sep', share: 21 },
    { name: 'Oct', share: 40 },
    { name: 'Nov', share: 25 },
    { name: 'Dec', share: 32 },
];

// const TriangleBar = (props: any) => {
//     const { fill, x, y, width, height } = props;
//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

const ShareChart = () => {
    return (
        <div className="w-full bg-white p-4 rounded-xl">

            <div className="flex items-center justify-between px-6 mb-4">
                <h1 className="text-xl font-bold">
                    Share <span className="font-normal">Statistics</span>
                </h1>
                <div className="flex items-center gap-6">                    
                    <Select defaultValue="2025" size="middle" className="w-[100px]">
                        <Option value="2022">2022</Option>
                        <Option value="2023">2023</Option>
                        <Option value="2024">2024</Option>
                        <Option value="2025">2025</Option>
                        <Option value="2026">2026</Option>
                    </Select>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Bar dataKey="share" shape={<TriangleBar />} label={{ position: 'top' }}> */}
                    <Bar dataKey="share" barSize={10} label={{ position: 'top' }}>
                        {data.map( (index: any) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ShareChart;
