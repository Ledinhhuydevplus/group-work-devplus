import { Col, Row, Typography } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
import "./PlusCard.scss";

PlusCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

PlusCard.defaultProps = {
  title: "",
  image: "",
};

export default function PlusCard(props) {
  const { title, image } = props;

  return (
    <Col lg={8} md={12} sm={24} className="plus-card wow fadeInUp">
      <Row className="course">
        <img src={image} alt="course-img" />
        <Typography.Title className="course-title">{title}</Typography.Title>
      </Row>
    </Col>
  );
}
