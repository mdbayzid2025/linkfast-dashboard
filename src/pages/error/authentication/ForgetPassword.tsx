import { Button, ConfigProvider, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log("login values", values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#009A54",
        },
        components: {
          Input: {
            borderRadius: 5,
          }
        }
      }}
    >
      <div
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="relative h-screen w-screen overflow-hidden"
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-xs z-0" />

        {/* Login Box */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">
            <img src="/Layer_1.png" alt="Logo" className="w-24 mb-4 mx-auto" />
            <h1 className="text-2xl font-semibold text-[#009A54] text-center mb-1">Forget Password</h1>            

            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label={<p className='text-lg font-medium text-slate-500'>Email</p>}
                name="email"
                rules={[{ required: true, message: 'Enter your email address' }]}
              >
                <Input style={{ height: 42 }} placeholder="Enter your email address" />
              </Form.Item>
             
            <Link to="/verify-otp">
              <div className="flex items-center justify-center">
                <Button style={{ width: "100%" }} type="primary" size="large" htmlType="submit">
                  Send Code
                </Button>
              </div>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ForgetPassword;
