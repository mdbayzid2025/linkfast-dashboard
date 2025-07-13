import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table, Tooltip } from 'antd'
import { useState } from 'react'
import { sliderData } from '../../../../data/SliderData'
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegTrashAlt } from 'react-icons/fa'
import AddSliderModal from './AddSliderModal'
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal'


const Slider = () => {  
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [editData, setEditData] = useState<any | null>(null);

  const [selectedNewsId, setSelectedSliderId] = useState("");
  const [openActiveAll, setActiveAll] = useState(false);

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
            className="text-[#009A54] cursor-pointer" size={18} />
          <FaRegTrashAlt onClick={() => setOpenConfirmModal(true)} className="text-red-600 cursor-pointer" size={18} />
            <Tooltip title={record.status}>
            {(selectedNewsId == record.key || record.status == "active") ? <FaRegEye onClick={() => setSelectedSliderId(record.key)} size={18} className='text-green-600 cursor-pointer' /> : <FaRegEyeSlash onClick={() => setSelectedSliderId(record.key)} size={18} className='text-red-600 cursor-pointer' />}
          </Tooltip>
        </div>
      ),
    },
  ]

    const handleDelete = () => {
    console.log("Product deleted!");
  };


  return (
    <div className='bg-white  rounded-xl'>
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className='font-semibold text-2xl text-[#009A54]'>All Slider</h1>
        <div className="flex items-center gap-4">
          <Button onClick={() => setActiveAll(!openActiveAll)} size='large' shape="round"
            className='flex items-center justify-center w-[140px]'
            style={{ fontWeight: 600, }}
          >
            {openActiveAll ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            {openActiveAll ? "Hide All" : "Active All"}
          </Button>
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
      <Table dataSource={sliderData} columns={tableComuln} size="large"
        pagination={{
          pageSize: 10,
        }} className='transactionTable px-6 pt-4'
      />
      <AddSliderModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
      <CustomDeleteModal open={openConfirmModal} setOpen={setOpenConfirmModal} onConfirm={handleDelete} title="Are you sure you want to delete this News?" />
    </div>
  )
}

export default Slider