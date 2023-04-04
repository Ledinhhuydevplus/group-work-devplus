import { Menu, Row, Col, Button, Drawer,  } from "antd";
import { MenuOutlined, FacebookOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Header.css";
import { useState } from "react";


function Header(){
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return(
  <Row className="header-nav"> 
    <Col className="mobile-menu">
        <Button icon={<MenuOutlined/>}></Button>
    </Col>
    <Col xs={{span: 5,offset: 1,}} lg={{span: 5,offset: 2,}}> <img src="https://devplus.edu.vn/assets/images/Artboard_2.png" alt="" className="logo-img"/></Col>
    <Col xs={{span: 5,offset: 1,}} lg={{span: 8,offset: 1,}} className="menu-nav">
      <Menu  mode={"horizontal"} className="navbar-menu">
        <Menu.Item key="Home" title="Home">
          Home
        </Menu.Item>
        <Menu.Item key="About" title="About Devplus">
          About Devplus
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="Our Programme +">
          <Menu.Item>One Plus Campus</Menu.Item>
          <Menu.Item>Two Plus Campus</Menu.Item>
          <Menu.Item>Three Plus Campus</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item title="Devplus Activities">
          Devplus Activities
        </Menu.Item>
      </Menu>
    </Col>
    <Col xs={{span: 5,offset: 1,}} lg={{span: 6,offset: 2,}} className="container-right">
      <Button onClick={showDrawer} icon={<MenuOutlined />}
      style={{margin: 5}} size="large">
      </Button>
      <Drawer
        width={500}
        onClose={onClose} 
        icon={<CloseCircleOutlined />}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Row justify="center">
        <Col > <img src="https://devplus.edu.vn/assets/images/Artboard_2.png" alt="" className="Logo"/> </Col>
        </Row>
        <Row>
          <Col className="text">
          <p> Devplus's mission is filling the gap between school and corporate, reduce in-house training cost and effort for IT companies. </p> 
          </Col>
        </Row>
      <Row gutter={[8, 16]} justify="center">
      <Col span={8}>
        <img src="https://devplus.edu.vn/assets/images/devplus/1.png" alt=""/>
      </Col>
      <Col span={8}>
        <img src="https://devplus.edu.vn/assets/images/devplus/2.png" alt=""/>
      </Col>
      <Col span={6} >
        <img src="https://devplus.edu.vn/assets/images/devplus/3.png" alt=""/>
      </Col>
      <Col span={8} >
        <img src="https://devplus.edu.vn/assets/images/devplus/4.png" alt=""/>
      </Col>
      <Col span={8} >
        <img src="https://devplus.edu.vn/assets/images/devplus/5.png" alt=""/>
      </Col>
      <Col span={6} >
        <img src="https://devplus.edu.vn/assets/images/devplus/6.png" alt=""/>
      </Col>
    </Row>
    <Row justify="center">
      <Col className="mapImg">
        <img src="https://devplus.edu.vn/assets/images/map.png" alt=""/>
      </Col>
    </Row>
    <Row justify="center" className="icon" >
      <Col>
        <Button href="https://www.facebook.com/Devplusprogramme" icon={<FacebookOutlined/>}></Button>
      </Col>
    </Row>
      </Drawer>
    </Col>
    {/* <Row>
    <Col>
    <Dropdown menu={{ }}>
        <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
       </a>
      </Dropdown>
    </Col>
      </Row> */}
  </Row>


  );
};


export default Header;
