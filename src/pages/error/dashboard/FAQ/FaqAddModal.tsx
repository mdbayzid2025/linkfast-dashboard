import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';

export type faqProps = {
    open: boolean;
    setOpen: (open : boolean) => void;
    editData?: any | null;
    setEditData: (editData: any | null)=>void;
    
}

const FaqAddModal = ({ open, setOpen, editData, setEditData }: faqProps) => {
    const [form] = Form.useForm()
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
            title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update FAQ" : "Add FAQ"}</p>}
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
                    label={editData ? "Update FAQ" : "Add FAQ"}
                    name="question"
                    rules={[{
                        required: true,
                        message: "Enter FAQ question"
                    }]}
                >
                    <Input style={{ height: 42 }} name="question" placeholder='Your faq question' />
                </FormItem>
                <FormItem
                    name="answer"
                    label={editData ? "Update FAQ" : "Add FAQ"}
                    rules={[{
                        required: true,
                        message: "Enter FAQ answer"
                    }]}
                >
                    {/* <TextArea style={{ height: 42 }} name="answer" placeholder='Your faq answer' /> */}
                    <TextArea rows={4} name="answer" placeholder='Your faq answer' />
                </FormItem>
                <div className="flex items-center justify-center">
                    <Button className='' type='primary' size='large' htmlType='submit'>{editData ? "Update FAQ" : "Add FAQ"}</Button>
                </div>
            </Form>
        </Modal>
    )
}

export default FaqAddModal