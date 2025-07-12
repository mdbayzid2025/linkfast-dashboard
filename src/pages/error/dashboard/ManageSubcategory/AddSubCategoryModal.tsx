import { Button, Form, Input, Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editData: any;
  setEditData: (data: any) => void;
  categories: string[];
};

const AddSubCategoryModal = ({ open, setOpen, editData, setEditData, categories }: Props) => {
  const [form] = Form.useForm();

  const handleClose = () => {
    form.resetFields();
    setEditData(null);
    setOpen(false);
  };

  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
    }
  }, [editData]);

  const onFinish = (values: any) => {
    console.log("Submitted values:", values);
    handleClose();
  };

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Sub-Category" : "Add Sub-Category"}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 15 }}
      >
        <FormItem
          label="Sub-Category Name"
          name="name"
          rules={[{ required: true, message: "Enter sub-category name" }]}
        >
          <Input placeholder="e.g., Asia Travel Pack" style={{ height: 42 }} />
        </FormItem>
        <FormItem
          label="Category"
          name="category"
          rules={[{ required: true, message: "Select a category" }]}
        >
          <Select
            placeholder="Select category"
            options={categories.map(cat => ({ label: cat, value: cat }))}
            style={{ height: 42 }}
          />
        </FormItem>
        <div className="flex justify-center">
          <Button type="primary" htmlType="submit" size="large">
            {editData ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddSubCategoryModal;
