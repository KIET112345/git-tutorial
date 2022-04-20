import React from "react";
import { Row, Col } from "antd";
import UserInfor from "./UserInfor";
import RoomList from "./RomList";
import styled from "styled-components";

const SidebarStyled = styled.div`
  background-color: #3f0e40;
  color: white;
  height: 100vh;
`;
export default function SideBar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfor></UserInfor>
        </Col>
        <Col span={24}>
          <RoomList></RoomList>
        </Col>
      </Row>
    </SidebarStyled>
  );
}
