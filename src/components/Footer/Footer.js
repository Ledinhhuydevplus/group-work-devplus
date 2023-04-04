import React, { useState } from "react";
import "./Footer.scss";
import "antd/dist/antd.css";
import { Col, Row, Typography } from "antd";
import BackToTopButton from "../BackToTopButton";

const Footer = () => {
  const [footerData, setFooterData] = useState("");

    return (
      <>
        <BackToTopButton />
        <footer className="footer">
          <Row className="footer__top">
            <Col className="container">
              <Row className="footer__row">
                <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                  <Typography.Text className="widget__title">
                    Develop the skills to move fast and stay ahead.
                  </Typography.Text>
                  <ul className="widget__description">
                    <li>
                      Devplus is not a training center, it’s battle campus for you
                      to level up your skillsets and ready to onboard any projects
                      in our “kindest” companies listing
                    </li>
                  </ul>
                </Col>
                <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                  <Typography.Text className="widget__title">
                    For devplus
                  </Typography.Text>
                  <ul className="widget__description">
                    <li>
                      <a href="#" target="_blank">
                        Training space
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Alumni network
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Connect with experts
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                  <Typography.Text className="widget__title">
                    Our campus
                  </Typography.Text>
                  <ul className="widget__description">
                    <li>
                      <a href="#" target="_blank">
                        One plus (+) Programming foundation
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Two plus (++) Skill up and onboard
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Three plus (+++) Become a senior
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} xs={24} sm={24} md={24} className="footer__widget footer__widget-last">
                  <Typography.Text className="widget__title">
                    Address
                  </Typography.Text>
                  <ul className="widget__address">
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <div className="desc">
                        116 - 118 Đường Mai Thúc Lân, Mỹ An, Ngũ Hành Sơn, Đà Nẵng
                      </div>
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <div className="desc">
                        <a href="tel:0368492885">(+84) 368492885</a>
                      </div>
                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <div className="desc">
                        <a href="mailto:Hello@devplus.edu.vn">
                          Hello@devplus.edu.vn
                        </a>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row >
          <Row className="footer__bottom">
            <Col className="container">
              <Row className="middle">
                <Col lg={8} xs={24} sm={24} md={24} className="middle__component">
                  <div className="footer__logo">
                    <a className="logo">
                      <img
                        src="https://devplus.edu.vn/assets/images/Artboard_2.png"
                        alt="art board"
                      />
                    </a>
                  </div>
                </Col>
                <Col
                  lg={8}
                  xs={24}
                  sm={24}
                  md={24}
                  className="middle__component"
                ></Col>
                <Col lg={8} xs={24} sm={24} md={24} className="middle__component middle__component-last">
                  <ul className="footer__social">
                    <li>
                      <a target="_blank" href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>Facebook</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </footer >
      </>
    )
  }
export default Footer;
