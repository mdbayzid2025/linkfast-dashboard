import { FaDollarSign, FaRegUser } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { LuShare2 } from 'react-icons/lu'

const DashboardStats = () => {
    const statsData = [
        {
            name: "Total Sale",
            date: "13 Dec, 2024",
            total: 20555,
            daily: 35,
            icon: <FiBox size={28} className='text-[#009A54]' />,
            bgColor: "#FDDD8D"
        },
       
        {
            name: "Total Share",
            date: "13 Dec, 2024",
            total: 4611,
            daily: 35,
            icon: <LuShare2 size={28} className='text-[#009A54]' />,
            bgColor: "#C6E9F2"
        },
        {
            name: "Total User",
            date: "13 Dec, 2024",
            total: 56,
            daily: 15,
            icon: <FaRegUser size={28} className='text-[#009A54]' />,
            bgColor: "#C6E9F2"
        },
         {
            name: "Total Earn",
            date: "13 Dec, 2024",
            total: 316512,
            daily: 35,
            icon: <FaDollarSign size={28} className='text-[#009A54]' />,
            bgColor: "#FBD9E2"
        },
    ]
    return (
        <div className='grid grid-cols-4 gap-5 mb-4'>

            {
                statsData.map(item =>
                    <div key={item.name} className='p-5 bg-white shadow-sm rounded-xl'>                                                  
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-15 h-15 rounded-full bg-[#009A54]/10 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h1 className='text-xl font-medium'>{item.name}</h1>
                          </div>
                          {/* <p className='text-[#999999] text-lg font-normal mb-2'>{item.date}</p> */}
                          <div className="flex items-center justify-between">
                            <p className='text-lg font-medium'>Daily: <span className='text-blue-600'>{item.daily}</span></p>
                            <p className='text-lg font-medium'>Total: {item.total}</p>
                          </div>

                    </div>)
            }

        </div>
    )
}

export default DashboardStats