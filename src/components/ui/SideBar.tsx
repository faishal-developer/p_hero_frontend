import { Drawer, Layout, Menu } from "antd";

import Link from "next/link";
import sideBarItems from './SideBarItems';

const { SubMenu } = Menu;

const SideBar = ({ closeDrawer, open }: any) => {

  const sidebarData=sideBarItems();
  return (
    <Drawer
      title="quiz"
      placement="left"
      onClose={closeDrawer}
      visible={open}
      width={300}
      maskClosable={false}
      mask={false}
    >
      <Menu mode="inline" style={{ width: "100%", borderRight: 0 }}>
        {sidebarData.map((section, index) => (
          <SubMenu
            key={`sub${index}`}
            title={
              <span>
                {section.icon}
                <span style={{ marginLeft: 8 }}>{section.title}</span>
              </span>
            }
          >
            {section.links.map((link, subIndex) => (
              <Menu.Item key={`sub${index}-item${subIndex}`}>
                <Link href={link.href} passHref>
                  <span>{link.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Drawer>
  );
};

export default SideBar;
