import { Button, Dropdown, Empty, Form, Input, Modal, Menu } from "antd";
import moment from "moment";
import { useContext, useState } from "react";
import styled from "styled-components";
import { MoreOutlined, PlusCircleFilled } from "@ant-design/icons";
import { AppContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

const Territories = () => {
  const { territories, setTerritories } = useContext(AppContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    const territory_data = {
      date: moment()._d,
      id: uuidv4(),
      name: values.name,
      location: values.location,
      notes: values.notes,
    };
    setIsModalVisible(false);
    setTerritories([...territories, territory_data]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const deleteTerritory = (id) => {
    const updTerritories = territories.filter(
      (territory) => territory.id !== id
    );
    setTerritories(updTerritories);
  };

  const territoryMenu = (id) => {
    return (
      <Menu
        items={[
          {
            key: "1",
            label: "Edit",
          },
          {
            key: "2",
            label: "Delete",
            onClick: deleteTerritory(id),
          },
        ]}
      />
    );
  };

  return (
    <BibleStudentsWrapper>
      <nav>
        <h2>Territories</h2>
        <Button
          type="text"
          icon={<PlusCircleFilled size={25} />}
          onClick={showModal}
        />
      </nav>
      {territories.length === 0 ? (
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
            description={"There are no territories"}
            children={
              <Button
                style={{ background: "#00bb", borderColor: "#00bb" }}
                type="primary"
                onClick={showModal}
              >
                Add a new territory
              </Button>
            }
          />
        </div>
      ) : (
        <FilledContainer>
          <StudentsContainer>
            {territories.map((ts, i) => (
              <BsCard key={i}>
                <div>
                  <p style={{ color: "#00bb" }}>
                    {moment(ts.date).format("dddd, MMMM D, YYYY h:mm A")}
                  </p>
                  <Dropdown
                    overlay={() => territoryMenu(ts.id)}
                    trigger={"click"}
                  >
                    <Button type="text" icon={<MoreOutlined />} />
                  </Dropdown>
                </div>
                <h3>
                  <span>Name:</span> {ts.name}
                </h3>
                <p>
                  <span>Location:</span> {ts.location}
                </p>
                <p>
                  <span>Notes:</span> {ts.notes}
                </p>
              </BsCard>
            ))}
          </StudentsContainer>
        </FilledContainer>
      )}

      <Modal
        title="Add a new territory"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please input the name of the territory!",
              },
            ]}
          >
            <Input placeholder="Territory name" />
          </Form.Item>

          <Form.Item
            name="location"
            rules={[
              {
                required: true,
                message: "Please input the location of the student!",
              },
            ]}
          >
            <Input placeholder="Territory location" />
          </Form.Item>

          <Form.Item name="notes">
            <Input.TextArea rows={4} placeholder="Notes" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ background: "#00bb", borderColor: "#00bb" }}
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </BibleStudentsWrapper>
  );
};

const BibleStudentsWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 15px;
  }
`;

const FilledContainer = styled.div`
  width: 100%;
`;

const StudentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const BsCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  margin-top: 20px;
  /* margin-right: 10px; */
  cursor: pointer;
  padding: 10px;

  h4,
  p {
    margin: 10px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  span {
    font-weight: bold;
  }
`;

export default Territories;
