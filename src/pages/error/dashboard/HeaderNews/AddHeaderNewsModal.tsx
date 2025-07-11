import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';

export type newsProps = {
    open: boolean;
    setOpen: (open : boolean) => void;
    editData?: any | null;
    setEditData: (editData: any | null)=>void;
    
}

const AddHeaderNewsModal = ({ open, setOpen, editData, setEditData }: newsProps) => {
    const [form] = Form.useForm();

    const handleClose = () => {
         form.resetFields();
        setOpen(false);
        setEditData(null)
    }

    useEffect(() => {
        if(editData){
            form.setFieldsValue(editData)
        }
    }, [editData,setEditData])

    const onFinish = (values: any) => {
        console.log("values", values);
    }
    return (
        <Modal
            title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update News" : "Add News"}</p>}
            open={open}
            onCancel={handleClose}
            centered
            footer={false}
        >
            <Form
                form={form}
                layout='vertical'
                onFinish={onFinish}
                style={{marginTop: 15}}
            >
                <FormItem
                    label={editData ? "Update News" : "Add News"}
                    name="question"
                    rules={[{
                        required: true,
                        message: "Enter News question"
                    }]}
                >
                    <Input style={{ height: 42 }} name="question" placeholder='Your news' />
                </FormItem>                
                <div className="flex items-center justify-center">
                    <Button className='' type='primary' size='large' htmlType='submit'>{editData ? "Update News" : "Add News"}</Button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddHeaderNewsModal