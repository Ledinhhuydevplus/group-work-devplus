import { Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Story.scss";
import "antd/dist/antd.css";
import React from "react";
import axios from "axios";
import StoryItem from "./StoryItem";
import { settings } from "./StoryConfig";
import Container from "./Container";
import { useEffect, useState } from "react";
const Story = ({ stories }) => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1000/api/devPlus/get_alumni")
      .then((response) => {
        const data = response.data;
        setItemData({ data });
      });
  }, []);
  return (
    <>
      <Container>
      <p className="story-title">What alumni saying</p>
      </Container>

      <Row justify="center">
        <Col
          span={24}
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 23 }}
          lg={{ span: 23 }}
          xl={{ span: 22 }}
        >
          <Slider {...settings}>
            {itemData?.data?.map((story) => {
              return (
                <>
                  <StoryItem key={story?.id} userStory={story} />
                </>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default Story;
