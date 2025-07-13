import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table } from 'antd'
import { useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal'
import { productData } from '../../../../data/ProductsData'
import AddProductModal from './AddProduct'

const ManageShop = () => {  
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [editData, setEditData] = useState<any | null>(null);


  const tableComuln = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "Data", dataIndex: "data", key: "data" },
    { title: "Validity", dataIndex: "validity", key: "validity" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Network", dataIndex: "network", key: "network" },
    { title: "Activation Type", dataIndex: "activationType", key: "activationType" },
    { title: "Delivery", dataIndex: "delivery", key: "delivery" },
    {
      title: "Action", dataIndex: "action",
      render: (_: any, record: any) => (
        <div
          className="flex items-center gap-4"
        >
          <FaRegEdit
            onClick={() => { setOpen(true); setEditData(record) }}
            className="text-[#009A54] cursor-pointer" size={18} />
          <FaRegTrashAlt onClick={() => setOpenConfirmModal(true)} className="text-red-600 cursor-pointer" size={18} />
        </div>
      ),
    },
  ]


  const handleDelete = () => {
    console.log("Product deleted!");
  };

  return (
    <div className='bg-white  rounded-xl'>
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className='font-semibold text-2xl text-[#009A54]'>Manage Shop</h1>

        <div className="flex items-center justify-end gap-5">
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
          <Button onClick={() => setOpen(true)} type="primary" size='large' className='flex items-center'> <FiPlus size={24} /> Add Product</Button>
        </div>

      </div>
      <Table dataSource={productData} columns={tableComuln} size="large"
        pagination={{
          pageSize: 10,
        }}
        className='transactionTable px-6'
      />
      <CustomDeleteModal open={openConfirmModal} setOpen={setOpenConfirmModal} onConfirm={handleDelete} title={`Are you sure you want to delete product?`} />
      <AddProductModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
    </div>
  )
}

export default ManageShop