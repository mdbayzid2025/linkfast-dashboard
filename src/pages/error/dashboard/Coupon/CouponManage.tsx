import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import AddCouponModal from './AddCouponModal';

const CouponManage = () => {
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const tableColumns = [
    { title: "Sl No.", dataIndex: "key", key: "key" },
    { title: "Coupon Target", dataIndex: "couponTarget", key: "couponTarget", render: (text: string) => text ? `${text} invitation` : "-",
    },     
    { title: "Discount", dataIndex: "couponDiscount", key: "couponDiscount", render: (text: string)=>  text ? `${text}%` : "-"},
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-4">
          <FaRegEdit onClick={() => { setOpen(true); setEditData(record); }} className="text-[#009A54] cursor-pointer" size={18} />
          <FaRegTrashAlt onClick={() => setOpenConfirmModal(true)} className="text-red-600 cursor-pointer" size={18} />
        </div>
      )
    }
  ];

  const handleDelete = () => {
    console.log("Coupon deleted!");
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className="font-semibold text-2xl text-[#009A54]">Coupon Management</h1>
        <div className="flex items-center gap-4">
          <Input
            className="shadow-sm"
            placeholder="Search coupons"
            allowClear
            style={{ width: 350, paddingInline: 5, borderRadius: 30 }}
            prefix={<SearchOutlined style={{ fontSize: 16, padding: 6, backgroundColor: "#B7DBC9", borderRadius: "50%" }} />}
          />
          <Button type="primary" size="large" onClick={() => setOpen(true)}>Add Coupon</Button>
        </div>
      </div>

      <Table
        dataSource={couponData}
        columns={tableColumns}
        size="large"
        pagination={{ pageSize: 10 }}
        className="transactionTable px-6 pt-4"
      />

      <AddCouponModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
      <CustomDeleteModal open={openConfirmModal} setOpen={setOpenConfirmModal} onConfirm={handleDelete} title="Are you sure you want to delete this coupon?" />
    </div>
  );
};

export default CouponManage;

export const couponData = [
  { key: '1', couponTarget: 50, couponDiscount: 10 },
  { key: '2', couponTarget: 75, couponDiscount: 20 },
  { key: '3', couponTarget: 100, couponDiscount: 30 },
];
