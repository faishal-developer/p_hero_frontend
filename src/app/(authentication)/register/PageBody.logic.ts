"use client";
import React from "react";
import { Form, message } from "antd";
import { useRegisterMutation } from "@/redux/auth/authApi";
import { useRouter } from "next/navigation";

const usePageBody = () => {
  const [form] = Form.useForm();
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const onFinish = async (values: any) => {
    if (values.password !== values.confirm_password) {
      message.error("confirm password is not matching");
    } else {
      try {
        values.role = "user";
        delete values.confirm_password;
        const res: any = await register(values).unwrap();
        if (res.success) {
          message.success(res.message);
          router.push("/login");
        }
      } catch (error: any) {
        message.error(error.data.message);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return { form, register, router, onFinish, onFinishFailed, isLoading };
};

export default usePageBody;
