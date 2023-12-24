'use client'
import React, { useState } from 'react'
import { Card, Row, Col, Button, Form, Input, message, Select } from 'antd'
import CVBreadcrumb from './partial/CVBreadcrumb';
import { useAddCategoryMutation } from '@/redux/category/categoryApi';
import { categoryItemStatus } from './utils/categoryConstant';

const initialData = {
    name: "",
    desc: "",
};

const AddCategory = () => {

    // global
    const [addCategory] = useAddCategoryMutation();

    // states
    const [isLoading, setIsLoading] = useState(false);

    /* //** form  */
    const [form] = Form.useForm();

    //** handle onfinish  */
    const onFinish = async (values: any) => {
        try {
            setIsLoading(true)
            await addCategory(values).then((res: any) => {
                if (res?.data?.success) {
                    message.success(res?.data.message);
                    form.setFieldsValue(initialData);
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    message.error(res?.data.message);
                }
            });
        } catch (error) {
            setIsLoading(false)
            message.error("Not able to create");
        }
    }

    return (
        <>

            <CVBreadcrumb link="/category" title='View Categories' />

            <Card title="Add Category" bordered style={{ marginTop: '20px' }}>

                <Form
                    form={form}
                    autoComplete="off"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={(error) => {
                        console.log({ error });
                    }}
                >

                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                        <Col className="gutter-row" span={12}>
                            <label
                                htmlFor='name'
                                style={{
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                }}
                            >
                                Category title
                            </label>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter category name",
                                    },
                                    { whitespace: true },
                                ]}
                                hasFeedback
                            >
                                <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Type Category name" />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={12}>
                            <div>
                                <label
                                    htmlFor='status'
                                    style={{
                                        textTransform: 'uppercase',
                                        fontWeight: 500,
                                    }}
                                >
                                    Category Status
                                </label>

                                <Form.Item
                                    name="status"
                                    hasFeedback
                                >
                                    <Select size="large" style={{ width: '100%', marginTop: '0.5rem', textTransform: 'capitalize' }}
                                        placeholder="Select a category"
                                        defaultValue={categoryItemStatus[0]}
                                    >
                                        {categoryItemStatus?.map((pt, index) => (
                                            <Select.Option
                                                key={index}
                                                value={`${pt.value}`}
                                                style={{ textTransform: 'capitalize', }}
                                            >
                                                {pt?.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={24}>
                            <label
                                htmlFor='desc'
                                style={{
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                }}
                            >
                                Short Description
                            </label>
                            <Form.Item
                                name="desc"
                                rules={[
                                    {
                                        required: false,
                                        message: "description is required",
                                    },
                                    { whitespace: true },
                                ]}
                                hasFeedback
                            >
                                <Input.TextArea
                                    style={{ marginTop: '0.5rem' }}
                                    placeholder="Category description here"
                                />
                            </Form.Item>
                        </Col>

                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            size="large"
                        >
                            Create Category
                        </Button>

                    </Row>
                </Form >
            </Card >
        </>
    )
}

export default AddCategory