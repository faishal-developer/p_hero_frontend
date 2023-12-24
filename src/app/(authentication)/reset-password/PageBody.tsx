'use client'
import { Button, Form, Input } from "antd";
import Link from "next/link";
import style from "../style/authentication.module.css";


const PageBody = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values)
        if (values.password !== values.confirm_password) {
            console.log('password and confirm password is not same')
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={style.main_container} >
            <div className={style.form_container}>
                <div className={style.form_container_title}>
                    <h2>Reset Password </h2>
                    <p>Please Provide your new password here!</p>
                </div>
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <label style={{ fontSize: "15px" }} >Password</label>
                    <Form.Item
                        style={{ marginBottom: "4px" }}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                    </Form.Item>

                    <div>
                        <label style={{ fontSize: "15px" }} >Confirm Password</label>
                        <Form.Item
                            style={{ marginBottom: "4px" }}
                            name="confirm_password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Confirm Password!",
                                },
                            ]}
                        >
                            <Input.Password style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                        </Form.Item>
                    </div>

                    <div style={{ width: "100%", margin: "14px 0px", textAlign: "right" }}>
                        already have a account?&nbsp;
                        <Link href="/login" className="">
                            login
                        </Link>
                    </div>

                    <div style={{ width: "100%", textAlign: "center", }}>
                        <Form.Item>
                            <Button style={{
                                width: "100%",
                                borderRadius: "2px",
                                textAlign: "center",
                                margin: "auto",
                                fontSize: 14,
                                fontWeight: "500",
                                height: "40px",
                                boxShadow: "2px 2px 8px 3px rgba(0, 0, 0, 0.2)"
                            }} type="primary" htmlType="submit">Reset Password</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PageBody;