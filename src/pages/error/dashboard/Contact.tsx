import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Table, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import CustomDeleteModal from '../../../components/shared/CustomDeleteModal';



export const contactData = [
  {
    key: '1',
    email: 'bayzid@example.com',
    contact: '01711-123456',
    country: 'Bangladesh',
    image: "https://images.pexels.com/photos/18935826/pexels-photo-18935826.jpeg",
  }]




const UsersList = () => {

  const [searchText, setSearchText] = useState('');
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [editData, setEditData] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();






  const handleDelete = () => {
    console.log("Deleting user:", selectedUser);
    setOpenConfirmModal(false);
  };


  const userColumns = [
    {
      title: "Name",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src={record.photo} className="w-full h-full object-cover rounded-full" alt="" />
          </div>
          <p className='text-[16px] font-medium'>{record.name}</p>
        </div>
      )
    },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Actions',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <Tooltip title="Edit">
            <FaRegEdit
              className="text-[#009A54] cursor-pointer"
              size={20}
              onClick={() => {
                setEditData(record);
                setOpen(true);
              }}
            />
          </Tooltip>
          <FaRegTrashAlt
            className="text-red-600 cursor-pointer"
            size={24}
            onClick={() => {
              setSelectedUser(record);
              setOpenConfirmModal(true);
            }}
          />
        </div>

      ),
    },
  ];

  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData)
    }

  }, [editData])


  const handleFinish = () => {

    setEditData(null);
    setOpen(!open);
    form.resetFields();
  };


  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-4 py-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">All Registry Users</h1>

        <Button onClick={() => {setOpen(true);
        }} type='primary' size='large'>Add Contact</Button>
      </div>

      <Table
        columns={userColumns}
        dataSource={contactData}
        pagination={{ pageSize: 5 }}
        className='transactionTable px-4'
      />

      <CustomDeleteModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this user?"
      />
      <Modal
        title="Enter Your Email"
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        okText="Submit"
        okButtonProps={{ size: 'large' }}
        cancelButtonProps={{ size: 'large' }}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input placeholder="example@email.com" size="large" />
          </Form.Item>
          <div className="flex justify-center">
            <Button type="primary" size="large" htmlType="submit">
              {editData ? 'Update Contact' : 'Add Contact'}
            </Button>
          </div>
        </Form>
      </Modal>

    </div>
  );
};

export default UsersList;
