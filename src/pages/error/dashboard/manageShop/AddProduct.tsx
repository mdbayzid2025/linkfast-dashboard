import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Button, Select } from "antd";
import { PiImageThin } from "react-icons/pi";

const { Option } = Select;

export type ProductFormData = {
    name: string;
    country: string;
    data: string;
    validity: string;
    price: number;
    network: string;
    activationType: string;
    delivery: string;
    image: string;
};

type AddProductModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    editData: any | null;
    setEditData: (data: any | null) => void;
};

const AddProductModal = ({ open, setOpen, editData, setEditData }: AddProductModalProps) => {
    const [form] = Form.useForm();
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>();

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
        setEditData(null)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handleFinish = (values: ProductFormData) => {
        console.log("Form Values:", {
            ...values,
            image: imgFile
        });
        form.resetFields();
        setEditData(null);
        setImgFile(null);
        setImageUrl(undefined);
    };


    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData);
            setImageUrl(editData.image);
        }
    }, [editData, form, setImageUrl]);

    return (
        <Modal
            title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Product" : "Add New Product"}</p>}
            open={open}
            onCancel={handleCancel}
            footer={null}
            centered
            width="800px"
        >

            <Form
                layout="vertical"
                form={form}
                onFinish={handleFinish}
                className="pt-3"
            >
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <Form.Item
                        name="name"
                        label="Product Name"
                        rules={[{ required: true, message: "Please enter product name" }]}
                    >
                        <Input placeholder="Enter product name" style={{ height: 42 }} />
                    </Form.Item>

                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[{ required: true, message: "Please enter country" }]}
                    >
                        <Input placeholder="Enter country" style={{ height: 42 }} />
                    </Form.Item>

                    <div className="mb-4 w-full">
                        <p className="text-md font-medium !pb-3">Service Image</p>
                        <label htmlFor="image" className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
                            <div className="flex justify-center items-center w-full h-[130px] ">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        style={{ height: "200px", width: "230px", borderRadius: 10, objectFit: "contain" }}
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

                    <div className="">
                        <Form.Item
                            name="data"
                            label="Data"
                            rules={[{ required: true, message: "Please enter data (e.g. 10GB)" }]}
                        >
                            <Input placeholder="Enter data (e.g. 10GB)" style={{ height: 42 }} />
                        </Form.Item>

                        <Form.Item
                            name="validity"
                            label="Validity"
                            rules={[{ required: true, message: "Please enter validity (e.g. 30 Days)" }]}
                        >
                            <Input placeholder="Enter validity (e.g. 30 Days)" style={{ height: 42 }} className="w-full" />
                        </Form.Item>


                    </div>
                    <Form.Item
                        name="price"
                        label="Price ($)"
                        rules={[{ type: "number", required: true, message: "Please enter price" }]}
                    >
                        <Input placeholder="Enter price" style={{ height: 42 }} className="w-full" />
                    </Form.Item>
                    <Form.Item
                        name="network"
                        label="Network"
                        rules={[{ required: true, message: "Please enter network" }]}
                    >
                        <Input placeholder="Enter network" style={{ height: 42 }} />
                    </Form.Item>

                    <Form.Item
                        name="activationType"
                        label="Activation Type"
                        rules={[{ required: true, message: "Please select activation type" }]}
                    >
                        <Select placeholder="Select activation type" style={{ height: 42 }}>
                            <Option value="Manual QR">Manual QR</Option>
                            <Option value="Auto">Auto</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="delivery"
                        label="Delivery Method"
                        rules={[{ required: true, message: "Please select delivery method" }]}
                    >
                        <Select placeholder="Select delivery method" style={{ height: 42 }}>
                            <Option value="Instant Email">Instant Email</Option>
                            <Option value="Manual Email">Manual Email</Option>
                        </Select>
                    </Form.Item>

                    <div className="flex justify-center gap-2 pt-4 col-span-2">
                        <Button type="primary" size="large" htmlType="submit">
                            {editData ? "Update Product" : "Add New Product"}
                        </Button>
                    </div>
                </div>

            </Form>
        </Modal>
    );
};

export default AddProductModal;
