import React, { useEffect, useState } from "react";
import PlusCard from "./PlusCard";
import { Col, Row, Typography } from "antd";
import "./OurMainCampus.scss";
import axios from "axios";

export default function OurMainCampus() {
  const [plusCardsList, setPlusCardsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/get_campus")
      .then((res) => setPlusCardsList(res.data));
  }, []);

  return (
    <Row className="campus-section main-background-image">
      <Col className="custom-container">
        <Row className="content-wrapper">
          <Col span={24} className="title-wrapper">
            <Typography.Title className="title">
              Our main campus
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={30}>
          {plusCardsList.map((card, index) => (
            <PlusCard key={index} title={card.description} image={card.image} />
          ))}
        </Row>
      </Col>
    </Row>
  );
}
