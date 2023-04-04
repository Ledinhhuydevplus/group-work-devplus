import React, { useState, useEffect } from "react";
import { Col, Collapse, Row, Typography } from "antd";
import "./FAQ.scss";
import "./CollapseCard.scss";
import axios from "axios";

export default function FAQ() {
  const [activeKey, setActiveKey] = useState(0);
  const [faqsList, setFaqsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/get_concerns")
      .then((res) => setFaqsList(res.data));
  }, []);

  const openCollapse = (key) => {
    setActiveKey(key);
  };

  return (
    <Row className="faq-section">
      <Col xl={24} lg={24} md={24} sm={24} className="custom-container">
        <Row>
          <Col xl={12} lg={24} md={24} sm={24} className="left-section">
            <Row className="left-section-title-wrapper">
              <Col lg={24} md={24} sm={24} xs={24}>
                <Typography.Text className="left-section-title">
                  Some common concerns
                </Typography.Text>
              </Col>
            </Row>
            <Row className="left-section-faq">
              <Col lg={24} md={24} sm={24} xs={24}>
                <Collapse
                  accordion
                  defaultActiveKey={["0"]}
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <i
                      className={
                        isActive ? "fa fa-bell-slash-o" : "fa fa-bell-o"
                      }
                    />
                  )}
                  className="custom-collapse"
                  onChange={(key) => openCollapse(key)}
                >
                  {faqsList && faqsList.map((item, index) => (
                    <Collapse.Panel
                      header={item.name}
                      key={index}
                      className={
                        index == activeKey
                          ? "custom-active-collapse-panel"
                          : "custom-collapse-panel"
                      }
                    >
                      <div className="custom-collapse-content">
                        <p>{item.description}</p>
                      </div>
                    </Collapse.Panel>
                  ))}
                </Collapse>
              </Col>
            </Row>
          </Col>
          <Col
            xl={12}
            lg={24}
            md={24}
            className="right-section"
            style={{
              background:
                'url("	https://devplus.edu.vn/assets/images/devplus/video_03.png")',
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=mUjhiT0zSKI"
              className="video-icon"
            >
              <div className="button">
                <i className="fa fa-play"></i>
              </div>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
