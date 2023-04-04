import { Button, Form, Input, message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";

export default function InputModal(props) {
  const [form] = Form.useForm();

  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const [input, setInput] = useState({
    email_input: "",
    name_input: "",
  });

  useEffect(() => {
    if (props.isShown) {
      setOpenModal(true);
    }
  }, [props.isShown]);

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="84">+84</Select.Option>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const handleInput = (e) => {
    e.persist();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setOpenModal(false);
    props.setShowModal(false);
  };

  const modalFooter = [
    <Button key="back" onClick={handleCancel}>
      Cancel
    </Button>,
  ];

  const onFinish = (values) => {
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "nhanvothanh719@gmail.com", //
      Password : "CB787DA51D2E7D38BC019B803FA8BEB595A8", //
      To : values.email,
      From : "nhanvothanh719@gmail.com", //
      Subject : "Email sent from Devplus",
      Body : `Dear ${values.name}, your information is sent successfully to us. We will contact with you soon.`
  }).then(
    message => {
      messageApi.open({
        type: "loading",
        content: "Loading...",
      });
      setTimeout(() => {
        setOpenModal(false);
        setConfirmLoading(false);
        messageApi.open({
          type: "success",
          content: "Thank you for sending to us!",
          duration: 4,
        });
      }, 3000);
      form.resetFields(["name", "email", "gender", "phone"]);
      props.setShowModal(false);
    }
  );
  };

  const onFinishFailed = (errorInfo) => {
    setTimeout(() => {
      setConfirmLoading(false);
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Welcome to Devplus"
        open={openModal}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={modalFooter}
      >
        <Form
          form={form}
          {...layout}
          name="basic"
          initialValues={{ gender: "male", prefix: "84" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            hasFeedback
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Input your name" name="name_input" onChange={handleInput} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Input email is not valid!" },
            ]}
          >
            <Input placeholder="Input your email" name="email_input" onChange={handleInput} />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            hasFeedback
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select your gender"
            >
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            hasFeedback
            rules={[
              { required: true, message: "Please input your phone number!" },
              { len: 10, message: "Input phone number is not valid!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} shouldUpdate>
          {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        )}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
