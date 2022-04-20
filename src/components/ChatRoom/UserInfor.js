import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
import AuthProvider from "../../context/AuthProvider";
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rbg(82, 38, 83);
  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfor() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthProvider);

  // React.useEffect(() => {
  //   db.collection("users").onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
