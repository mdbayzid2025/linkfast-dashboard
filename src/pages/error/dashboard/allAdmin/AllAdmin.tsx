import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';


import { FiInfo } from 'react-icons/fi';
import UserDetailsModal from '../userList/UserDetailsModal';
import { adminData } from '../../../../data/AdminData';


const AllAdmin = () => {

  const [searchText, setSearchText] = useState('');
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [selectedUserData, setSelectedUserData] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  
  const handleDelete = () => {
    console.log("Deleting user:", selectedUser);
    setOpenConfirmModal(false);
  };

  const userColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <FiInfo size={24}
            className="text-[#009A54] cursor-pointer"            
            onClick={() => {
              setSelectedUserData(record);
              setIsOpen(true);
            }}
          />
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


    const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: any) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-4 py-6">
        <h1 className="text-xl font-semibold">All Registry Users</h1>

        <div className="relative">
          <Input
            className="shadow-sm"
            placeholder="Search here"
            allowClear
            style={{
              width: 350,
              padding: "6px 12px 6px 6px",
              borderRadius: "30px",
            }}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={
              <SearchOutlined
                style={{
                  fontSize: "16px",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor: "#B7DBC9",
                }}

              />
            }
          />

        </div>
      </div>

      <Table
        columns={userColumns}
        dataSource={adminData}        
        pagination={{ pageSize: 5 }}
        rowSelection={{ type: "checkbox", ...rowSelection }}
        className='transactionTable px-4'
      />

      <CustomDeleteModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this user?"
      />
      <UserDetailsModal open={isOpen} setOpen={setIsOpen} userData={selectedUserData} />
    </div>
  );
};

export default AllAdmin;
