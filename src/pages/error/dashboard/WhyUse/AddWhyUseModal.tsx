import { Button, Form, Input, Modal } from 'antd'
import { useForm } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import { PiImageThin } from 'react-icons/pi';

export type WhyUseModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    editData?: any | null;
    setEditData: (editData: any | null) => void;
}

const AddWhyUseModal = ({ open, setOpen, editData, setEditData }: WhyUseModalProps) => {
    const [form] = Form.useForm()
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>();

    const handleClose = () => {
        form.resetFields()
        setOpen(false)
        setEditData(null)
    }

    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData);
            setImageUrl(editData.image);
        }
    }, [editData, setEditData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

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
            title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Why Use" : "Add Why Use"}</p>}
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
                <div className="mb-4 w-1/2">
                    <p className="text-md font-medium !pb-3">Icon</p>
                    <label htmlFor="image" className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
                        <div className="flex justify-center items-center w-full h-[100px] ">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    style={{ height: "100px", width: "100%", borderRadius: 10, objectFit: "cover" }}
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
                <FormItem
                    label="Title"
                    name="title"
                    rules={[{
                        required: true,
                        message: "Enter the title"
                    }]}
                >
                    <Input style={{ height: 42 }} placeholder='Enter title' />
                </FormItem>
                <FormItem
                    name="description"
                    label="Description"
                    rules={[{
                        required: true,
                        message: "Enter the description"
                    }]}
                >
                    <TextArea rows={4} placeholder='Enter description' />
                </FormItem>
                <div className="flex items-center justify-center">
                    <Button type='primary' size='large' htmlType='submit'>
                        {editData ? "Update" : "Add"}
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddWhyUseModal


