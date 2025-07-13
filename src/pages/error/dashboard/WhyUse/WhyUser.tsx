import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table, Tooltip } from 'antd'
import { useState } from 'react'
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegTrashAlt } from 'react-icons/fa'

import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal'
import AddWhyUseModal from './AddWhyUseModal'


const WhyUse = () => {  
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [editData, setEditData] = useState<any | null>(null);

  const [selectedNewsId, setSelectedSliderId] = useState("");
  const [openActiveAll, setActiveAll] = useState(false);

  const tableComuln = [
    { title: "Sl No.", dataIndex: "key", key: "key" },
     
    {
      title: "Icon",
      render: (_: any, record: any) => (
        <div className="w-12 rounded-lg">
          <img src={record.icons || "/place-holder.webp"} alt='Bank card' className='' />
        </div>
      )
    },
   { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
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
        <h1 className='font-semibold text-2xl text-[#009A54]'>Why Use</h1>
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
      <Table dataSource={whyUseData} columns={tableComuln} size="large"
        pagination={{
          pageSize: 10,
        }} className='transactionTable px-6 pt-4'
      />
      <AddWhyUseModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
      <CustomDeleteModal open={openConfirmModal} setOpen={setOpenConfirmModal} onConfirm={handleDelete} title="Are you sure you want to delete this News?" />
    </div>
  )
}

export default WhyUse


export const whyUseData = [
  {
    key: 1,
    title: "Instant Activation",
    description: "Activate your eSIM instantly without needing a physical SIM card or store visit.",
    icon: "https://cdn-icons-png.flaticon.com/512/9131/9131403.png",
  },
  {
    key: 2,
    title: "Global Connectivity",
    description: "Stay connected in over 150 countries with seamless international roaming.",
    icon: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
  },
  {
    key: 3,
    title: "Dual SIM Convenience",
    description: "Use eSIM and physical SIM together for business and personal numbers on one device.",
    icon: "https://cdn-icons-png.flaticon.com/512/4299/4299980.png",
  },
  {
    key: 4,
    title: "Eco-Friendly Choice",
    description: "Reduce plastic waste and packaging by going digital with eSIM technology.",
    icon: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
  },
  {
    key: 5,
    title: "Flexible Plans",
    description: "Choose and switch between plans easily without replacing a SIM card.",
    icon: "https://cdn-icons-png.flaticon.com/512/4205/4205356.png",
  },
  {
    key: 6,
    title: "More Secure",
    description: "eSIMs are harder to steal or misuse since they are embedded into the device.",
    icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
  },
];