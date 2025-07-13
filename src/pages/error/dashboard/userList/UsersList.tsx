import { SearchOutlined } from '@ant-design/icons';
import { Input, Table } from 'antd';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import { usersWithTransactions } from '../../../../data/UsersWithTransactionData';
import UserDetailsModal from './UserDetailsModal';


const UsersList = () => {

  const [searchText, setSearchText] = useState('');
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [selectedUserData, setSelectedUserData] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = () => {
    console.log("Deleting user:", selectedUser);
    setOpenConfirmModal(false);
  };

  const userColumns = [
    { title: "Name", 
      render: (_:any, record: any)=>(
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src={record.photo} className="w-full h-full object-cover rounded-full" alt="" />            
          </div>
          <p className='text-[16px] font-medium'>{record.name}</p>
        </div>
      )},
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
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

  const filteredUsers = usersWithTransactions.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.contact.includes(searchText)
  );



  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">All Registry Users</h1>

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
        dataSource={filteredUsers}        
        pagination={{ pageSize: 5 }}        
        className='transactionTable px-6'
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

export default UsersList;
