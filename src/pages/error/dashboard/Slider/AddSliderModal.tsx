import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';

export type faqProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    editData?: any | null;
    setEditData: (editData: any | null) => void;

}

const AddSliderModal = ({ open, setOpen, editData, setEditData }: faqProps) => {
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>();

    const [form] = Form.useForm();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };



    const handleClose = () => {
        form.resetFields();
        setOpen(false);
        setEditData(null)
    }

    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData);
            setImageUrl(editData.image);
        }
    }, [editData, setEditData])

    const onFinish = (values: any) => {
        console.log("Form Values:", {
            ...values,
            image: imgFile
        });
        form.resetFields();
        setEditData(null);
        setImgFile(null);
        setImageUrl(undefined);
    }
    return (
        <Modal
            title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Slider" : "Add Slider"}</p>}
            open={open}
            onCancel={handleClose}
            centered
            footer={false}
        >
            <Form
                form={form}
                layout='vertical'
                onFinish={onFinish}
                style={{ marginTop: 15 }}
            >
                <FormItem
                    label={editData ? "Update Slider" : "Add Slider"}
                    name="name"
                    rules={[{
                        required: true,
                        message: "Enter Slider Name"
                    }]}
                >
                    <Input style={{ height: 42 }} name="name" placeholder='Your slider name' />
                </FormItem>
                
                    <div className="mb-4 w-full">
                        <p className="text-md font-medium !pb-3">Service Image</p>
                        <label htmlFor="image" className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
                            <div className="flex justify-center items-center w-full h-[200px] ">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        style={{ height: "200px", width: "100%", borderRadius: 10, objectFit: "cover" }}
                                        alt="class"
                                    />
                                ) : (
                                    <PiImageThin className="text-8xl text-[#666666]" />
                                )}
                            </div>
                        </label>
                        <div className="hidden">
                            <input id="image" type="file" accept="image/*" onChange={handleChange} className="hidden" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button className='' type='primary' size='large' htmlType='submit'>{editData ? "Update Slider" : "Add Slider"}</Button>
                    </div>                    
            </Form>
        </Modal>
    )
}

export default AddSliderModal