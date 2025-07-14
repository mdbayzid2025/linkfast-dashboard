import { Col, Modal, Row, Table, Tag } from 'antd';

const UserDetailsModal = ({ open, setOpen, userData }: {
    open: boolean,
    setOpen: (open: boolean) => void;
    userData: any;
}) => {
    const handleCloseModal = () => {
        setOpen(!open);
    }

    const transactionColumns = [
        { title: 'Transaction ID', dataIndex: 'id', key: 'id' },
        { title: 'SIM Name', dataIndex: 'simName', key: 'simName' },
        { title: 'Network', dataIndex: 'network', key: 'network' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Validity', dataIndex: 'validity', key: 'validity' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
            ),
        },
    ];
    return (
        <Modal
            // title="User Details"    
            centered
            title={<p className="text-xl font-semibold text-[#009A54]">User Details</p>}
            open={open}
            width={1000}            
            onCancel={handleCloseModal}
            footer={false}
        >
            <Row style={{ marginTop: 24 }} gutter={30}>
                <Col span={7}>
                    <div className="w-full h-[150px]">
                        <img src={userData?.image} className="h-full w-full object-cover" alt="" />
                    </div>
                </Col>
                <Col span={14}>
                    <Row gutter={[24, 12]}>
                        <Col style={{ fontSize: 16, fontWeight: 600 }} span={8}>Name</Col>
                        <Col style={{ fontSize: 16, fontWeight: 600 }} className='text-xl' span={16}>: {userData?.name}</Col>

                        <Col style={{ fontSize: 16 }} className='text-xl' span={8}>Email</Col>
                        <Col style={{ fontSize: 16 }} className='text-xl' span={16}>: {userData?.email}</Col>

                        <Col style={{ fontSize: 16 }} className='text-xl' span={8}>Contact</Col>
                        <Col style={{ fontSize: 16 }} className='text-xl' span={16}>: {userData?.contact}</Col>

                        <Col style={{ fontSize: 16 }} className='text-xl' span={8}>Country</Col>
                        <Col style={{ fontSize: 16 }} className='text-xl' span={16}>: {userData?.country}</Col>
                    </Row>
                </Col>
            </Row>
            <Table
                columns={transactionColumns}
                dataSource={userData?.transactions}
                pagination={{ pageSize: 7 }}
                rowKey="id"
                style={{ marginTop: 24 }}
                className=''
            />
        </Modal>
    )
}

export default UserDetailsModal