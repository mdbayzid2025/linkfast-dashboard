import { Button, Input, Select, Table, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegTrashAlt } from 'react-icons/fa';

import CustomDeleteModal from '../../../../components/shared/CustomDeleteModal';
import AddSubCategoryModal from './AddSubCategoryModal';

const categories = ["Global eSIMs", "Regional eSIMs", "Local eSIMs"];

const SubCategory = () => {
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState<any | null>(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const [searchText, setSearchText] = useState("");


    const dataSource = [
        { key: '1', name: "Asia Travel Pack", category: "Regional eSIMs", status: "active" },
        { key: '2', name: "USA Local Pack", category: "Local eSIMs", status: "inactive" },
        { key: '3', name: "World Explorer", category: "Global eSIMs", status: "active" },
    ];

    const filteredData = dataSource.filter((item) => {
        const matchCategory = filterCategory ? item.category === filterCategory : true;
        const matchSearch = searchText
            ? item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.category.toLowerCase().includes(searchText.toLowerCase())
            : true;

        return matchCategory && matchSearch;
    });

    const columns = [
        { title: "SL", dataIndex: "key", key: "key" },
        { title: "Sub-Category Name", dataIndex: "name", key: "name" },
        { title: "Category", dataIndex: "category", key: "category" },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <FaRegEdit onClick={() => { setOpen(true); setEditData(record); }} className="text-[#009A54] cursor-pointer" size={20} />
                    <FaRegTrashAlt onClick={() => setDeleteModal(true)} className="text-red-600 cursor-pointer" size={20} />
                    <Tooltip title={record.status}>
                        {selectedSubCategory === record.key || record.status === "active" ? (
                            <FaRegEye onClick={() => setSelectedSubCategory(record.key)} className="text-green-600 cursor-pointer" size={20} />
                        ) : (
                            <FaRegEyeSlash onClick={() => setSelectedSubCategory(record.key)} className="text-red-600 cursor-pointer" size={20} />
                        )}
                    </Tooltip>
                </div>
            )
        }
    ];

    const handleDelete = () => {
        console.log("Sub-category deleted");
    };

    return (
        <div className="bg-white rounded-xl">
            <div className="flex items-center justify-between px-4 pt-4">
                <h1 className="font-semibold text-2xl text-[#009A54]">Sub Category</h1>
                <div className="flex items-center gap-4">
                    <Select
                        allowClear
                        placeholder="Filter by Category"
                        style={{ width: 200, height: 42 }}
                        onChange={(val) => setFilterCategory(val || null)}
                        options={categories.map(cat => ({ label: cat, value: cat }))}
                    />
                    <Input
                        placeholder="Search sub-category"
                        allowClear
                        className="shadow-sm"
                        style={{ width: 300, height: 42, borderRadius: 30 }}
                        prefix={<SearchOutlined style={{ fontSize: 16, padding: 6, backgroundColor: "#B7DBC9", borderRadius: "50%" }} />}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button type="primary" size="large" onClick={() => setOpen(true)}>Add Sub Category</Button>
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={{ pageSize: 10 }}
                className="px-4 pt-4"
                size="large"
            />

            <AddSubCategoryModal
                open={open}
                setOpen={setOpen}
                editData={editData}
                setEditData={setEditData}
                categories={categories}
            />

            <CustomDeleteModal
                open={deleteModal}
                setOpen={setDeleteModal}
                onConfirm={handleDelete}
                title="Are you sure you want to delete this Sub-Category?"
            />
        </div>
    );
};

export default SubCategory;
