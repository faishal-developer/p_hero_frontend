/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

type LayoutType = Parameters<typeof Form>[0]["layout"];

const EmployeeModal: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const formItemLayout =
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Employee Information
      </Button>
      <Modal
        title="Employee Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
        >
          <Form.Item label="Name">
            <Input placeholder="input your name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="input your email" />
          </Form.Item>
          <Form.Item label="Address">
            <Input placeholder="input your address" />
          </Form.Item>
          <Form.Item label="Phone">
            <Input placeholder="input your phone number" />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EmployeeModal;
