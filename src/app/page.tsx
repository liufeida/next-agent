"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, OpenAIOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { FC } from "react";

const Page: FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="h-screen flex">
      <div className="w-9/5 max-xl:w-7/5 max-lg:w-5/5 max-md:w-0 bg-[url(../assets/images/loginBg1.jpg)] bg-cover bg-center"></div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-white rounded-md shadow-md inset-shadow-sm shadow-gray p-8 w-96 transition hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
          <p className="pb-4 flex gap-2 items-center">
            <div className="">
              <OpenAIOutlined spin />
            </div>
            <span className="font-bold">My Blog</span>
          </p>
          <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 360 }} onFinish={onFinish} size="large" layout="vertical">
            <Form.Item name="username" label="Username" rules={[{ required: true, message: "Please input your Username!" }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
              or <a href="">Register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
