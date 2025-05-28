/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, OpenAIOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { createStyles } from "antd-style";
import Image from "next/image";
import { FC } from "react";
import loginBg2 from '@/assets/images/loginBg2.png'

const useStyles = createStyles(({ css }) => {
  return {
  };
});

const Page: FC = () => {
  const { styles } = useStyles();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // bg-[url(../assets/images/loginBg2.png)] bg-contain bg-no-repeat bg-center
  return (
    <div className='flex h-screen'>
      <div className={`flex justify-center items-center w-9/5 max-xl:w-7/5 max-lg:w-5/5 max-md:w-0`}>
        <Image className="w-md blur-sm grayscale cursor-pointer transition ease-in duration-500 hover:filter-none" src={loginBg2} alt="123" />
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='shadow-gray w-96 cursor-pointer rounded-md bg-white p-8 shadow-md inset-shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl'>
          <p className='flex items-center gap-2 pb-4'>
            <OpenAIOutlined spin />
            <span className='font-bold'>My Blog</span>
          </p>
          <Form
            name='login'
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
            size='large'
            layout='vertical'
          >
            <Form.Item
              name='username'
              label='Username'
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder='Username' />
            </Form.Item>
            <Form.Item
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input prefix={<LockOutlined />} type='password' placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Flex justify='space-between' align='center'>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href=''>Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type='primary' htmlType='submit'>
                Log in
              </Button>
              or <a href=''>Register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
