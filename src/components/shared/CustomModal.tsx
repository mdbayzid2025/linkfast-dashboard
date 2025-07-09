import { Modal as AntModal, Modal } from 'antd'
import React from 'react'

export type CustomModalProps = {
    title: string;
    open: boolean;
    setOpen: (open: boolean)=> void;
    body: React.ReactElement;
    width?: number;
}

const CustomModal = ({title, setOpen, open, width, body} : CustomModalProps) => {
    const handleClose = () =>{
        setOpen(!open)
    }
  return (
    <Modal
    open={open}
    onCancel={handleClose}
    title={<p className="text-black font-medium text-xl">{title}</p>}
    width={width || 400}
    centered
    >
        {body}
    </Modal>
  )
}

export default CustomModal