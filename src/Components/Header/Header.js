/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Menu,
  Grid,
  Drawer,
  Row,
  Col,
  Image,
  Button,
  Dropdown,
  Space,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./header.scss";
import close from "../../assets/images/close.png";
import React from "react";
const { useBreakpoint } = Grid;

const Headernav = () => {
  const [openSide, setOpenSide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { lg } = useBreakpoint();

  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const toggleDrawer = (e) => {
    e.stopPropagation();
    setOpenSide(!openSide);
  };
  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!lg && e.target.classList.contains("dr op")) setOpenMenu(!openMenu);
  };
  const items = [
    {
      label: "HOME",
      key: "1",
    },
    {
      label: "ABOUT DEVPLUS",
      key: "2",
    },
    {
      label: "OUR PROGRAMME",
      key: "3",
    },
    {
      label: "DEVPLUS ACTIVITIES",
      key: "4",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Row justify="center">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 24 }}
        md={{ span: 22 }}
        lg={{ span: 22 }}
        xl={{ span: 20 }}
        xxl={{ span: 16 }}
      >
        <nav className="navbar">
          <div className="nav-main">
            <a>
              <img
                style={{ maxHeight: "35px" }}
                src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
              ></img>
            </a>
            <div
              className={
                "nav-menu " + (!lg ? "drop " : "") + (openMenu ? "show" : "")
              }
              onClick={toggleMenu}
            >
              <div>
                <Menu
                  items={[
                    { label: "HOME", key: 0 },
                    { label: "ABOUT DEVPLUS", key: 1 },
                    {
                      label: "OUR PROGRAMME",
                      key: 2,
                      children: [
                        { label: "One Plus Campus", key: 2.1 },
                        { label: "Two Plus Campus", key: 2.2 },
                        { label: "Three Plus Campus", key: 2.3 },
                      ],
                      className: `nav-sub ${lg ? "" : "collapse"}`,
                    },
                    { label: "DEVPLUS ACTIVITIES", key: 3 },
                  ]}
                  mode={lg ? "horizontal" : "inline"}
                />
              </div>
            </div>
          </div>
          <MenuOutlined onClick={toggleDrawer} />
          <Drawer
            className="drawer"
            placement="right"
            open={openSide}
            onClose={toggleDrawer}
            closeIcon={
              <div className="icon-container-drawer">
                {" "}
                <img className="drawer-close" src={close} />
              </div>
            }
          >
            <a className="drawer-logo">
              <img src="https://devplus.edu.vn/assets/images/Artboard_2.png" />
            </a>
            <p className="drawer-text">
              Devplus's mission is filling the gap between school and corporate,
              reduce in-house training cost and effort for IT companies.
            </p>
            <div className="drawer-img">
              <Image.PreviewGroup>
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/1.png"
                />
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/2.png"
                />
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/3.png"
                />
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/4.png"
                />
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/5.png"
                />
                <Image
                  width={116}
                  src="https://devplus.edu.vn/assets/images/devplus/6.png"
                />
              </Image.PreviewGroup>
            </div>
            <div className="drawer-map">
              <img src="https://devplus.edu.vn/assets/images/map.png"></img>
            </div>
            <div>
              <a
                className="icon-facebook"
                href="https://www.facebook.com/Devplusprogramme"
              >
                {" "}
                <img
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                />{" "}
              </a>
            </div>
          </Drawer>
        </nav>
      </Col>
      <Row className="mobile-menu" >
        <Space wrap style={{background:"red"}}>
          <Dropdown menu={menuProps} >
            <Button>
              <Space>
                <MenuOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </Row>
    </Row>
  );
};
export default Headernav;
