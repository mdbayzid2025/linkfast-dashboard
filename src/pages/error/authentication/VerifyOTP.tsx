import { Button, ConfigProvider, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { OTPProps } from 'antd/es/input/OTP';
import { Link } from 'react-router-dom';

const VerifyOTP = () => {
    const [form] = useForm();

    const onFinish = (values: any) => {
        console.log("login values", values);
    };

    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
    };

    const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
    };

    const sharedProps: OTPProps = {
        onChange,
        onInput,
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
                    <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-xl">
                        <img src="/Layer_1.png" alt="Logo" className="w-24 mb-4 mx-auto" />
                        <h1 className="text-xl font-semibold text-[#009A54] text-center mb-1">Check your email</h1>
                        <p className='py-2'>We sent a reset link to contact@dscode...com enter 5 digit code that mentioned in the email</p>

                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <div className="my-8">
                                <Input.OTP style={{
                                    width: 500,
                                }}
                                    className=""
                                    variant="filled"
                                    length={6} {...sharedProps} />
                            </div>

                            <Link to="/new-password">
                                <div className="flex items-center justify-center">
                                    <Button style={{ width: "100%" }} type="primary" size="large" htmlType="submit">
                                        Verify OTP Code
                                    </Button>
                                </div>
                            </Link>
                        </Form>
                        <p className='pt-4 text-center'>Didn't receive the code? <span className='text-[#009A54] font-medium'>Resend code</span></p>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default VerifyOTP;
