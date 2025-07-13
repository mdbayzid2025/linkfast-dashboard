import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import FaqAddModal from './FaqAddModal';
import { GoTrash } from 'react-icons/go';

const FAQ = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [editData, setEditData] = useState<any | null>(null);
    
    const faqData = [
        {
            key: 1,
            question: "Our Story?",
            answer: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at "
        },
        {
            key: 2,
            question: "When to use Doctor For You?",
            answer: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at "
        },
        {
            key: 3,
            question: "Our Mission?",
            answer: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at "
        },
    ]

    
    return (
        <div className='bg-white p-6 rounded-2xl'>
            <div className="flex items-center justify-between mb-6">
                <h1 className="font-semibold text-2xl text-[#009A54]">FAQ</h1>
                <Button onClick={()=>setOpen(!open)} type="primary" size='large' className='flex items-center'> <FiPlus size={24} />Add Content</Button>
            </div>

            <div className=''>
                {faqData && faqData.map(item =>
                    <div className='flex items-start justify-between gap-3'>
                        <div className='w-10' >
                            <Checkbox ></Checkbox>
                        </div>
                        <div className='w-full'>
                            <div className="bg-[#F9F9F9] px-4 text-lg font-medium py-2 rounded-xl text-black/80 mb-3 shadow-md">
                                {item.question}
                            </div>
                            <div className="bg-[#F9F9F9] px-4 py-2 rounded-md text-lg font-medium text-justify text-[#635d5d]/80 mb-6 shadow-md">
                                {item.answer}
                            </div>
                        </div>
                        <div className='w-14'>
                            <div className="flex flex-col items-center gap-3 text-[#999999]">
                                <FiEdit className='cursor-pointer' onClick={()=>{setOpen(true); setEditData(item)}} size={24} />
                                <GoTrash className='cursor-pointer' size={24} color='red'/>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <FaqAddModal open={open} setOpen={setOpen} editData={editData} setEditData={setEditData}/>
        </div>
    )
}

export default FAQ