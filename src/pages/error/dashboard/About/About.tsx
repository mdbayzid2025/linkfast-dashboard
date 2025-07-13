import { Button, Table, Tooltip } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import AddAboutModal from './AddAboutDataModal';
import { FiInfo } from 'react-icons/fi';
import AboutDetailsModal from './AboutDetailsModal';

const About = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
    const [selected, setSelected] = useState<any | null>(null);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedAboutData, setSelectedAboutData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [abouts, setAbouts] = useState([
    {
      key: '1',
      title: 'Our Mission',
      priority: 1,
      image: 'https://images.pexels.com/photos/7986991/pexels-photo-7986991.jpeg',
      description: '<p>We aim to make digital SIMs mainstream.</p>'
    }
  ]);


  const handleSubmit = (values: any) => {
    if (editData) {
      const updated = abouts.map((item) => (item.key === editData.key ? { ...item, ...values } : item));
      setAbouts(updated);
    } else {
      const newItem = { ...values, key: Date.now().toString() };
      setAbouts([newItem, ...abouts]);
    }
    setEditData(null);
  };

  const handleDelete = () => {
    setAbouts(abouts.filter((item) => item.key !== selected.key));
    setOpenDelete(false);
  };

  const columns = [
    {
      title: 'Image',
      render: (_: any, record: any) => (
        <div className="w-12 rounded-lg">
          <img src={record.icons || "/place-holder.webp"} alt='Bank card' className='' />
        </div>
      )
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      sorter: (a: any, b: any) => a.priority - b.priority,
    },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">
          <FiInfo size={18}
            className="text-[#009A54] cursor-pointer"
            onClick={() => {
              setSelectedAboutData(record);
              setIsOpen(true);
            }}
          />
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
          <Tooltip title="Delete">
            <FaRegTrashAlt
              className="text-red-600 cursor-pointer"
              size={18}
              onClick={() => {
                setSelected(record);
                setOpenDelete(true);
              }}
            />
          </Tooltip>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">Manage About Sections</h1>
        <Button type="primary" size="large" onClick={() => setOpen(true)}>
          Add Section
        </Button>
      </div>

      <Table
        className="px-6 pt-4 transactionTable"
        columns={columns}
        dataSource={abouts}
        pagination={false}
        size="large"
      />

      <AddAboutModal
        open={open}
        setOpen={setOpen}
        editData={editData}
        setEditData={setEditData}
        onSubmit={handleSubmit}
      />

      <CustomDeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Are you sure you want to delete this section?"
        onConfirm={handleDelete}
      />
      <AboutDetailsModal open={isOpen} setOpen={setIsOpen} data={selectedAboutData} />
    </div>
  );
};

export default About;
