import { ConfigProvider, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import type { TSidebarItem } from '../../utils/generateSidebarItems';
import { sidebarItems } from '../../utils/sidebarItems';

const {Sider} = Layout;

const Sidebar = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleOpenChange = (keys:string[])=>{
    setOpenKeys(keys);
  }

  console.log("pathname", location.pathname);
  

  const sidebarItemGenerator = (items: TSidebarItem[]) =>{
    return items.map(item=>{
      if(item.children){
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,          
          children: item.children.map(child=>({
            key: `/${child.path}`,
            label: child.label,            
            icon: <Link to={`/${child.path}`}>{child.label}</Link>
          }))
        }       
      }
       return {
          key: `/${item.path}`,
          icon: item.icon,          
          label: <Link to={`/${item.path}`}>{item.label}</Link>,
        }
    })
  }
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#54BB8C"
      },
      components: {
        Menu: {
          itemSelectedBg :"54BB8C",
          itemSelectedColor: "#ffffff",
          itemActiveBg: "#286a25",
          itemBorderRadius: "10px 10px 10px 10px " as any,
          itemHeight: 45,
          itemMarginBlock: 12,
        }
      }
    }}>
      
      <Sider width={250}
      theme='light'
      breakpoint='lg'
      collapsedWidth="0"
      >
        <Menu 
        theme='light'
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={sidebarItemGenerator(sidebarItems)}
        />
      </Sider>      
    </ConfigProvider>
  )
}

export default Sidebar