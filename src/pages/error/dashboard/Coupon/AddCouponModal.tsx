import { Button, Form, InputNumber, Modal } from 'antd';
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
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Edit Coupon" : "Add Coupon"}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
    >
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 15 }}>
        <FormItem
          label="Coupon Target"
          name="couponTarget"
          rules={[{ required: true, message: "Enter coupon target" }]}
        >
          <InputNumber style={{height: 42, width: "100%"}} placeholder="Enter coupon target" />
        </FormItem>
        
        <FormItem
          label="Coupon Discount"
          name="couponDiscount"
          rules={[{ required: true, message: "Enter coupon discount" }]}
        >
          <InputNumber style={{height: 42, width: "100%"}} placeholder="Enter coupon discount" />
        </FormItem>
       
        <div className="flex justify-center">
          <Button type="primary" size="large" htmlType="submit">
            {editData ? "Edit Coupon" : "Add Coupon"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddCouponModal;
