import { Button, Empty } from "antd";
import React from "react";

const EmptyField = ({ title, buttonStatement }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty
        description={`There are no ${title}`}
        children={<Button type="primary">{buttonStatement}</Button>}
      />
    </div>
  );
};

export default EmptyField;
