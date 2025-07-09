import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { LuShare2 } from 'react-icons/lu'

const DashboardStats = () => {
    const statsData = [
        {
            name: "Total Sale",
            total: 1000,
            icon: <FiBox size={100} className='text-white/50' />,
            bgColor: "#FDDD8D"
        },
        {
            name: "Total Income",
            total: 1000,
            icon: <FaDollarSign size={100} className='text-white/50' />,
            bgColor: "#FBD9E2"
        },
        {
            name: "Total Share",
            total: 1000,
            icon: <LuShare2 size={100} className='text-white/50' />,
            bgColor: "#C6E9F2"
        },
    ]
    return (
        <div className='grid grid-cols-3 gap-8 mb-10'>

            {
                statsData.map(item =>
                    <div style={{ backgroundColor: `${item.bgColor}` }} key={item.name} className='p-6  shadow-lg rounded-xl'>                        
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[70px] text-[#404E67] font-semibold">{item.total}</h1>
                                <>{item.icon}</>
                            </div>
                            <h1 className='text-3xl tracking-wide text text-[#404E67] font-medium'>{item.name}</h1>
                    </div>)
            }

        </div>
    )
}

export default DashboardStats