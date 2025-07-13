import { Button, Form, Input, Modal } from 'antd';
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editData: any;
  setEditData: (data: any | null) => void;
  onSubmit: (data: any) => void;
};

const AddBlogModal = ({ open, setOpen, editData, setEditData, onSubmit }: Props) => {
  const [form] = Form.useForm();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [content, setContent] = useState('');
  const editor = useRef(null);


  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
      setImageUrl(editData.image);
      setContent(editData.description || '');
    }
  }, [editData]);

  const handleClose = () => {
    form.resetFields();
    setEditData(null);
    setImageUrl(undefined);
    setImgFile(null);
    setContent('');
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleFinish = (values: any) => {
    onSubmit({
      ...values,
      image: imgFile || editData?.image,
      description: content
    });
    handleClose();
  };

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    style: {
      height: "15vh",
      background: "white",
    },
  };

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">{editData ? 'Update Blog' : 'Add Blog'}</p>}
      open={open}
      onCancel={handleClose}
      centered
      footer={false}
      width={900}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <div className="mb-4 w-full">
          <p className="text-md font-medium !pb-3">Image</p>
          <label htmlFor="image" className="p-1 border border-[#BABABA] rounded-lg bg-white cursor-pointer block">
            <div className="flex justify-center items-center w-full h-[100px]">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  style={{ height: '100px', width: '100%', borderRadius: 10, objectFit: 'cover' }}
                  alt="blog"
                />
              ) : (
                <PiImageThin className="text-6xl text-[#666666]" />
              )}
            </div>
          </label>
          <div className="hidden">
            <input id="image" type="file" accept="image/*" onChange={handleChange} />
          </div>
        </div>

        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter blog title' }]}
        >
          <Input style={{ height: 42 }} placeholder="Enter blog title" />
        </Form.Item>

        <Form.Item label="Description"
        >
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={() => { }}
          />
        </Form.Item>

        <div className="flex justify-center">
          <Button type="primary" size="large" htmlType="submit">
            {editData ? 'Update Blog' : 'Add Blog'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddBlogModal;
