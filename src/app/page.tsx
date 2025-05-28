"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStyles } from "antd-style";
import { FC } from "react";
import { Link } from "react-router-dom";

const useStyles = createStyles(({ css }) => {
  return {};
});

const Page: FC = () => {
  const { styles } = useStyles();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className='flex h-screen justify-around'>
      <div>login</div>
      <Link to='/login' />
      <div>details</div>
    </div>
  );
};

export default Page;
