"use client";
import loginBg2 from "@/assets/images/loginBg2.png";
import { ACCESS_TOKEN_KEY } from "@/contants";
import { getCurrentUser, login, type LoginParams } from "@/services";
import { LockOutlined, OpenAIOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import Image from "next/image";
import { FC } from "react";

const Page: FC = () => {
  const onFinish = async (values: LoginParams) => {
    const res = await login({ body: values });
    console.warn("res: ", res.data?.access_token);
    localStorage.setItem(ACCESS_TOKEN_KEY, res.data?.access_token ?? "");
  };

  const handleClick = async () => {
    await getCurrentUser();
  };

  // bg-[url(../assets/images/loginBg2.png)] bg-contain bg-no-repeat bg-center
  return (
    <div className='flex h-screen'>
      <div className={`flex w-5/5 items-end justify-center max-xl:w-7/5 max-lg:w-5/5 max-md:w-0`}>
        <Image
          className='w-sm cursor-pointer blur-sm grayscale transition duration-500 ease-in hover:filter-none max-[1000px]:filter-none'
          src={loginBg2}
          alt='123'
        />
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
            <Form.Item>
              <Button block type='primary' onClick={() => handleClick()}>
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
