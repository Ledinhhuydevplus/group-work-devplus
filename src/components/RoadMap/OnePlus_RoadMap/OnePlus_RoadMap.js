import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import "./OnePlus_RoadMap.scss";
import { Col, Divider, Row } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
const OnePlusCampus = () => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/getRoadMap")
      .then((response) => {
        const data = response.data;

        setItemData({ data });
      });
  }, []);
  console.log(itemData.data);
  return (
    <>
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        glareColor={"rgb(0,0,0)"}
      >
        <div className="background-content">
          <div className="tiltComponent">
            <Row gutter={50}>
              {itemData?.data?.map((name) => {
                if (name._id === "6426b60b342d8642d6f13134") {
                  return (
                    <>
                      <Col
                        className="gutter-row"
                        span={24}
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                      >
                        <div class="img-part">
                          <img width="100%" src={name.image} />
                        </div>
                      </Col>
                    </>
                  );
                }
              })}
            </Row>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default OnePlusCampus;
