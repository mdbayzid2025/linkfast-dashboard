import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table, Tooltip } from 'antd'
import { useState } from 'react'
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegTrashAlt } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal'
import AddHeaderNewsModal from './AddHeaderNewsModal'


const HeaderNews = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [editData, setEditData] = useState<any | null>(null);

  const [open, setOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState("");
  const [openActiveAll, setActiveAll]  = useState(false);

  const tableComuln = [
    { title: "SL No", dataIndex: "key", key: "key" },
    { title: "News", dataIndex: "news", key: "news" },   
    {
      title: "Action", dataIndex: "action",
      render: (_: any, record: any) => (
        <div
          className="flex items-center gap-4"
        >
          <FaRegEdit
            onClick={() => { setOpen(true); setEditData(record) }}
            className="text-[#009A54] cursor-pointer" size={24}
          />

          <FaRegTrashAlt
            onClick={() => setOpenConfirmModal(true)} className="text-red-600 cursor-pointer" size={24} />

          <Tooltip title={record.status}>
            {(selectedNewsId == record.key || record.status == "active") ? <FaRegEye onClick={() => setSelectedNewsId(record.key)} size={24} className='text-green-600 cursor-pointer' /> : <FaRegEyeSlash onClick={() => setSelectedNewsId(record.key)} size={24} className='text-red-600 cursor-pointer' />}
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
      <div className="flex items-center justify-between px-4 py-6">
        <h1 className='font-semibold text-2xl text-[#009A54]'>Header News</h1>

        <div className="flex items-center justify-end gap-5">
          <Button onClick={()=>setActiveAll(!openActiveAll)} size='large' shape="round" 
          className='flex items-center justify-center w-[140px]' 
          style={{fontWeight: 600,}}
          >
            {openActiveAll ? <FaRegEyeSlash size={24}/> : <FaRegEye size={24}/>}
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
          <Button onClick={() => setOpen(true)} type="primary" size='large' className='flex items-center'> <FiPlus size={24} /> Add News</Button>
        </div>

      </div>
      {/* ------------ News Data Assign Below ------------ */}
      <Table dataSource={newsData} columns={tableComuln} size="large" 
        pagination={{
          pageSize: 10,
        }}
        className='transactionTable px-4'
      />
      <CustomDeleteModal open={openConfirmModal} setOpen={setOpenConfirmModal} onConfirm={handleDelete} title="Are you sure you want to delete this News?" />
      <AddHeaderNewsModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData} />
    </div>
  )
}

export default HeaderNews;



const newsData = [
  {
    key: "news-01",
    news: "Airalo Achieves Unicorn Status with $220M Investment - Driving Global eSIM Expansion!",
    status: "active"
  },
  {
    key: "news-02",
    news: "New GSMA SGP.32 Standard Set to Revolutionize IoT Connectivity with Enhanced eSIM Flexibility.",
    status: "active"
  },
  {
    key: "news-03",
    news: "eSIM Adoption Soars: 60% of Smartphones Expected to Be eSIM-Compatible by End of 2025.",
    status: "active"
  },
  {
    key: "news-04",
    news: "Thales Reinforces Leadership in eSIM Security, Securing Critical IoT Deployments.",
    status: "inactive"
  },
  {
    key: "news-05",
    news: "Travel Reinvented: Airlines Partnering with eSIM Providers for Seamless In-Flight & On-Ground Connectivity.",
    status: "inactive"
  },
  {
    key: "news-06",
    news: "eSIM Market Projected to Reach $11.29 Billion in 2025, Driven by 5G Rollouts and IoT Growth.",
    status: "inactive"
  },
  {
    key: "news-07",
    news: "Addressing Security: Industry Leaders Collaborate to Mitigate Newly Identified eSIM Vulnerabilities.",
    status: "active"
  },
  {
    key: "news-08",
    news: "From Smartwatches to Cars: eSIM Becoming Standard for Connected Devices Across Industries.",
    status: "inactive"
  },
  {
    key: "news-09",
    news: "Next-Gen eSIMs to Offer Dedicated Data, Text, and Voice Packages for True 'Connect Like a Local' Experience.",
    status: "active"
  },
  {
    key: "news-10",
    news: "Evolving User Experience: eSIM Apps Rolling Out New Features for Simplified Profile Management and Activation.",
    status: "active"
  }
];