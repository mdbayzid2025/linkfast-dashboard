import { Button, Table, Tooltip } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import AddBlogModal from './AddBlogModal';
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import { FiInfo } from 'react-icons/fi';
import DetailsBlogs from './DetailsBlogs';

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const [selectedBlogData, setSelectedBlogData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState<any | null>(null);
  const [openDelete, setOpenDelete] = useState(false);

  const [blogs, setBlogs] = useState([
    {
      key: '1',
      title: 'Why eSIM is the Future',
      image: 'https://images.pexels.com/photos/7986991/pexels-photo-7986991.jpeg',
      description: '<p>This is the future of travel.</p>'
    }
  ]);


  const handleSubmit = (values: any) => {
    if (editData) {
      const updated = blogs.map((b) => (b.key === editData.key ? { ...b, ...values } : b));
      setBlogs(updated);
    } else {
      const newBlog = { ...values, key: Date.now().toString() };
      setBlogs([newBlog, ...blogs]);
    }
    setEditData(null);
  };

  const handleDelete = () => {
    setBlogs(blogs.filter((b) => b.key !== selected.key));
    setOpenDelete(false);
  };

  const columns = [
    {
      title: 'Image',
      render: (_: any, record: any) => (
        <img src={record.image} className="w-20 h-16 object-contain rounded-md" alt="blog" />
      )
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">
          <FiInfo size={24}
            className="text-[#009A54] cursor-pointer"
            onClick={() => {
              setSelectedBlogData(record);
              setIsOpen(true);
            }}
          />

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
          <Tooltip title="Delete">
            <FaRegTrashAlt
              className="text-red-600 cursor-pointer"
              size={20}
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
      <div className="flex items-center justify-between px-6 pt-4">
        <h1 className="font-semibold text-2xl text-[#009A54]">Manage Blogs</h1>
        <Button type="primary" size="large" onClick={() => setOpen(true)}>
          Add Blog
        </Button>
      </div>

      <Table
        className="px-6 pt-4 transactionTable"
        columns={columns}
        dataSource={blogs}
        pagination={false}
        size="large"
      />

      <AddBlogModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} onSubmit={handleSubmit} />

      <CustomDeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Are you sure you want to delete this blog?"
        onConfirm={handleDelete}
      />
      <DetailsBlogs open={isOpen} setOpen={setIsOpen} data={selectedBlogData}/>
    </div>
  );
};

export default Blogs;
