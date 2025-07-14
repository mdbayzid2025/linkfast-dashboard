import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tooltip } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import AddReviewModal from './AddReviewModal';


const Reviews = () => {
  const [reviews, setReviews] = useState(initaialReviewsData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
    
  const [openActiveAll, setActiveAll] = useState(false);


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
    { title: "Country", dataIndex: "country", key: "country" },    
     { title: 'Review', dataIndex: 'review', key: 'review', render: (text: string) => text?.length > 100 ? `${text.slice(0, 100)}...` : text, },
    { title: "Rating", dataIndex: "rating", key: "rating" },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">          
            <FaRegEdit
              onClick={() => { setOpen(true); setEditData(record); }}
              className="text-[#009A54] cursor-pointer"
              size={18}
            />                    
          <Tooltip title={record.status}>
            {record.status ==="Accepted" ? <FaRegEye className={`text-green-600 cursor-pointer`} size={18} /> 
            : <FaRegEyeSlash className={`text-red-600 cursor-pointer`} size={18} />
            }
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className='bg-white rounded-xl'>
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className='font-semibold text-2xl text-[#009A54]'>Reviews</h1>
        <div className="flex items-center gap-4">
             <Button onClick={() => setActiveAll(!openActiveAll)} size='large' shape="round"
            className='flex items-center justify-center w-[140px]'
            style={{ fontWeight: 600, }}
          >
            {openActiveAll ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
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
        className='transactionTable px-6 pt-4'
      />

      <AddReviewModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} setReviews={setReviews} reviews={reviews} />
    </div>
  );
};

export default Reviews;




const initaialReviewsData = [
  {
    key: '1',
    name: 'John Doe',
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    country: "USA",
    review: 'Excellent service!',
    status: 'Accepted',
    rating: 5,
  },
  {
    key: '2',
    name: 'Jane Smith',
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    country: "USA",
    review: 'Still waiting...',
    status: 'Pending',
    rating: 2,
  },
  {
    key: '3',
    name: 'Tom Jackson',
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    country: "USA",
    review: 'Damaged product.',
    status: 'Rejected',
    rating: 1,
  },
];
