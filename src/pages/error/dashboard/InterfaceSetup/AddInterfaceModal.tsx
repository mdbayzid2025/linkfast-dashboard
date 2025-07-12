import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editData: any;
  setEditData: (data: any | null) => void;
};

const AddInterfaceModal = ({ open, setOpen, editData, setEditData }: Props) => {
  const [form] = Form.useForm();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const handleClose = () => {
    form.resetFields();
    setEditData(null);
    setImgFile(null);
    setImageUrl(undefined);
    setOpen(false);
  };

  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
      setImageUrl(editData.image);
    }
  }, [editData, form]);

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
      image: imgFile
    });
    handleClose();
  };

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? "Update Interface" : "Add Interface"}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: 15 }}
      >
        {/* Image Upload */}
        <div className="mb-4 w-full">
          <p className="text-md font-medium !pb-3">Interface Background Image</p>
          <label htmlFor="image" className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
            <div className="flex justify-center items-center w-full h-[130px]">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  style={{ height: "130px", width: "100%", borderRadius: 10, objectFit: "cover" }}
                  alt="Interface"
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
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input style={{ height: 42 }} placeholder="Enter interface title" />
        </FormItem>

        <FormItem
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <TextArea rows={4} placeholder="Enter description" />
        </FormItem>

        <div className="flex justify-center">
          <Button type="primary" size="large" htmlType="submit">
            {editData ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddInterfaceModal;
