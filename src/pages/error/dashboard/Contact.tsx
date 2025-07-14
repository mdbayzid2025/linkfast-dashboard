import { Button, Form, Input, Modal, Table, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import CustomDeleteModal from '../../../components/shared/CustomDeleteModal';
// import CustomDeleteModal from '../../../components/shared/CustomDeleteModal';



export const contactData = [
  {
    key: '1',
    email: 'bayzid@example.com',
    contact: '01711-123456',
    country: 'Bangladesh',
    image: "https://images.pexels.com/photos/18935826/pexels-photo-18935826.jpeg",
  }]




const UsersList = () => {

  // const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [editData, setEditData] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const [openConfirmModal, setOpenConfirmModal] = useState(false);




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
              size={18}
              onClick={() => {
                setEditData(record);
                setOpen(true);
              }}
            />
          </Tooltip>
          <FaRegTrashAlt
            className="text-red-600 cursor-pointer"
            size={18}
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
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">Contact</h1>

        <Button onClick={() => {
          setOpen(true);
        }} type='primary' size='large'>Add Contact</Button>
      </div>

      <Table
        columns={userColumns}
        dataSource={contactData}
        pagination={{ pageSize: 5 }}
        className='transactionTable px-6'
      />

      <CustomDeleteModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this user?"
      /> 
      <Modal
        title={<p className="text-xl font-semibold text-[#009A54]">Add Contact</p>}
        centered
        open={open}
        onCancel={() => {
          setOpen(false);
          setEditData(null);
          form.resetFields();
        }}
        footer={false}
      >
        {/* N.B. message at the top, clean and subtle */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 px-4 py-2 rounded-md text-xs mb-4">
          <span className="font-semibold">Note:</span> Contact form messages will arrive at this email.
        </div>

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

          <div className="flex justify-center mt-6">
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
