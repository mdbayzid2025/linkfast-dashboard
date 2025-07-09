import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { LuShare2 } from 'react-icons/lu'

const DashboardStats = () => {
    const statsData = [
        {
            name: "Total Sale",
            total: 1000,
            icon: <FiBox size={40} />,
            bgColor: "brown"
        },
        {
            name: "Total Income",
            total: 1000,
            icon: <FaDollarSign size={40} />,
            bgColor: "purple"
        },
        {
            name: "Total Share",
            total: 1000,
            icon: <LuShare2 size={40} />,
            bgColor: "darkblue"
        },
    ]
    return (
        <div className='grid grid-cols-3 gap-14 !mb-10'>
            {
                statsData.map(item =>
                    <div style={{backgroundColor : `${item.bgColor}`}} key={item.name} className='!p-6  shadow-lg rounded-xl'>
                        <div className="flex items-center justify-between gap-3 p-10">
                            <div className="w-18 h-18 bg-[#009A54] rounded-lg text-white flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="">
                                <h1 className='text-2xl text-white/60 font-medium'>{item.name}</h1>
                                <h1 className="text-5xl text-white f">{item.total}</h1>
                            </div>
                        </div>

                    </div>)
            }

        </div>
    )
}

export default DashboardStats