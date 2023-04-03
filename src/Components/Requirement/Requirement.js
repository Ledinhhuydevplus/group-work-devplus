import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Requirement.scss";

const Requirement = (props) => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/get_category")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setItemData({ data });
      });
  }, []);

  return (
    <>
      <Row className="requirement">
        <Col
          sm={24}
          md={24}
          lg={24}
          className="container"
          style={{ backgroundColor: "#f3f8f9" }}
        >
          <Typography.Text className="big-title">
            What an engineer after Devplus will must have?
          </Typography.Text>
          <Row gutter={[30, 30]} className="aaa">
            {itemData?.data?.map((item, index) => {
              return (
                <Col
                  lg={8}
                  md={12}
                  sm={24}  
                  xs={24}               
                  key={index}
                >
                  <div className="requirement-item">
                  <div className="container-card">
                    <div className="image">
                      <img className="image-item" src={item.image} alt="" />
                    </div>
                    <div className="text-title">
                      <h4 className="title">{item.name}</h4>
                      <span className="courses">{item.description}</span>
                    </div>
                  </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </>
  );
};
export default Requirement;
