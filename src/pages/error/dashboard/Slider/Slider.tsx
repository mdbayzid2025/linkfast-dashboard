import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table } from 'antd'
import { useState } from 'react'
import { sliderData } from '../../../../data/SliderData'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import AddSliderModal from './AddSliderModal'


const Slider = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [editData, setEditData] = useState<any | null>(null);


  const tableComuln = [
    { title: "Sl No.", dataIndex: "key", key: "key" },
    {
      title: "Image",
      render: (_: any, record: any) => (
        <div className="w-16 rounded-lg">
          <img src={record.slideImage} alt='Bank card' />
        </div>
      )
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "URL Link", dataIndex: "urlLink", key: "urlLink" },
    {
      title: "Action", dataIndex: "action",
      render: (_: any, record: any) => (
        <div
          className="flex items-center gap-4"
        >
          <FaRegEdit
            onClick={() => { setOpen(true); setEditData(record) }}
            className="text-[#009A54] cursor-pointer" size={24} />
          <FaRegTrashAlt onClick={() => setOpenConfirmModal(true)} className="text-red-600 cursor-pointer" size={24} />
        </div>
      ),
    },
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: any) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  return (
    <div className='bg-white  rounded-xl'>
      <div className="flex items-center justify-between px-4 pt-4">
        <h1 className='font-semibold text-xl'>All Slider</h1>
        <div className="flex items-center gap-4">
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
          <Button onClick={() => setOpen(true)} type='primary' size='large'>Add Banner</Button>
        </div>

      </div>
      <Table dataSource={sliderData} columns={tableComuln} size="large" rowSelection={{ type: "checkbox", ...rowSelection }}
        pagination={{
          pageSize: 10,
        }} className='transactionTable px-4 pt-4'
      />
      <AddSliderModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
    </div>
  )
}

export default Slider