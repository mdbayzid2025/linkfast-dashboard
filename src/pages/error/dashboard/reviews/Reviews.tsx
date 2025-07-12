import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Rate, Table, Tooltip } from 'antd';
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

    
  const [openActiveAll, setActiveAll] = useState(false);

  // ------ Rating Title --------
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

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
    { title: "Name", 
      render: (_:any, record: any)=>(
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src={record.photo} className="w-full h-full object-cover rounded-full" alt="" />            
          </div>
          <p className='text-[16px] font-medium'>{record.name}</p>
        </div>
      )},
    { title: "Review", render:(_:any, record:any)=>(
       <Rate tooltips={desc} disabled value={record.rating} />
    ) },
    { title: "Rating", dataIndex: "rating", key: "rating" },
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
        <h1 className='font-semibold text-2xl text-[#009A54]'>Reviews</h1>
        <div className="flex items-center gap-4">
             <Button onClick={() => setActiveAll(!openActiveAll)} size='large' shape="round"
            className='flex items-center justify-center w-[140px]'
            style={{ fontWeight: 600, }}
          >
            {openActiveAll ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
            {openActiveAll ? "Reject All" : "Accept All"}
          </Button>
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
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    review: 'Excellent service!',
    status: 'Accepted',
    rating: 5,
  },
  {
    key: '2',
    name: 'Jane Smith',
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    review: 'Still waiting...',
    status: 'Pending',
    rating: 2,
  },
  {
    key: '3',
    name: 'Tom Jackson',
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    review: 'Damaged product.',
    status: 'Rejected',
    rating: 1,
  },
];
