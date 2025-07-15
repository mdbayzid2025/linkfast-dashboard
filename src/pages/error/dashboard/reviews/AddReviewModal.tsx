import { Button, Form, Input, Modal, Select, Rate } from 'antd';
import { useEffect } from 'react';

const { TextArea } = Input;

export type AddReviewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editData: any | null;
  setEditData: (editData: any | null) => void;
  reviews: any[];
  setReviews: (data: any[]) => void;
};

const AddReviewModal = ({ open, setOpen, editData, setEditData, reviews, setReviews }: AddReviewModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
    }
  }, [editData]);

  const handleClose = () => {
    form.resetFields();
    setEditData(null);
    setOpen(false);
  };

  const onFinish = (values: any) => {
    if (editData) {
      const updated = reviews.map((item) => (item.key === editData.key ? { ...editData, ...values } : item));
      setReviews(updated);
    }
    handleClose();
  };

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Edit Review" : "Add Review"}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Enter reviewer name" }]}>
          <Input style={{height: 42}} placeholder="Enter name" />
        </Form.Item>

        <Form.Item name="review" label="Review" rules={[{ required: true, message: "Enter review" }]}>
          <TextArea rows={4} placeholder="Write review here" />
        </Form.Item>

        <Form.Item name="rating" label="Rating" rules={[{ required: true, message: "Please provide a rating" }]}>
          <Rate />
        </Form.Item>

        <Form.Item name="status" label="Status" rules={[{ required: true, message: "Select status" }]}>
          <Select style={{height: 42}} placeholder="Select status">
            <Select.Option style={{height:42}} value="Pending">Pending</Select.Option>
            <Select.Option style={{height:42}} value="Published">Published</Select.Option>
            <Select.Option style={{height:42}} value="Rejected">Rejected</Select.Option>
          </Select>
        </Form.Item>

        <div className="text-center">
          <Button type="primary" size='large' htmlType="submit">{editData ? "Update" : "Add"}</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddReviewModal;
