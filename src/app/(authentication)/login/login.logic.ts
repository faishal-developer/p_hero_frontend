import React from "react";
import { Form, message } from "antd";
import { useLoginMutation } from "@/redux/auth/authApi";
import { useRouter } from "next/navigation";
import { paths } from "@/paths/paths";

const useLogin = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      const res: any = await login(values).unwrap();
      if (res.success) {
        message.success(res.message);
        console.log(res);
        localStorage.setItem("accessToken", res?.token);
        localStorage.setItem("LC-credential", res?.userData);
        router.push(paths.employees);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return { form, isLoading, login, router, onFinish, onFinishFailed };
};

export default useLogin;
