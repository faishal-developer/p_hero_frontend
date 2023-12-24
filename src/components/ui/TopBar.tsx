import { Avatar, Dropdown, Input, Menu } from "antd";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { MdCenterFocusStrong } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const TopBar = ({ open, closeDrawer, showDrawer }: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="1">Edit Profile</Menu.Item>
      <Menu.Item key="2">Account Setting</Menu.Item>
      <Menu.Item key="3">Wallet</Menu.Item>
      <Menu.Item key="4">Billing</Menu.Item>
      <Menu.Item key="5">Help Center</Menu.Item>
      <Menu.Item key="6" disabled>
        --------------------
      </Menu.Item>
      <Menu.Item key="7">Log Out</Menu.Item>
    </Menu>
  );

  const toggleFullscreen = () => {
    const element = document.documentElement as HTMLElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        const options: FullscreenOptions = {
          navigationUI: "hide",
        };
        element
          .requestFullscreen(options)
          .then(() => {
            setIsFullscreen(true);
          })
          .catch((error) => {
            console.error("Error attempting to enter fullscreen:", error);
          });
      }
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => {
            setIsFullscreen(false);
          })
          .catch((error) => {
            console.error("Error attempting to exit fullscreen:", error);
          });
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        marginLeft: open ? 320 : 0,
        transition: "margin 0.4s ",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        <div>
          {open ? (
            <div onClick={closeDrawer}>
              <HiBars3 style={{ fontSize: "22px", cursor: "pointer" }} />
            </div>
          ) : (
            <div onClick={showDrawer}>
              <HiBars3 style={{ fontSize: "22px", cursor: "pointer" }} />
            </div>
          )}
        </div>
        <div style={{ flex: 1, margin: "0 20px" }}>
          <Input
            size="middle"
            placeholder="Search Pages"
            suffix={<CiSearch />}
            allowClear
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#5A5A5A",
          }}
        >
          <IoIosNotifications style={{ fontSize: "22px", cursor: "pointer" }} />
          <MdCenterFocusStrong
            onClick={toggleFullscreen}
            style={{ fontSize: "22px", cursor: "pointer" }}
          />
          <Dropdown overlay={menu}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar
                size="default"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FaCaretDown style={{ fontSize: "22px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
