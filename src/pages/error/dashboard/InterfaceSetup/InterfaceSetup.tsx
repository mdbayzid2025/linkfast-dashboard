import { Button, Table } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import AddInterfaceModal from './AddInterfaceModal';
import InterfaceDetailsModal from './InterfaceDetailsModal';


const InterfaceSetup = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const dataSource = [
    {
      key: '1',
      title: 'Invite & Earn',
      description: 'Help your friends save and get rewarded together!Share your link with friends. Once they join and make a purchase, you’ll both receive rewards like bonus data or store credit automatically',
      image: 'https://images.pexels.com/photos/7986991/pexels-photo-7986991.jpeg',
    }
  ];

  const columns = [
    { title: 'SL', dataIndex: 'key', key: 'key' },
    {
      title: 'Image',
      render: (_: any, record: any) => (
        <img src={record.image || "/placeholder.webp"} className="w-24 h-20 object-contain rounded-md" alt="Interface" />
      )
    },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description', render: (text: string) => text?.length > 100 ? `${text.slice(0, 100)}...` : text, },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">
          <FiInfo size={18}
            className="text-[#009A54] cursor-pointer"
            onClick={() => {
              setSelectedUserData(record);
              setIsOpen(true);
            }}
          />
          <FaRegEdit
            onClick={() => { setOpen(true); setEditData(record); }}
            className="text-[#009A54] cursor-pointer"
            size={18}
          />
          <FaRegTrashAlt
            onClick={() => setOpenConfirmModal(true)}
            className="text-red-600 cursor-pointer"
            size={18}
          />
        </div>
      )
    }
  ];

  const handleDelete = () => {
    console.log("Interface deleted!");
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">Interface Setup</h1>
        <Button type="primary" size="large" onClick={() => setOpen(true)}>Add Interface</Button>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size="large"
        className="px-6 pt-4 transactionTable"
      />

      <AddInterfaceModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
      <CustomDeleteModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this interface?"
      />
      <InterfaceDetailsModal open={isOpen} setOpen={setIsOpen} data={selectedUserData} />
    </div>
  );
};

export default InterfaceSetup;
