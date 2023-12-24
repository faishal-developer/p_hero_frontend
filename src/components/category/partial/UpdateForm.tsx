import { Button, Col, Form, Input, Row, Select, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { ICategory } from '../utils/categoryInterface';
import { useUpdateCategoryMutation } from '@/redux/category/categoryApi';
import { categoryItemStatus } from '../utils/categoryConstant';

type Props = {
    data: ICategory;
    categoryId: any;
}

const UpdateForm = ({ data, categoryId }: Props) => {

    const initialData = {
        name: data.name || '',
        desc: data.desc || '',
    };

    /* //** form  */
    const [form] = Form.useForm();

    // global
    const [updateCategory] = useUpdateCategoryMutation();

    // states
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        form.setFieldsValue({
            name: data.name,
            desc: data.desc
        });
    }, [data, form])

    //** handle onfinish  */
    const onFinish = async (values: any) => {
        try {
            setIsLoading(true)
            await updateCategory({ id: categoryId, data: values }).then((res: any) => {
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
            setIsLoading(false);
            console.log(error);
            message.error("Not able to create");
        }
    }

    return (
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
                                defaultValue={categoryItemStatus.find((item) => item.value === data.status)}
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
                    Update Category
                </Button>

            </Row>
        </Form>
    )
}

export default UpdateForm