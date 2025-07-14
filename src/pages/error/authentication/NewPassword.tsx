import { Button, ConfigProvider, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Link } from 'react-router-dom';

const NewPassword = () => {
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
                        <h1 className="text-2xl font-semibold text-[#009A54] text-center mb-1">Set a new password</h1>
                        <p className='px-3 text-center py-2'>Create a new password. Ensure it differs from previous ones for security</p>
                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical"
                            style={{paddingBlock:20}}
                        >
                            <Form.Item
                                label={<p className='text-lg font-medium text-slate-500'>New Password</p>}
                                name="password"
                                rules={[{ required: true, message: 'Enter password' }]}
                            >
                                <Input type="password" style={{ height: 42, }} placeholder="#ABC@1565!" />
                            </Form.Item>
                            <Form.Item
                                label={<p className='text-lg font-medium text-slate-500'>Confrim Password</p>}
                                name="confrimPassword"
                                dependencies={['password']}
                                hasFeedback
                                rules={[{
                                    required: true,
                                    message: 'Enter password',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                })
                                ]}
                            >
                                <Input type="password" style={{ height: 42, }} placeholder="#ABC@1565!" />
                            </Form.Item>

                            <Link to="/">
                                <div className="flex items-center justify-center">
                                    <Button style={{ width: "100%" }} type="primary" size="large" htmlType="submit">
                                        Update Password
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

export default NewPassword;
