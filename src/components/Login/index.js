import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth, db } from "../../firebase/config";
import { addDocument } from "../../firebase/service";

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFBLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <div>
      <Row justify="center" style={{ height: "800px" }}>
        <Col span="8">
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: "10px" }}>
            Login bằng google
          </Button>
          <Button
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={handleFBLogin}
          >
            Login bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
