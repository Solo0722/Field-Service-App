import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/GlobalContext";

const Auth = () => {
  const { publisher, setPublisher } = useContext(AppContext);

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    setPublisher(values.publisher);
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthContainer>
      <FormWrapper>
        <img src="/daily-tasks.png" width={40} height={40} alt="logo" />
        <h2>Hey there zealous servant of Jehovah!</h2>
        <p>Let's help you get started</p>
        <p>Create a username</p>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          style={{ width: "100%" }}
        >
          <Form.Item
            name="publisher"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ margin: "0" }}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ width: "100%" }}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormWrapper = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
  }

  button {
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 55%;
    }
  }
  @media screen and (max-width: 486px) {
    & {
      width: 85%;
    }
  }
`;

export default Auth;
