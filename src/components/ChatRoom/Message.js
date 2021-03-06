import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WapperStyled = styled.div`
  margin-bottom: 10px;
  .author {
    margin-left: 5px;
    font-weight: bold;
  }
  .date {
    margin-left: 30px;
    font-size: 11px;
    color: #a7a7a7;
  }
  .content-message {
    margin-left: 30px;
  }
`;
export default function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <WapperStyled>
      <div>
        <Avatar size="small" src={photoURL}>
          A
        </Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createdAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="content-message">{text}</Typography.Text>
      </div>
    </WapperStyled>
  );
}
