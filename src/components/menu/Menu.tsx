import { useState } from 'react';
import {  Button, Menu as CustomMenu  } from  'antd'
import { 
	TagsOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
   } from '@ant-design/icons';

const items = [
  { 
	key: '1',
	label: 'Task 1',
    icon: <TagsOutlined/>,
  },
  { 
	key: '2',
	label: 'Task 2',
    icon: <TagsOutlined/>,
  },
];

const Menu = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
	  setCollapsed(!collapsed);
	};

	return (
		<div style={{ 
			position: 'fixed',
			left: 0,
			top: 0,
			bottom: 0,
			zIndex: 100,
			backgroundColor: '#001529',
		  }}>
		<Button 
        type="primary" 
        onClick={toggleCollapsed} 
        style={{ 
          margin: '16px',
          width: collapsed ? 48 : 'calc(100% - 32px)',
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
		<CustomMenu
		  defaultSelectedKeys={['1']}
		  defaultOpenKeys={['sub1']}
		  mode="inline"
		  theme="dark"
		  inlineCollapsed={collapsed}
		  items={items}
		  style={{
			height: 'calc(100vh - 80px)', 
			overflowY: 'auto',
			overflowX: 'hidden',
			borderRight: 0,
		  }}
		/>
	  </div>
	);
  };

export default Menu


