import {
  FcHome,
  FcPlanner,
  FcConferenceCall,
  FcDepartment,
} from "react-icons/fc";
import { List, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Links = [
  {
    name: "Overview",
    icon: <FcHome />,
    url: "/",
  },
  {
    name: "Reports",
    icon: <FcPlanner />,
    url: "/reports",
  },
  {
    name: "Bible Students",
    icon: <FcConferenceCall />,
    url: "/bible-students",
  },
  {
    name: "Territories",
    icon: <FcDepartment />,
    url: "/territories",
  },
];

export const RenderLinks = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <List>
      {Links.map((link, i) => (
        <List.Item style={{ padding: "0px", borderBottom: "none" }} key={i}>
          <Button
            icon={link.icon}
            block
            type="text"
            onClick={() => {
              navigate(link.url);
              onClose();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              padding: "30px 10px",
              background: `${
                location.pathname === link.url ? "rgba(0,0,0,0.05)" : ""
              }`,
            }}
          >
            <span style={{ paddingLeft: "15px" }}>{link.name}</span>
          </Button>
        </List.Item>
      ))}
    </List>
  );
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
