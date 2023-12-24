'use client'
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import style from "../style/authentication.module.css";
import usePageBody from "./PageBody.logic";


const PageBody = () => {
    const {form,register,router,onFinish,onFinishFailed,isLoading} = usePageBody();

    return (
        <div className={style.main_container} >
            <div className={style.form_container}>
                <div className={style.form_container_title}>
                    <h2>Register</h2>
                    <p>Fill out the from to create a new account</p>
                </div>

                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <label style={{ fontSize: "15px" }} >Name</label>
                    <Form.Item
                        name="name"
                        style={{ marginBottom: "4px" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your Full Name!",
                            },
                        ]}
                    >
                        <Input style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                    </Form.Item>
                    <label style={{ fontSize: "15px" }} >Email Address</label>
                    <Form.Item
                        style={{ marginBottom: "4px" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your valid email address!",
                            },
                        ]}
                    >
                        <Input style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                    </Form.Item>
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

                    <Form.Item>
                        <Button style={{
                            width: "100%",
                            borderRadius: "2px",
                            textAlign: "center",
                            margin: "auto",
                            fontSize: '16px',
                            fontWeight: "500",
                            height: "40px",
                            boxShadow: "2px 2px 8px 3px rgba(0, 0, 0, 0.2)"
                        }}
                            type="primary" htmlType="submit" loading={isLoading}>Register</Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
};

export default PageBody;