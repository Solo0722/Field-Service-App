import { Button, Drawer } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { RenderLinks } from "../utils/data";

const Drawerbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Wrapper>
      <Button
        type="text"
        style={{ display: "flex", justifyContent: "left" }}
        onClick={visible ? onClose : showDrawer}
        icon={<BiMenu size={25} style={{ color: "#fff" }} />}
      />

      <Drawer
        placement="left"
        headerStyle={{ display: "none" }}
        footerStyle={{ display: "none" }}
        bodyStyle={{ padding: "0", margin: "0px" }}
        width="65%"
        onClose={onClose}
        visible={visible}
        style={{ marginTop: "50px" }}
      >
        <RenderLinks onClose={onClose} />
      </Drawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    & {
      display: inline-block;
    }
  }
`;

export default Drawerbar;
