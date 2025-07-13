import { Table } from 'antd';

export const dataSource = [
    {
        key: '1',
        action: 'Active',
        deviceId: 'MM4178MRV2',
        userId: '2341651561',
        date: '4/12/2025',
    },
    {
        key: '2',
        action: 'Active',
        deviceId: 'AB4578DCD2',
        userId: '5614564154',
        date: '4/12/2025',
    },
    {
        key: '3',
        action: 'Inactive',
        deviceId: 'FF4578EDD4',
        userId: '5724525544',
        date: '4/12/2025',
    },
    {
        key: '4',
        action: 'Active',
        deviceId: 'BB4578EED2',
        userId: '1256988452',
        date: '4/12/2025',
    },
    // {
    //     key: '5',
    //     action: 'Active',
    //     deviceId: 'FF4578EDD4',
    //     userId: '1236598632',
    //     date: '4/12/2025',
    // },
    // {
    //     key: '6',
    //     action: 'Active',
    //     deviceId: 'FF4578EDD4',
    //     userId: '5724525544',
    //     date: '4/12/2025',
    // },
];


export const columns = [
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text: string) => (
            <span style={{ color: text === 'Active' ? 'green' : 'red' }}>{text}</span>
        ),
    },
    {
        title: 'Device ID.',
        dataIndex: 'deviceId',
        key: 'deviceId',
    },
    {
        title: 'User ID.',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '',
        dataIndex: 'info',
        key: 'info',
        render: () => <i className="ri-information-line text-xl text-gray-400" />,
    },
];
const UpdateDataTable = () => {


    return (
        <div className='bg-[#FBFBFB] rounded-xl p-4'>
            <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">New Update</h1>
            </div>
            <Table size='small' columns={columns} dataSource={dataSource} pagination={false}/>
        </div>
    )
}

export default UpdateDataTable