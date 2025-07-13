import { Button, DatePicker, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import { useEffect } from 'react';

export type CouponModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editData?: any | null;
  setEditData: (editData: any | null) => void;
};

const AddCouponModal = ({ open, setOpen, editData, setEditData }: CouponModalProps) => {
  const [form] = Form.useForm();

  const handleClose = () => {
    form.resetFields();
    setEditData(null);
    setOpen(false);
  };

  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        ...editData,
        startDate: dayjs(editData.startDate),
        endDate: dayjs(editData.endDate),
      });
    }
  }, [editData]);

  const onFinish = (values: any) => {
    console.log("Coupon Values:", {
      ...values,
      startDate: values.startDate.format("YYYY-MM-DD"),
      endDate: values.endDate.format("YYYY-MM-DD"),
    });
    handleClose();
  };

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Coupon" : "Add Coupon"}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
    >
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 15 }}>
        <FormItem
          label="Coupon Name"
          name="name"
          rules={[{ required: true, message: "Enter coupon name" }]}
        >
          <Input style={{height: 42}} placeholder="Summer Sale, Black Friday..." />
        </FormItem>
        <FormItem
          label="Code"
          name="code"
          rules={[{ required: true, message: "Enter coupon code" }]}
        >
          <Input style={{height: 42}} placeholder="SUMMER20, FLASH50" />
        </FormItem>
        <FormItem
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Select start date" }]}
        >
          <DatePicker style={{height: 42}} className="w-full" />
        </FormItem>
        <FormItem
          label="End Date"
          name="endDate"
          rules={[{ required: true, message: "Select end date" }]}
        >
          <DatePicker style={{height: 42}} className="w-full" />
        </FormItem>
        <div className="flex justify-center">
          <Button type="primary" size="large" htmlType="submit">
            {editData ? "Update Coupon" : "Add Coupon"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddCouponModal;
