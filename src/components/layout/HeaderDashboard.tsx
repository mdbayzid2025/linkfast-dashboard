import { Avatar, Badge, Button } from 'antd'
import React, { useState } from 'react'
import { GoBell } from 'react-icons/go'

const HeaderDashboard = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div className='h-[80px] mx-0  bg-white !px-10  flex items-center justify-end gap-8'>
      <Badge count={count} showZero>
        <Button  size='middle' style={{ background: "#BFBFBF", }} shape='circle' icon={<GoBell />} />
      </Badge>

      <div className="flex items-center gap-5">
        <Avatar        
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover"
          }}
          className='' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg" />

        <h1 className='text-lg font-medium'>Md. Bayzid</h1>
      </div>
    </div>
  )
}

export default HeaderDashboard