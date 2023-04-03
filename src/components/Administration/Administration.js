import React, { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import axios from "axios";

import "./Administration.scss";
import InputModal from "./InputModal";

export default function Administration() {
  const [sectionContent, setSectionContent] = useState({
    image: "",
    title: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/get_admission")
      .then((res) => setSectionContent(res.data[0]));
  }, []);

  const first_content_description = `Disclaimer: This position is expected to start around Feb 2022 and continue through 
    the entire Summer term. We ask for a minimum of 12 weeks, full-time, for most internships. Please consider before 
    submitting an application.`;
  const second_content_description = ` Devplus aims to provide students the chance to work with our clients and awesome mentors to level up your programing
    skillset in the RIGHT path. With your education and experience, you will be able to take on real-world challenges from
    day one.`;

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div class="administration-section">
      <InputModal isShown={showModal} setShowModal={setShowModal} />
      <Row style={{ alignItems: "center" }}>
        <Col lg={12} md={24} sm={24}>
          <img src={sectionContent.image} alt="administration-img" />
        </Col>
        <Col lg={12} md={24} sm={24} className="wow fadeInUp">
          <Row className="content">
            <Typography.Title className="content-title">
              {sectionContent.title}
            </Typography.Title>
            <Col className="content-description">
              {first_content_description}
            </Col>
            <Col
              className="content-description"
              style={{ marginBottom: "40px" }}
            >
              {second_content_description}
            </Col>
            <Col className="end-section">
              <button class="custom-button" onClick={openModal}>
                Apply now
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
