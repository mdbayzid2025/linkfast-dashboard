import { Button, ConfigProvider, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { TSidebarItem } from '../../utils/generateSidebarItems';
import { sidebarItems } from '../../utils/sidebarItems';
import { TbLogout } from 'react-icons/tb';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const findParentKey = (items: TSidebarItem[], pathname: string): string[] => {
    for (const item of items) {
      if (item.children) {
        if (item.children.some(child => `/${child.path}` === pathname)) {
          return [item.key];
        }
      }
    }
    return [];
  };

  useEffect(() => {
    const initialOpenKeys = findParentKey(sidebarItems, location.pathname);
    setOpenKeys(initialOpenKeys);
  }, [location.pathname]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const sidebarItemGenerator = (items: TSidebarItem[]) => {
    return items.map(item => {
      if (item.children) {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          children: item.children.map(child => ({
            key: `/${child.path}`,
            label: <Link to={`/${child.path}`}>{child.label}</Link>,
            icon: child.icon
          }))
        };
      }
      return {
        key: `/${item.path}`,
        icon: item.icon,
        label: <Link to={`/${item.path}`}>{item.label}</Link>,
      };
    });
  };

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#009A54"
      },
      components: {
        Menu: {
          itemSelectedBg: "#009A54",
          itemSelectedColor: "#ffffff",
          itemActiveBg: "#286a25",
          itemBorderRadius: "10px" as any,
          itemHeight: 45,
          itemMarginBlock: 12,
        }
      }
    }}>
      <Sider
        width={250}
        theme='light'
        breakpoint='lg'
        collapsedWidth="0"
      >
        <Link to="/">
        <div className=""
        style={{
          margin: "0 20px",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >

        <img src='/Layer_1.png' className="mx-auto h-[80px] w-[100px] " alt='logo'/>
        </div>
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 120px)",
          }}
        >
          <Menu
            theme='light'
            mode="inline"
            selectedKeys={[location.pathname]}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            items={sidebarItemGenerator(sidebarItems)}
            style={{ flexGrow: 1, overflowY: "auto" }}
          />

          <Button
            type="primary"
            // icon={}
            style={{
              marginTop: "auto",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "#009A54",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              height: 45,
              paddingBlock: "20px",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            <TbLogout size={24} />
            Logout
          </Button>
        </div>
      </Sider>
    </ConfigProvider>
  );
};

export default Sidebar;