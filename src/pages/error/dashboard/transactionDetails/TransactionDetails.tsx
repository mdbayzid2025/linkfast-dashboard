import { SearchOutlined } from '@ant-design/icons'
import { Input, Table } from 'antd'
import { transactionData } from '../../../../data/TransactionData'

const TransactionDetails = () => {
  
  const tableComuln  = [
    {title: "Name", dataIndex : "name", key:"name"},
    {title: "Price", dataIndex : "price", key:"price"},
    {title: "Buyer Name", dataIndex : "buyerName", key:"buyerName"},
    {title: "Email", dataIndex : "buyerEmail", key:"buyerEmail"},
    {title: "Contact", dataIndex : "contact", key:"contact"},
    {title: "Date", dataIndex : "date", key:"date"},
    {title: "Transaction ID.", dataIndex : "transactionId", key:"transactionId"},
  ]



  return (
    <div className='bg-white  rounded-xl'>
      <div className="flex items-center justify-between px-4 pt-4">
        <h1 className='font-semibold text-2xl text-[#009A54]'>Transaction Details</h1>
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
      </div>
      <Table dataSource={transactionData} columns={tableComuln} size="large" 
      pagination={{
        pageSize: 10,        
      }} className='transactionTable px-4 pt-4'
      />
    </div>
  )
}

export default TransactionDetails