

import type { SelectProps } from "antd";
import { Button, Form, Input, Modal, Select, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { PiImageThin } from "react-icons/pi";

const { Option } = Select;

type AddProductModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    editData?: any | null;
    setEditData: (data: any | null) => void;
};

const AddProductModal = ({ open, setOpen, editData, setEditData, }: AddProductModalProps) => {
    const [form] = Form.useForm();
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const [options, setOptions] = useState<SelectProps["options"]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [subcategories, setSubcategories] = useState<string[]>([]);

    // When category changes, reset subcategory and update options
    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setSubcategories(categoryMap[value] || []);
        form.setFieldsValue({ subcategory: undefined });
    };

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
        setEditData(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handleFinish = (values: any) => {
        console.log("Form Values:", {
            ...values,
            image: imgFile,
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
    }, [editData, form]);

    // Fetch countries
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags"
                );
                const data = await res.json();                
                const countryOptions = data.map((country: any) => ({
                    label: (
                        <div className="flex items-center gap-2">
                            <img
                                src={country.flags.png}
                                alt={country.name.common}
                                className="w-5 h-4 rounded-sm object-cover"
                            />
                            <span>{country.name.common}</span>
                        </div>
                    ),
                    value: country.name.common,
                    flag: country.flags.png,
                }));
                setOptions(countryOptions);
            } catch (err) {
                console.error("Failed to fetch countries:", err);
            }
        };

        fetchCountries();
    }, []);

    // Custom tag with flag
    const tagRender: SelectProps["tagRender"] = (props) => {
        const { value, closable, onClose } = props;
        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
        };

        const flagUrl = options?.find((opt) => opt?.value === value)?.flag;

        return (
            <Tag
                color="blue"
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginInlineEnd: 4,
                    marginBlock: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                }}>
                {flagUrl && (
                    <img
                        src={flagUrl}
                        alt={value}
                        className="w-4 h-3 object-cover rounded-sm"
                    />)} {value}
            </Tag>
        );
    };

    console.log("countries", options?.slice(1, 20));
    return (
        <Modal
            title={
                <p className="text-xl font-semibold text-[#009A54]">
                    {editData ? "Edit Product" : "Add New Product"}
                </p>
            }
            open={open}
            onCancel={handleCancel}
            footer={null}
            centered
            width="800px">
            <Form
                layout="vertical"
                form={form}
                onFinish={handleFinish}
                className="pt-3">
                <div className="grid grid-cols-2 gap-x-5 mt-5">
                    <Form.Item
                        name="name"
                        label="Product Name"
                        rules={[{ required: true, message: "Please enter product name" }]}>
                        <Input placeholder="Enter product name" style={{ height: 42 }} />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="Price ($)"
                        rules={[{ required: true, message: "Please enter price" }]}>
                        <Input type="number" placeholder="Enter price" style={{ height: 42 }} />
                    </Form.Item>

                    {/* Image Upload */}
                    <div className="mb-4 w-full">
                        <p className="text-md font-medium !pb-3">Service Image</p>
                        <label
                            htmlFor="image"
                            className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
                            <div className="flex justify-center items-center w-full h-[130px] ">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        style={{
                                            height: "200px",
                                            width: "230px",
                                            borderRadius: 10,
                                            objectFit: "contain",
                                        }}
                                        alt="class"
                                    />
                                ) : (
                                    <PiImageThin className="text-8xl text-[#666666]" />
                                )}
                            </div>
                        </label>
                        <div className="hidden">
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div>
                        <Form.Item
                            name="data"
                            label="Data"
                            rules={[{ required: true, message: "Please enter data (e.g. 10GB)" }]}>
                            <Input placeholder="Enter data (e.g. 10GB)" style={{ height: 42 }} />
                        </Form.Item>

                        <Form.Item
                            name="validity"
                            label="Validity"
                            rules={[{ required: true, message: "Please enter validity (e.g. 30 Days)" }]}>
                            <Input placeholder="Enter validity (e.g. 30 Days)" style={{ height: 42 }} />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[{ required: true, message: "Please select category" }]}>
                        <Select
                            placeholder="Select Category"
                            style={{ height: 42 }}
                            onChange={handleCategoryChange}
                        >
                            {Object.keys(categoryMap).map((category) => (
                                <Option key={category} value={category}>
                                    {category}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="subcategory"
                        label="Sub Category"
                        rules={[{ required: true, message: "Please select subcategory" }]}>
                        <Select
                            placeholder="Select Subcategory"
                            style={{ height: 42 }}
                            disabled={!selectedCategory}
                        >
                            {subcategories.map((sub) => (
                                <Option key={sub} value={sub}>
                                    {sub}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="w-full col-span-2 overflow-hidden"
                        name="countries"
                        label="Countries"
                        rules={[{ required: true, message: "Please select countries" }]}>
                        <Select
                            mode="multiple"
                            tagRender={tagRender}
                            style={{ width: "100%", paddingTop: 5, minHeight: 42, maxHeight: 100, overflowY: "auto" }}
                            placeholder="Select countries"
                            options={options}
                        />
                    </Form.Item>
                    <div className="flex justify-center gap-2 pt-4 col-span-2">
                        <Button type="primary" size="large" htmlType="submit">
                            {editData ? "Edit Product" : "Add New Product"}
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    );
};

export default AddProductModal;

const categoryMap: Record<string, string[]> = {
    "Local eSIMs": [
        "Popular",
        "Asia",
        "Europe",
        "North America",
        "South America",
        "Caribbean",
        "Africa",
        "Oceania",
        "Middle East",
    ],
    "Regional eSIMs": [
        "Asia",
        "Europe",
        "North America",
        "Latin America",
        "Oceania",
        "Africa",
    ],
    "Global eSIMs": ["Data", "Data/Call/Texts"],
};