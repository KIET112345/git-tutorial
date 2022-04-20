import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Button, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const WapperStyled = styled.div`
  height: 100vh;
`;
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rbg(230, 230, 230);
  .header {
    &__infor {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;
const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 56px);
  padding: 30px;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0px;
  border: 1px solid rgba(230, 230, 230);
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
export default function ChatWindow() {
  return (
    <WapperStyled>
      <HeaderStyled>
        <div className="header__infor">
          <p className="header__title">Room1</p>
          <span className="header__description">Đây là mô tả room1</span>
        </div>
        <ButtonGroupStyled>
          <Button type="text" icon={<UserAddOutlined />}>
            Mời
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="text"
            photoURL={null}
            displayName="Kiet Vo"
            createdAt="12301828"
          ></Message>
          <Message
            text="text"
            photoURL={null}
            displayName="Kiet Vo"
            createdAt="12301828"
          ></Message>
          <Message
            text="text"
            photoURL={null}
            displayName="Kiet Vo"
            createdAt="12301828"
          ></Message>
          <Message
            text="text"
            photoURL={null}
            displayName="Kiet Vo"
            createdAt="12301828"
          ></Message>
          <Message
            text="text"
            photoURL={null}
            displayName="Kiet Vo"
            createdAt="12301828"
          ></Message>
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="Nhập tin nhắn"
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WapperStyled>
  );
}
