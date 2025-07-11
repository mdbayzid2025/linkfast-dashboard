import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tooltip } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegTrashAlt } from 'react-icons/fa';
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import AddReviewModal from './AddReviewModal';


const Reviews = () => {
  const [reviews, setReviews] = useState(initaialReviewsData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  const handleDelete = () => {
    setReviews(reviews.filter((r) => r.key !== selectedKey));
    setOpenConfirmModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'text-yellow-500';
      case 'Accepted': return 'text-green-600';
      case 'Rejected': return 'text-red-600';
      default: return '';
    }
  };

  const columns = [
    { title: "Sl No.", dataIndex: "key", key: "key" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Review", dataIndex: "review", key: "review" },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">          
            <FaRegEdit
              onClick={() => { setOpen(true); setEditData(record); }}
              className="text-[#009A54] cursor-pointer"
              size={24}
            />          
          <FaRegTrashAlt
            onClick={() => {
              setSelectedKey(record.key);
              setOpenConfirmModal(true);
            }}
            className="text-red-600 cursor-pointer"
            size={24}
          />
          <Tooltip title={record.status}>
            {record.status ==="Accepted" ? <FaRegEye className={`${getStatusColor(record.status)} cursor-pointer`} size={24} /> 
            : <FaRegEyeSlash className={`${getStatusColor(record.status)} cursor-pointer`} size={24} />
            }
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className='bg-white rounded-xl'>
      <div className="flex items-center justify-between px-4 pt-4">
        <h1 className='font-semibold text-3xl text-[#009A54]'>Reviews</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              className="shadow-sm"
              placeholder="Search here"
              allowClear
              style={{ width: 300, padding: "6px 12px 6px 6px", borderRadius: "30px" }}
              prefix={
                <SearchOutlined style={{ fontSize: "16px", padding: "6px", backgroundColor: "#B7DBC9", borderRadius: "50%" }} />
              }
            />
          </div>
        </div>
      </div>

      <Table
        dataSource={reviews}
        columns={columns}
        size="large"
        pagination={{ pageSize: 10 }}
        className='transactionTable px-4 pt-4'
      />

      <AddReviewModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} setReviews={setReviews} reviews={reviews} />

      <CustomDeleteModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this review?"
      />
    </div>
  );
};

export default Reviews;




const initaialReviewsData = [
  {
    key: '1',
    name: 'John Doe',
    review: 'Excellent service!',
    status: 'Accepted',
    rating: 5,
  },
  {
    key: '2',
    name: 'Jane Smith',
    review: 'Still waiting...',
    status: 'Pending',
    rating: 2,
  },
  {
    key: '3',
    name: 'Tom Jackson',
    review: 'Damaged product.',
    status: 'Rejected',
    rating: 1,
  },
];
